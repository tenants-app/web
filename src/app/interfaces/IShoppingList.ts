import {Debtor} from './IDebtor';
import {User} from './IUser';
import {Product} from './IProduct';

export interface ShoppingList {
    _id: string;
    name: string;
    value: number;
    products: Array<Product>;
    debtors: Array<Debtor>;
    user: User;
}
