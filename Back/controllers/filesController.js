const slugify = require('slugify');
const fs = require('fs');
const path = require('path');

module.exports = {

    uploadFile: async (request, response) => {

        try {

            if(!request.files) {

                response.send({

                    status: false,
                    message: 'No file uploaded'

                });

            } else {

                //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
                let uploadedFile = request.files.uploadedFile;
                
                //Use the mv() method to place the file in upload directory (i.e. "uploads")
                uploadedFile.mv('./files/' + uploadedFile.name);

                //send response
                response.json({

                    status: true,
                    message: 'File is uploaded',
                    data: {

                        name: uploadedFile.name,
                        mimetype: uploadedFile.mimetype,
                        size: uploadedFile.size

                    }
                });
            }

        } catch (err) {

            response.status(500).send(err);

        }
    },

    deleteFile: async (request, response) => {

    console.log('request.body.fileName in router: ',request.body.fileName )

    const fileName = request.body.fileName;

    const path = './files/' + fileName;

    console.log('path: ', path)

    fs.unlink(path, (err) => {
    if (err) {
        console.error(err)
        return
    } else {
        response.json({

            status: true,
            message: 'File is deleted',
            data: {

                name: fileName,

            }
        })
        console.log('well done !!!!')
    }

    //file removed
    })
    },

    findAllFiles: async (request, response, next) => {
    const dirPath = path.join(__dirname,'../files');

    fs.readdir(dirPath, (error, files) => {

        if (error) {

            response.json({

                status: false,
                message: 'File not found.'

            })
        };

        
        const result = [];

        files.forEach(file => {

            const formatedFile = {};

            console.log('file path :', dirPath+'/'+file)

            const stats = fs.statSync(dirPath+'/'+file);
            const fileSizeInBytes = stats["size"];
            const fileSizeInMegabytes = fileSizeInBytes / 1000000.0

            formatedFile['name'] = file;
            formatedFile['size b'] = fileSizeInBytes;
            formatedFile['size Mb'] = fileSizeInMegabytes;
            formatedFile['created at'] = stats["birthtime"];
            formatedFile['modified at'] = stats["mtime"];

            result.push(formatedFile);

            console.log('stats :',stats)
        })

        
        response.json({

            status: true,
            message: 'File(s) found',
            data: result
        })
    });
    },

    downloadFile: async (request, response, next) => {


    const dirPath = path.join(__dirname,'../files');

        const fileName = request.params.filename

        const file = dirPath+'/'+ fileName
        response.download(file);

    }
  
}