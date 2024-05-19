import { createContext, useEffect, useState } from "react";

export const DogDataContext = createContext();

export const DogDataHandler = ({children}) => {
    const token = 'live_LjpvvZasr4w1k1HuKvpUKwNLowkjeC8pEvXjKvB636qWnFLBRtkGtrpFgJIyt3ET'
    const header = {
        "Content-Type": "application/json",
        "x-api-key": token
    }

    const [dogDetails, setDogDetails] = useState([])
    const [specificDogDetails, setSpecificDogDetails] = useState({})
    const [dogAndImgId, setDogAndImgId] = useState({id: '', imageId: ''})

    const getDogDetails = async () => {
        try {
            const response = await fetch('https://api.thedogapi.com/v1/breeds/', {
                method: 'GET',
                headers: header,
            })
            setDogDetails(await response.json())
        } catch (error) {
            console.error(error)
        }
    }

    const getSpecificDogDetails = async () => {
        try {
            const details = await fetch(`https://api.thedogapi.com/v1/breeds/${dogAndImgId.id}`, {
                method: 'GET',
                headers: header,
            })
            const image = await fetch(`https://api.thedogapi.com/v1/images/${dogAndImgId.imageId}`, {
                method: 'GET',
                headers: header,
            })
            setSpecificDogDetails({dogData: (await details.json()), imageDetails: (await image.json())})
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getDogDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <DogDataContext.Provider value={{
            dogDetails,
            setDogAndImgId,
            getSpecificDogDetails,
            specificDogDetails,
            setSpecificDogDetails,
        }}>
            {children}
        </DogDataContext.Provider>
    )
}