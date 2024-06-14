'use client';
import {Button} from 'antd';
import {useState} from 'react';

const Home = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Button type="primary" onClick={() => setCount((count) => count + 1)}>Button {count}</Button>
        </div>
    )
};

export default Home;
//testtest