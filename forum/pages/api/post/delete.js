import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청,응답) {
    if (요청.method == 'DELETE') {
        console.log(요청.body)
        let session = await getServerSession(요청,응답,authOptions)
        let db = (await connectDB).db('forum');
        
        let my = await db.collection('post').findOne({_id : new ObjectId})
        let result = await db.collection('post').deleteOne(
            {_id : new ObjectId(요청.body)});
        console.log(result);
        응답.status(200).json("삭제 완료");
    }
}