import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { getPlaces } from '../../utils/service'
import { Place } from '../../types'
import Loader from '../../conponents/loader'
import Error from '../../conponents/error'
import Card from '../../conponents/card'


const List: FC = () => {

    const { isLoading, error, data, refetch } = useQuery<Place[]>({
        queryKey: ['places'],
        queryFn: getPlaces,
        retry: 4
    })


    return (
        <div className='mt-10'>
            <h1 className='font-bold text-2xl'>Yakınınızdaki Lokasyonlar</h1>

            <div>
                {
                    isLoading ? (
                        <Loader designs='my-20' />
                    ) : error ? (
                        <Error info={error} refetch={refetch} />
                    ) : (
                        <div className='grid gap-5 mt-5'>
                            {
                                data?.map((place) => <Card key={place.id} place={place} />)
                            }
                        </div>
                    )}
            </div>
        </div>
    )
}

export default List