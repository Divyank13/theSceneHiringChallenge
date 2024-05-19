import { useContext, useEffect } from "react"

import { DogDataContext } from "../../context/dogData"
import { Loader } from "../../components/loader/loader"

export const DogDetails = () => {
    const { getSpecificDogDetails, specificDogDetails } = useContext(DogDataContext)

    useEffect(() => {
        getSpecificDogDetails()
    }, [])

    return (
        <div className="main page">
            {!specificDogDetails?.imageDetails ? <Loader /> : <div className="flex justify-center items-center h-screen overflow-auto">
                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3 rounded-xl h-3/4 overflow-auto w-[42rem] md:w-3/5 sm:w-full sm:pt-6 sm:p-1">
                    <p className="text-xl font-bold md:ml-1">{specificDogDetails?.dogData?.name}</p>
                    <p className="text-l font-medium md:ml-1">{specificDogDetails?.dogData?.breed_group}</p>
                    <div className="w-[40rem] py-2 md:w-80">
                        <img src={specificDogDetails?.imageDetails?.url} alt="" />
                    </div>
                    {specificDogDetails?.dogData?.origin && <p className="flex items-center gap-2 md:ml-1 md:mb-1"><span className="font-medium">Origin:</span><span className="text-[0.9rem] italic">{specificDogDetails?.dogData?.origin}</span></p>}
                    <p className="flex items-center gap-2 md:ml-1 md:mb-1"><span className="font-medium">Temperament:</span><span className="text-[0.9rem] italic">{specificDogDetails?.dogData?.temperament}</span></p>
                    <p className="flex items-center gap-2 md:ml-1 md:mb-1"><span className="font-medium">Height:</span><span className="text-[0.9rem] italic">{`${specificDogDetails?.dogData?.height?.metric} cm`}</span></p>
                    <p className="flex items-center gap-2 md:ml-1 md:mb-1"><span className="font-medium">Weight:</span><span className="text-[0.9rem] italic">{`${specificDogDetails?.dogData?.weight?.metric} kg`}</span></p>
                    <p className="flex items-center gap-2 md:ml-1 md:mb-1"><span className="font-medium">Life Span:</span><span className="text-[0.9rem] italic">{specificDogDetails?.dogData?.life_span}</span></p>
                </div>
            </div>}
        </div> 
    )
}
