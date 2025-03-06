import { HttpClient } from "./httpClient";

export const GetAllProducts = ({ id, token }) => {
  const url = `/product/all-products/${id}`;
  return HttpClient.apiCaller({
    token,
    uri: url,
  });
};

export const GetFeaturedProducts = ({ token }) =>
  HttpClient.apiCaller({
    token,
    uri: "/product/featured-products",
  });

const ProductController = {
  GetAllProducts,
  GetFeaturedProducts,
};

export default ProductController;
