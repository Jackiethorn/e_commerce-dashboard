export type CustomersType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  address: string;
  totalSpent: number;
  order: number;
  created_at?: string;
  updated_at?: string;
};

export type BestCustomersTableType = {
  name: string;
  email: string;
  phone: string;
  totalSpent: number;
  order: number;
};
