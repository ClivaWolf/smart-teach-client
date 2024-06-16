'use client';

import {Button} from "antd";
import {useRouter} from "next/navigation";

export default function HomePage() {

    const router = useRouter();

    return (
        <div className="App">
            <h1>ГЛАВНАЯ СТРАНИЦА</h1>
            <Button type="primary" onClick={() => router.push('/')}>Кнопка</Button>
        </div>
    )
}