import { TeamMemberType } from "@/types/team-members.types";

export async function getBestSellersFromTeam(data: TeamMemberType[]) {
  const filteredData = data.map((member) => ({
    name: member.first_name + " " + member.last_name,
    age: member.age,
    avatar: member.icon,
    monthly_sale: member.thisMonths_sale,
  }));

  //sort team members by salary
  const teamMembers = filteredData
    .sort((a, b) => b.monthly_sale - a.monthly_sale)
    .slice(0, 5);

  return teamMembers;
}

export function getBestSellersTableColumns() {
  return [
    { type: "accessor", name: "name" },
    { type: "accessor", name: "age" },
    { type: "accessor", name: "monthly_sale" },
    { type: "accessor", name: "avatar" },
  ];
}
