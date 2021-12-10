export type Product = {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  image: string;
  stock: number;
};

export type Props = {
  DATA: Product[];
};
