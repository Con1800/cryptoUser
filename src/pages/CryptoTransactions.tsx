import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get_transaction_by_crypto } from '../api/endpoints'
import type { Transaction } from '../types/crypto'

const CryptoTransactions = () => {
    const { cryptoName } = useParams()

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        const fetchTransaction = async () => {
            if (!cryptoName) return;

            try {
                const data = await get_transaction_by_crypto(cryptoName);
                setTransactions(data);
            } catch (error) {
                console.error(error)
            }
        };
        fetchTransaction();
    }, [cryptoName])

    return (
        <div>
            <h1>{cryptoName} Transaction</h1>

            {transactions.map((transaction) => (
                <div key={transaction.id}>
                    <p>Invested: ${transaction.total_money_invested}</p>
                     <p>Purchased price: ${transaction.purchased_price}</p>
                    <p>Shares: {transaction.shares}</p>
                    <p>Date: {transaction.date_bought}</p>

                </div>
            ))}
        
        </div>
    )
}

export default CryptoTransactions
