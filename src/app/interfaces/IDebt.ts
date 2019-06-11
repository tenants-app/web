import {User} from './IUser';

export interface Debt {
    _id: string;
    paid: boolean;
    name: string;
    value: number;
    holder: User;
    debtor: User;
}
