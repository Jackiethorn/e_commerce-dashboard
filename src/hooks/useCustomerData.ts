import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";

async function fetchCustomerData() {
  const { data } = await supabase.from("customers").select("*");
  return data;
}

export function useCustomerData() {
  const { data, isLoading, isPending, isFetched, isError } = useQuery({
    queryKey: ["customerData"],
    queryFn: fetchCustomerData,
  });

  return { data, isLoading, isPending, isFetched, isError };
}
