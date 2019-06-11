import {Debtor} from './IDebtor';
import {User} from './IUser';

export interface Bill {
    _id: string;
    name: string;
    value: number;
    debtors: Array<Debtor>;
    user: User;
}
