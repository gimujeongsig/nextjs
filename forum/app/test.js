export default function handler(요청,응답) {
    if (요청.method=='GET') {
        응답.status(200).json({name : 'GET입니다'});
    }
    if (요청.method== 'POST') {
        응답.status(200).json({name : 'POST입니다'});
    }
}