const Imagekit = require('@imagekit/nodejs');

const client = new Imagekit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});


async function uploadImageToStorage(fileBuffer){
    const response = await client.files.upload({
        file: fileBuffer.toString('base64'),
        fileName: `image.jpg`,
    });
    return response;
}

module.exports = uploadImageToStorage
