import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";

async function fetchTeamData() {
  const { data } = await supabase.from("team").select("*");
  return data;
}

export function useTeamData() {
  const { data, isLoading, isPending, isFetched, isError } = useQuery({
    queryKey: ["teamData"],
    queryFn: fetchTeamData,
  });

  return { data, isLoading, isPending, isFetched, isError };
}
