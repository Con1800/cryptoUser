import { useState } from 'react'
import { create_cryto } from '../api/endpoints'

const AddCryptoName = () => {
    const [cryptoName, setCryptoName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        // clearing both messages before every submission.
        setSuccessMessage("")
        setErrorMessage("")
        try {
            await create_cryto(cryptoName)
            setSuccessMessage("Cryptocurrency added successfully");
            setCryptoName("")
        } catch (error) {
            setErrorMessage("Crypto already exist")
            console.error("Error Adding cryptocurrency", error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add cryptocurrency</h1>

                <input type='text' placeholder='Crypto name (e.g. SOL)' value={cryptoName} onChange={(e) =>setCryptoName(e.target.value)} maxLength={20} required />
                <button type='submit'>Add Crypto</button>

                {errorMessage && (
                    <p>{errorMessage}</p>
                )}
                {successMessage && (
                    <p>{successMessage}</p>
                )}
            </form>
        
        </div>
    )
}

export default AddCryptoName
