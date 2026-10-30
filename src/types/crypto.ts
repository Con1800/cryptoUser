export interface Crypto {
    id: number;
    name: string;
}


export interface Transaction {
    id: number;
    crypto: string;
    total_money_invested: number;
    purchased_price: number;
    shares: number | null;
    date_bought: string;
}