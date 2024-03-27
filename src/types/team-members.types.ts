export type TeamMemberType = {
  id: string;
  first_name: string;
  last_name: string;
  total_sale: number;
  thisMonths_sale: number;
  age: number;
  icon: string;
  email: string;
};

export type BestSellersFromTeamType = {
  name: string;
  age: number;
  monthly_sale: number;
  avatar: string;
};
