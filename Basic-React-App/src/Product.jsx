import "./Product.css";
import Price from "./Price.jsx"


function Product({ title, idx }) {

    // const list = features?.map((item) => (
    //             <li>{item}</li>
    //         ))

    // let isDiscount = price > 30000 ? "Discount of 5%" : "";
    // let isDiscount = price > 30000;
    // let styles = { backgroundColor: isDiscount ? "yellow" : "" };
    let oldPrices = ["12,49", "11,90", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = [["8,000 DPI", "5 Programmable buttons"], ["intuitive surface", "designed for ipad pro"], ["designed for ipad pro", "intuitive surface"], ["wireless", "optical orientation"]];
    return (

        <div className="product" >
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
            {/* <h3>{title}</h3>
            <h5>Price: {price}</h5>
            <p>{features?.map((item) => (
                <li>{item}</li>
            ))}</p>
            {isDiscount && <p>Discount of 5%</p>} */}
        </div>
    );
}

export default Product;