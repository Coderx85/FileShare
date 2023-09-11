import mongoose from "mongoose"

const DBconnection = async () => {
    const MONGODB_URL = `mongodb://abpriyanshu007:sWI2u5OiFYSP3IUS@ac-2nkyucp-shard-00-00.scyaon5.mongodb.net:27017,ac-2nkyucp-shard-00-01.scyaon5.mongodb.net:27017,ac-2nkyucp-shard-00-02.scyaon5.mongodb.net:27017/?ssl=true&replicaSet=atlas-11hhki-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URL, { useNewUrlParser: true});
        console.log('Database connected successfully')
    } catch (error) {
        console.error('Error while checking with the database ', error.message);
    }
}

export default DBconnection;