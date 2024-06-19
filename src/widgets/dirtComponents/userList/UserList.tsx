'use client';

import { useState, useEffect } from 'react';
import { Table, Pagination } from 'antd';
import axios from 'axios';
import { serverConfig } from '@/shared/config/config';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    fetchUsers(currentPage, pageSize);
  }, [currentPage]);

  const fetchUsers = async (page: number, size: number) => {
    try {
      const response = await axios.get(`${serverConfig.urlServer}/users?page=${page}&limit=${size}`);
      setUsers(response.data.items);
      setTotal(response.data.total);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Login', dataIndex: 'login', key: 'login' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    // { title: 'Roles', dataIndex: 'roles', key: 'roles' },
    // config table
  ];

  return (
    <div>
      <Table dataSource={users} columns={columns} pagination={false} />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={total}
        onChange={handleChange}
      />
    </div>
  );
};

export default UsersList;
