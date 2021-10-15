import React, {useState} from 'react';

const QuantityPicker = (props) => {
    const [quantity, setQuantity] = useState(props.minimum);

    const increase =() => {
        setQuantity(quantity + 1);
    };

    const decrease = () => {
        //dont go below 1
        let newVal = quantity - 1;
        if(newVal >= props.minimum) {
        setQuantity(quantity - 1);
        }
    };

    return (
    <div className="quantity-picker">
        <button onClick={increase}className="btn btn -sn btn-primary">
            +
        </button>

        <label>{quantity}</label>

        <button disabled={quantity === props.minimum} onClick={decrease} className="btn btn -sn btn-primary">
            -
        </button>
    </div>
    );
};

export default QuantityPicker;