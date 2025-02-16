import { FC } from 'react'

const Filter: FC = () => {
    return (
        <form className='flex flex-col gap-4 lg:gap-10'>

            <div className='field'>
                <label>Nereye</label>
                <select className='input'>
                    <option value="">Seçiniz</option>
                </select>
            </div>

            <div className='field'>
                <label>Konaklama Yeri Adına göre ara</label>
                <input type="text" placeholder='Seaside Villa' className='input' />
            </div>

            <div className='field'>
                <label>Nereye</label>
                <select className='input'>
                    <option value="">Seçiniz</option>
                </select>
            </div>

            <div className='flex justify-end'>
                <button type='reset' className='bg-blue-500 p-1 px-4 text-white rounded-md w-fit'>Filtreleri Temizle</button>

            </div>

        </form>
    )
}

export default Filter