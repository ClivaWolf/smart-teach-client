import {useState} from "react";
import {Button, Popover} from 'antd';
import LoginWidget from "@/widgets/Auth/Login/LoginWidget";
import {UserOutlined} from "@ant-design/icons";
import {usePathname} from "next/navigation";


export default function LoginPopover() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const handleOpenChange = (newOpen: boolean) => {
        if (pathname !== '/login')
            setOpen(newOpen);
    };

    return (
        <Popover
            content={<LoginWidget/>}
            title="Логин"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
        >
            <Button type="link" icon={<UserOutlined/>}>Вход</Button>
        </Popover>
    );
}