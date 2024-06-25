import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CountCompoment from "./page/count/CountCompoment";
import {
  fetchProducts,
  selectAllProducts,
} from "./redux/feature/products/ProductSlice";
import { useEffect } from "react";
import { Card } from "flowbite-react";
import CardCompoment from "./common/cards/CardCompoment";
function App() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <h1 className="text-3xl text-blue-700 text-center font-bold ">
        This is products for us
      </h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-5 px-5 mt-3">
        {products.map((product, index) => {
          return (
            <CardCompoment
              key={index}
              title={product.name}
              image={product.image}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
