    import File from "../models/file.js";

    export const uploadImage = async (request, response) => {
        // return response.status(200).json({ msg: 'Hello' })
        const fileObj = {
            path: request.file.path,
            name: request.file.originalname
        }

        try {
            const file = await File.create(fileObj);
            console.log(file);  

            // const filePath = `http://localhost:8500/file/${file._id}`; // Adjust the URL as needed
            
            // Extract the file_id from the response data path
            // const file_id = response.data.path.split('/').pop();
            
            // Set the result state with the relative path
            // setResult(`/file/${file._id}`);
            
            response.status(200).json({ path: `http:localhost:8500/file/${file._id}` })
            // setResult(response);
        } catch (error) {
            console.error(error.message);
            response.status(500).json({ error: error.message })
        }
    }

    export const downloadImage = async(request, response) => {
        try {
            const file = await File.findById(request.params.fileId);

            file.downloadContent++;

            await file.save();

            response.download(file.path, file.name);

        } catch (error) {
            console.error(error.message);
            return response.status(500).json({ error: error.message })
        }
    }