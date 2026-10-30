import api from "./axios";
import type { Crypto, Transaction } from "../types/crypto";

// CRYPTO ENDPOINTS

export const get_cryptos = async (): Promise<Crypto[]> => {
    const response = await api.get<Crypto[]>("cryptos/")
    return response.data;
}

export const create_cryto = async (name: string) => {
    const response = await api.post("cryptos/", { name });
    return response.data;
}

// TRANSACTION ENDPOINTS

export const get_transaction = async (): Promise<Transaction[]> => {
    const response = await api.get<Transaction[]>("transaction");
    return response.data;
}


export const create_transaction = async (
    crypto: string,
    total_money_invested: number,
    purchased_price: number,
    date_bought:string,
) => {
    const response = await api.post("transaction/", { 
        crypto, total_money_invested, purchased_price, date_bought 
    });
    return response.data;
}