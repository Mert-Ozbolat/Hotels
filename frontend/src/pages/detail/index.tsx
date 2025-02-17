import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { getPlace } from '../../utils/service'
import Loader from '../../conponents/loader'
import Error from '../../conponents/error'
import Return from './return'

const Detail: FC = () => {
    const { id } = useParams()

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['place'],
        queryFn: () => getPlace(id as string)
    })

    if (isLoading) return (<div>
        <Return />
        <Loader />
    </div>)

    return (
        <div className='container'>
            <Return />
            {
                isLoading ? (
                    <Loader />
                ) : error ? (
                    <Error info={error} refetch={refetch} />
                ) : (
                    data && (
                        <div>
                            <h1>{data.name}</h1>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Detail