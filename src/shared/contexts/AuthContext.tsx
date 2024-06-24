'use client';
import React, {createContext, useContext, useState, useEffect, useCallback, useMemo} from 'react';
import axiosInstance from '@/shared/api/axiosInstance';
import {useRouter} from 'next/navigation';
import {UserType} from "@/shared/types/UserType";

interface AuthContextProps {
    user: UserType | null;
    logout: () => void;
    updateUser: () => void;
    token: string | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const router = useRouter();

    const logout = useCallback(() => {
        localStorage.removeItem('token');
        setUser(null);
        setToken(null);
        router.push('/login');
    }, [router]);

    const fetchUser = useCallback(async () => {
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
    }, [logout, token]);

    useEffect(() => {
        if (token) {
            fetchUser();
        }
    }, [fetchUser, token]);

    const updateUser = useCallback(() => {
        fetchUser();
    }, [fetchUser]);

    const contextValue = useMemo(() => ({
        user,
        logout,
        updateUser,
        token,
    }), [user, logout, updateUser, token]);

    return (
        <AuthContext.Provider value={contextValue}>
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
