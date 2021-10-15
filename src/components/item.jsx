import "./item.css";
import QuantityPicker from "./quantityPicker";

const Item = (props) => {
//state

//functions
const handleAdd = () => {
    console.log("Adding item to cart")
};

//return
    return (
        <div className="item">

            <h5>{props.data.title || "no title"}</h5>

            <label className="total">${props.data.price.toFixed(2)}</label>
            <label className="price">${props.data.price.toFixed(2)}</label>

            <img src={props.data.image} alt="product"/>

            <div className="controls">
                <QuantityPicker minimum={props.data.minimum || 1} />
                <button onClick={handleAdd} className="btn btn-sn btn-dark"> <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                Add
                </button>
            </div>
        </div>
    );
};

export default Item;

