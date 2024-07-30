import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {

  const { productId } = useParams()
  const [product, setProduct] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProductData()
  }, [])

  const fetchProductData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }

  return (
    isLoading
      ? <h1>Cargando...</h1>
      : (
        <div className="ProductDetailsPage">
          <h1>{product.title}</h1>
          <hr />
          <Link to={'/'}>Volver al listado</Link >
        </div>
      )
  )
}

export default ProductDetailsPage;
