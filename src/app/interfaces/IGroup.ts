import {Duty} from './IDuty';
import {Debt} from './IDebt';
import {Bill} from './IBill';
import {User} from './IUser';

export interface Group {
    _id: string;
    name: string;
    owner: string;
    duties: Array<Duty>;
    debts: Array<Debt>;
    bills: Array<Bill>;
    members: Array<User>;
    // todo: dodać shopping listę array
}
