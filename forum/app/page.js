import {connectDB} from "/utils/database.js";

export default async function Home() {
  let client = await connectDB
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray(); 
  console.log(result)
  return (
    <div>
      {result[0].title}
      <br></br>
      {result[0].content}</div>
  );
}
