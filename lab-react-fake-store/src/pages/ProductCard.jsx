const ProductCard = ({
    title,
    price,
    category,
    image
}) => {

    return (
        <div className="ProductCard">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div>
                <h3>{title}</h3>
                <p>{price}€ | {category}</p>
            </div>
        </div>
    )
}

export default ProductCard