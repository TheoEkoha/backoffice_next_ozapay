import { QueryKey, useMutation, useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { UserDocument } from './users.model';
import { Filters } from '../utils/filter';

const UsersKeys: Record<string, QueryKey> = {
    getAllUsers: ["getAllUsers"],
    getUsersCount: ["getUsersCount"],
    getUserById: ["getUserById"],
}

export const useGetAllUsers = (filters: Filters): UseQueryResult<UserDocument[]> => {
    return useQuery({
        queryKey: [UsersKeys.getAllUsers, filters],
        queryFn: async () => {
            const response = await fetch('/api/users'); // Appel à l'API route
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });
}

export const useGetUsersCount = () => {
    return useQuery({
        queryKey: [UsersKeys.getUsersCount],
        queryFn: async () => {
            const response = await fetch(`http://localhost:4000/users/count`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });
}

export const useGetUserById = (id: string) => {
    return useQuery({
        queryKey: [UsersKeys.getUserById, id],
        queryFn: async () => {
            const response = await fetch(`http://localhost:4000/users/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });
}