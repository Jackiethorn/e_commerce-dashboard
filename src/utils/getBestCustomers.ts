import { CustomersType } from "@/types/customers.types";

export async function getBestCustomers(data: CustomersType[]) {
  const filteredData = data.map((customer) => ({
    name: customer.firstName + " " + customer.lastName,
    email: customer.email,
    phone: customer.phone,
    totalSpent: customer.totalSpent,
    order: customer.order,
  }));

  //sort customers by total spent
  const bestCustomers = filteredData
    .sort((a, b) => b.totalSpent - a.totalSpent)
    .slice(0, 5);

  return bestCustomers;
}

export function getBestCustomersTableColumns() {
  return [
    { type: "accessor", name: "name" },
    { type: "accessor", name: "email" },
    { type: "accessor", name: "phone" },
    { type: "accessor", name: "order" },
    { type: "accessor", name: "totalSpent" },
  ];
}
