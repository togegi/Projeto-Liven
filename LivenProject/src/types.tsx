export type Product = {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  image: string;
  stock: number;
};

export type ProductOnCart = {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  image: string;
  stock: number;
  amount: number;
};

export type Props = {
  DATA: Product[];
};
