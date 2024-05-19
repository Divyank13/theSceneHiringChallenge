import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { DogDataContext } from "../../context/dogData"

export const DogCards = ({ dogDetails }) => {
    const {setDogAndImgId} = useContext(DogDataContext)

    const navigate = useNavigate()

    const onClickDogCard = () => {
        setDogAndImgId({id: dogDetails?.id, imageId: dogDetails?.image?.id})
        navigate('/details')
    }

    return (
        <div className="card w-60 border cursor-pointer rounded-md overflow-hidden hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition delay-200" onClick={() => onClickDogCard()}>
            <div className="w-60 h-[9rem] overflow-hidden flex items-center justify-center">
                <img src={dogDetails?.image?.url} alt={dogDetails?.name} />
            </div>
            <p className="text-sm my-2 ml-2">{dogDetails?.name}</p>
        </div>
    )
}
