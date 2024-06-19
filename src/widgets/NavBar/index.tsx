'use client'
import {Layout} from 'antd';
import Link from "next/link";

import styles from './navBar.module.css'
import AvatarWidget from "@/widgets/NavBar/AvatarWidget";

const {Header} = Layout;


export default function NavBar() {
    return (
        <Header className={styles.header}>
            <Link href={'/'}>
                <div className={styles.logo} >SmartTeach</div>
            </Link>
            
            <AvatarWidget/>
        </Header>
    )
}