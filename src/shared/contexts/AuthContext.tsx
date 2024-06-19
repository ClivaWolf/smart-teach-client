'use client';
import React, {createContext, useContext, useState, useEffect, useCallback} from 'react';
import axiosInstance from '@/shared/api/axiosInstance';
import {useRouter} from 'next/navigation';

interface Role {
    id: string;
    value: string;
    description: string;
}

interface User {
    id: string;
    login: string;
    email: string;
    avatar?: string;
    roles: Role[];
}

interface AuthContextProps {
    user: User | null;
    logout: () => void;
    updateUser: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const logout = useCallback(() => {
        localStorage.removeItem('token');
        setUser(null);
        router.push('/login');
    }, [router]);

    const fetchUser = useCallback(async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await axiosInstance.get('/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch user', error);
                logout(); // Logout if the token is invalid
            }
        }
    }, [logout]);

    useEffect(() => {
        fetchUser().then(_ => {
        });
    }, [fetchUser]);

    const updateUser = () => {
        fetchUser().then(_ => {
        });
    };

    return (
        <AuthContext.Provider value={{user, logout, updateUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
