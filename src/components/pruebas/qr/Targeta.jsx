import { useParams } from 'react-router-dom'

function Targeta() {
    const params = useParams()

    return (
        <div className='text-light'>
            hola {params.edicion}
        </div>
    )
}

export default Targeta
