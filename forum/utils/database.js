import { MongoClient } from "mongodb";
const url = 'mongodb+srv://aci00997:1234@kimjeongsig.ckw4lyi.mongodb.net/?retryWrites=true&w=majority&appName=kimjeongsig';
const options = {useNewUrlParser:true};
let connectDB;

if (process.env.NODE_ENV === 'developent') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url,options).connect();
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url, options).connect();
}
export {connectDB};
