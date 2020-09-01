const client = require('../dataMappers/client');

const redis = require('redis');

const redisClient = redis.createClient(process.env.REDIS_URL);
redisClient.auth(process.env.REDIS_PASSWORD);

module.exports = {

    prefix: 'OBLOG-REQ-CACHE:',
    redisClient: redisClient,
    expirationTime: 60 * 60 * 24 * 7,

    async query(...params) {

        console.log('SQL request :', ...params);

        if (this.isValidRequest(params)) {
            
            const cachedResult = await this.checkRequestInCache(params);
            
            if (cachedResult) {

                console.log('Used cache for response');

                return cachedResult;

            };

            const freshResult = await client.query(...params);
            
            this.storeQueryInCache(params, freshResult);

            return freshResult;

        } else {

            this.clearCache();
            return await client.query(...params);
            
        };

    },

    checkRequestInCache(query) {

        const key = this.generateKey(query);

        return new Promise((resolve, reject) => {

            this.redisClient.get(key, (err, data) => {

                if (err) {

                    reject(err);

                } else {

                    resolve(JSON.parse(data));

                };

            });

        });
    },

    storeQueryInCache(query, result) {

        console.log('Stored result for :', ...query);

        const key = this.generateKey(query);

        return new Promise((resolve, reject) => {

            this.redisClient.setex(key, this.expirationTime, JSON.stringify(result), (err, data) => {

                if (err) {

                    reject(err);
                    return;  

                };

                resolve(data);

            });

        });
    },

    generateKey(query) {

        return this.prefix + JSON.stringify(query);

    },

    isValidRequest(query) {

        const request = query[0];

        let strRequest = '';

        if (typeof request === 'string') {

            strRequest = request;

        } else if (typeof request === 'object') {

            strRequest = request.text;

        };

        const validRequest = [

            `SELECT * FROM get_all_classes_usernames()`,
            `SELECT * FROM get_articles_with_associated_class()`,
            `SELECT * FROM get_articles_without_associated_class()`,
            `SELECT * FROM get_articles_by_class($1)`,
            `SELECT * FROM get_article_by_id($1)`,
            `SELECT * FROM "kanban".get_all_kanbans()`,
            `SELECT * FROM "kanban".get_all_kanbans_by_class($1)`,
            `SELECT * FROM "kanban".get_one_kanban_by_id($1)`,
            `SELECT * FROM "kanban".get_one_list_by_id($1)`,
            `SELECT * FROM "kanban".get_one_card_by_id($1, $2)`,
            `SELECT * FROM "kanban".get_all_tag()`,
            `SELECT * FROM "kanban".get_one_tag($1)`,
            `SELECT * FROM get_all_classes()`,
            `SELECT * FROM get_articles_without_associated_class()`,
            `SELECT * FROM get_class_by_id($1)`

        ];

        if (validRequest.includes(query[0].text)) {

            return true;

        } else {

            return false;

        };

    },

    getCacheKeys() {

        return new Promise((resolve, reject) => {

            this.redisClient.keys(this.prefix + '*', (err, data) => {

                if (err) {

                    reject(err);

                } else {

                    resolve(data);

                };

            });

        });
    },

    async clearCache() {

        console.log('Clearing cache...');

        const keys = await this.getCacheKeys();

        if (keys.length > 0) {

            this.redisClient.del(...keys);
            
        };

    }


};