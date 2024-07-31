import {connectDB} from "/utils/database.js";

export default async function Home() {
  // 모듈을 사용해서 MongoDB Client 접속
  let client = await connectDB;
  // 접속한 클라이언트에서 사용할 db 선택
  const db = client.db("forum");
  // db에서 'post'라는 콜렉션 찾아서 결과 출력
  let result = await db.collection('post').find().toArray();
  
  return (
    <div>
      {result[0].title}
      <br></br>
      {result[0].content}
    </div>
  );
}