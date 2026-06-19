export type Product = {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: string;
  stock: number;
  status: "Activo" | "Pausado" | "Sin stock";
  imageLabel?: string;
};

export const currentUser = {
  name: "Olivia",
  role: "Lider de diseno",
  avatarInitials: "O",
};

export const dashboardSummary = {
  productsCount: 123,
  storesCount: 10,
};

export const products: Product[] = [
  {
    id: "123456",
    name: "Alfajores Havanna Chocolate 12 Unidades",
    sku: "#123456",
    category: "Alimentos",
    price: "$18.500",
    stock: 48,
    status: "Activo",
    imageLabel: "HAV",
  },
  {
    id: "999",
    name: "Product 2",
    sku: "#999",
    category: "Libreria",
    price: "$9.250",
    stock: 18,
    status: "Activo",
  },
  {
    id: "071",
    name: "Product 3",
    sku: "#071",
    category: "Hogar",
    price: "$42.000",
    stock: 0,
    status: "Sin stock",
  },
  {
    id: "8289",
    name: "Product 4",
    sku: "#8289",
    category: "Electronica",
    price: "$118.900",
    stock: 7,
    status: "Pausado",
  },
  {
    id: "456",
    name: "Product 5",
    sku: "#456",
    category: "Alimentos",
    price: "$7.500",
    stock: 86,
    status: "Activo",
  },
  {
    id: "3456",
    name: "Product 6",
    sku: "#3456",
    category: "Indumentaria",
    price: "$31.700",
    stock: 22,
    status: "Activo",
  },
  {
    id: "123",
    name: "Product 7",
    sku: "#123",
    category: "Jugueteria",
    price: "$15.300",
    stock: 12,
    status: "Pausado",
  },
  {
    id: "8",
    name: "Product 8",
    sku: "#8",
    category: "Belleza",
    price: "$6.100",
    stock: 64,
    status: "Activo",
  },
];
