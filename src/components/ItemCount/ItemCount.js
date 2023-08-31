import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }



    return(
        <div className="counter">
            <div className="controls">
                <button className="button-1" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="button-1" onClick={increment}>+</button>
            </div>
        </div>
    )
}



export default ItemCount;