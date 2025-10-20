
const ProductsCard = ({ title, price, category, image }) => {
    return (
        <div>
            <img src={image} alt="" width={200} />
            <h2>{title}</h2>
            <p>{category}</p>
            <p>${price}</p>
        </div>
    )
}

export default ProductsCard