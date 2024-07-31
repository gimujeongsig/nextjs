'use client'
import {useRouter} from 'next/navigation';

export default function DetailLink() {
    let router = useRouter();
    return (
        <div>
            <button onClick={()=>{router.push("/")}}>버튼</button>
            <button onClick={()=>{router.forward()}}>앞으로</button>
            <button onClick={()=>{router.back()}}>뒤로</button>
            <button onClick={()=>{router.refresh()}}>새로고침</button>
            <button onClick={()=>{router.prefetch('/list')}}>버튼</button>
        </div>
    )
}