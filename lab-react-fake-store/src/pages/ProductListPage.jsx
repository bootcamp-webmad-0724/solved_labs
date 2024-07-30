import axios from "axios";
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function ProductListPage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then(response => setProducts(response.data))
      .catch(err => console.log(err))
  }


  return (

    <div className="ProductListPage">

      {
        products.map(elm => {
          return (
            <Link to={`/product/details/${elm.id}`} key={elm.id} >
              <ProductCard {...elm} />
            </Link>
          )
        })
      }

    </div>
  );
}

export default ProductListPage;
