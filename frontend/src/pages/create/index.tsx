import { FC } from "react"
import { Formik } from 'formik'

const Create: FC = () => {

    const initialValues = {}
    const onSubmit = {}


    return (
        <div className="container">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
            >

            </Formik>
        </div>
    )
}

export default Create