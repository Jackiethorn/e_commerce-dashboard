// we'll make use of pagination type for our other data as well, so it's better to move it to a separate file in the future
export type PaginationType = {
  total: number;
  skip: number;
  limit: number;
};

export type ProductsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
