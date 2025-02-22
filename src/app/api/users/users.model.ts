export type UserDocument = {
    id: string;
    firstName: string;
    lastName: string;
    roles: string[];
    email: string;
    phone: string;
}

export interface GetUsersDto {
    total: number;
    users: UserDocument[];
}


