export type UserDocument = {
    id: string;
    firstName: string;
    lastName: string;
    roles: string[];
    email: string;
    phone: string;
    code: string;
}

export interface GetUsersDto {
    total: number;
    users: UserDocument[];
}


