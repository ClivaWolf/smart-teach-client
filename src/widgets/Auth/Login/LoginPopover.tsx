import {useState} from "react";
import {Button, Popover} from 'antd';
import LoginWidget from "@/widgets/Auth/Login/LoginWidget";
import {UserOutlined} from "@ant-design/icons";


export default function LoginPopover() {
    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
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