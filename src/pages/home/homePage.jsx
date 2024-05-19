import { useContext, useEffect, useState } from "react"

import { DogDataContext } from "../../context/dogData"
import { DogCards } from "../../components/dogCards/dogCards"
import { Loader } from "../../components/loader/loader"

export const HomePage = () => {
    const { dogDetails, setDogAndImgId, setSpecificDogDetails } = useContext(DogDataContext)
    const [searchData, setSearchData] = useState(dogDetails)

    const searchDogs = (event) => {
        setSearchData(
            [
                ...dogDetails.filter((dog) => dog.name.slice(0, event.target.value.length).toLowerCase() === event.target.value.toLowerCase()),
                ...dogDetails.filter((dog) => dog.name.slice(0, event.target.value.length).toLowerCase() !== event.target.value.toLowerCase())
                    .filter((dog) => dog.name.concat(dog.breed_group).toLowerCase().includes(event.target.value.toLowerCase()))
            ]
        )
    }

    useEffect(() => {
        setSearchData(dogDetails)
        setDogAndImgId({ id: '', imageId: '' })
        setSpecificDogDetails({})
    }, [dogDetails])

    return (
        <div className="page">
            <p className="text-xl font-bold my-2 text-center">Dogs</p>
            {!dogDetails ? <Loader /> : 
            <div className="px-2">
                <input type="text" name="" id="" placeholder="Search" className="border outline-none py-2 px-4 my-6 w-full rounded-3xl text-center text-lg font-medium" onChange={(event) => searchDogs(event)} />
                <div className="flex flex-wrap gap-6">
                    {searchData.map(dogData => <DogCards key={dogData?.id} dogDetails={dogData} />)}
                </div>
            </div>}
        </div>
    )
}
