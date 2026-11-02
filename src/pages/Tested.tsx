import { useEffect, useState} from 'react'
import { get_transaction } from '../api/endpoints'
import type { Transaction } from '../types/crypto'

const Tested = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([])
        const [loading, setLoading] = useState(true)
    
        useEffect(() => {
            const fetchTransaction = async () => {
                try {
                    const data = await get_transaction();
                    setTransactions(data);
                } catch (error) {
                    console.error("Error fetching data")
                } finally {
                    setLoading(false)
                }
            };
            fetchTransaction();
        }, [])
        if (loading) return <p>loading..</p>

    return (
        <div>
            <h1>All transaction</h1>
            {transactions.map((transaction) => (
                <div key={transaction.id}>
                    <p>Crypto: {transaction.crypto}</p>
                    <p>Purchased Price: {transaction.purchased_price}</p>
                    <p>Total Invested: {transaction.total_money_invested}</p>
                    <p>Shares: {transaction.shares}</p>
                    <p>Date Bought: {transaction.date_bought}</p>
                </div>
            ))}
        </div>
    )
}

export default Tested
