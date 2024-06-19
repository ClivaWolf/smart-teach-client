'use client';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserAddOutlined, UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Layout, Menu, MenuProps, Row, Space, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Pie, Tiny } from '@ant-design/plots';

type MenuItem = Required<MenuProps>['items'][number];


function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Statistics', '1', <PieChartOutlined />),
    getItem('Actions', '2', <DesktopOutlined />),
    getItem('Users', 'sub1', <UserOutlined />, [
        getItem('create new user', '3', <UserAddOutlined />),
        getItem('review users', '4', <UsergroupAddOutlined />),
    ]),
    getItem('Files', '5', <FileOutlined />),
];

function AdminDashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh', margin: 0 }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <DemoPie />
                        <Space direction="horizontal">
                            <DemoRing percent={0.3} />
                            <DemoRing percent={0.63} />
                            <DemoRing percent={0.475} />
                            <DemoRing percent={0.77} />
                        </Space>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

function DemoPie() {
    const config = {
        data: [
            { type: 'test1', value: 27 },
            { type: 'test2', value: 25 },
            { type: 'test3', value: 18 },
            { type: 'test4', value: 5 },
        ],
        angleField: 'value',
        colorField: 'type',
        label: {
            text: 'value',
            style: {
                fontWeight: 'bold',
            },
        },
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 5,
            },
        },
    };
    return <Pie {...config} />;
}

const DemoRing = ({ percent }: { percent: number }) => {
    const config = {
        percent,
        width: 120,
        height: 120,
        color: ['#E8EFF5', '#66AFF4'],
        annotations: [
            {
                type: 'text',
                style: {
                    text: `${percent * 100}%`,
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 16,
                    fontStyle: 'bold',
                },
            },
        ],
    };

    return <Tiny.Ring {...config} />;
};

export default AdminDashboard;