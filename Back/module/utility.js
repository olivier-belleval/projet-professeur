module.exports = {

    // utility fonction pour vérifier si un objet est vide
    isEmpty: (object) => {

        for (const key in object) {

            if (object.hasOwnProperty(key)) {
                return false;
            };

        };

        return true;

    }

};