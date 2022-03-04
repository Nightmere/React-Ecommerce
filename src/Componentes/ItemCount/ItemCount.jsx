import { useState } from "react"
import Button from 'react-bootstrap/Button'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount( count + 1 )
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount( count - 1 )
        }
    }

    const agregar = () => {
        onAdd( count )
    }

    return (
        <div>
            <Button variant="dark" onClick={restar}> - </Button>
            <label> { count } </label>
            <Button variant="dark" onClick={sumar}> + </Button><br />
            <Button variant="dark" onClick={ agregar }>Add to Cart</Button>
        </div>
    )
}

export default ItemCount