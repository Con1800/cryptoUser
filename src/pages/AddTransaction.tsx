import { useState, useEffect } from 'react'
import { create_transaction, get_cryptos } from '../api/endpoints'
import type { Crypto } from '../types/crypto'

const AddTransaction = () => {
    const [cryptos, setCryptos] = useState<Crypto[]>([])

    const [crypto, setCrypto] = useState("")
    const [totalMoney, setTotalMoney] = useState("")
    const [purchasedPrice, setPurchasedPrice] = useState("")
    const [dateBought, setDateBought] = useState("")


    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const data = await get_cryptos();
                setCryptos(data);
            } catch (error) {
                console.error("Error fetching cryptos:", error);
            }
        };

        fetchCryptos();
    }, []);

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await create_transaction(
                crypto,
                Number(totalMoney),
                Number(purchasedPrice),
                dateBought
            );
            alert("transation added successfully")
        } catch (error) {
            console.error("error adding transaction", error)
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add crypto transaction</h1>

                <select
                    value={crypto}
                    onChange={(e) => setCrypto(e.target.value)}
                    required
                >
                    <option value="">Select Cryptocurrency</option>

                    {cryptos.map((item) => (
                        <option key={item.id} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Total money invested"
                    value={totalMoney}
                    onChange={(e) => setTotalMoney(e.target.value)} required
                />

                <input
                    type="number"
                    placeholder="Purchased price"
                    value={purchasedPrice}
                    onChange={(e) => setPurchasedPrice(e.target.value)} required
                />

                <input
                    type="date"
                    value={dateBought}
                    onChange={(e) => setDateBought(e.target.value)} required
                />

                <button type="submit">Add Transaction</button>

            </form>
        
        </div>
    )
}

export default AddTransaction
