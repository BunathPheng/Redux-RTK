import React, { useEffect } from "react";
import ProductDetailCard from "../../common/cards/ProductDetailCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductById,
  selectSingleProduct,
} from "../../redux/feature/products/ProductSlice";
import { useParams } from "react-router-dom";
export default function ProductDetail() {
  const singleproduct = useSelector(selectSingleProduct);
  console.log("singleprodut", singleproduct);
  const param = useParams();
  console.log("param", param);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductById(param.id));
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <ProductDetailCard
        image={singleproduct.image}
        title={singleproduct.name}
        des={singleproduct.desc}
        price={singleproduct.price}
      />
    </div>
  );
}
