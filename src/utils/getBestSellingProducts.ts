import { ProductsType } from "../types/products.types.ts";

export async function getBestSellingProducts(data: ProductsType[]) {
  const filteredData = data.map((product) => ({
    title: product.title,
    price: product.price,
    rating: product.rating,
    stock: product.stock,
    sale: product.sale,
    amount: product.sale * product.price,
  }));

  //sort best selling 15 products by sale
  const bestSellingProducts = filteredData
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  return bestSellingProducts;
}

export function getBestSellingProductsTableColumns() {
  return [
    { type: "accessor", name: "title" },
    { type: "accessor", name: "price" },
    { type: "accessor", name: "stock" },
    { type: "accessor", name: "rating" },
    { type: "accessor", name: "amount" },
  ];
}
