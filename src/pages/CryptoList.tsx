import { useEffect, useState } from "react";
import { get_cryptos } from "../api/endpoints";
import type { Crypto } from "../types/crypto";

const CryptoList = () => {
    // usestate here

    //useffect here
    const [cryptos, setCryptos] = useState<Crypto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const data = await get_cryptos();
                setCryptos(data);
            } catch (error) {
                console.error("Error fetching cryptos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCryptos();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
           <h1>crypto list page here</h1>
           <p>for loop here list of crypto</p>
           {cryptos.map((crypto) => (
                <p key={crypto.id}>
                    {crypto.name}
                </p>
            ))}
        </div>
    )
}

export default CryptoList
