import { FC } from "react"
import { Place } from "../../types"
import { Link } from "react-router-dom"
import Status from "./status"

interface Props {
    place: Place
}

const Card: FC<Props> = ({ place }) => {
    return (
        <Link to={`/place/${place.id}`} className="border border-zinc-300 rounded-md p-4 gap-3 grid grid-cols-3 min-h-[300px] hover:shadow-md">
            <div>
                <img src={place.image_url} alt={place.name} className="size-full object-cover rounded-lg" />
            </div>


            <div className="col-span-2 flex flex-col justify-between">
                <div className="flex flex-col gap3">
                    <div className="flex justify-between items-center">
                        <h1>{place.name}</h1>
                        <Status />
                    </div>
                </div>
            </div>


        </Link>
    )
}

export default Card