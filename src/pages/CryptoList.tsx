import { useEffect, useState } from "react";
import { get_cryptos } from "../api/endpoints";
import type { Crypto } from "../types/crypto";
import { Link } from "react-router-dom";

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
           <h1 className="text-amber-700">crypto list page here</h1>
           <p className="text-amber-200">for loop here list of crypto</p>
           {cryptos.map((crypto) => (
                <div key={crypto.id}>
                    <Link to={`/cryptos/${crypto.name}`}>
                        <p>{crypto.name}</p>
                    </Link>
                </div>
            ))}
            <p>testing</p>
        </div>
    )
}

export default CryptoList
