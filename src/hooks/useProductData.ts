import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";

async function fetchProductData() {
  const { data } = await supabase.from("products").select("*");
  return data;
}

export function useProductData() {
  const { data, isLoading, isPending, isFetched, isError } = useQuery({
    queryKey: ["productData"],
    queryFn: fetchProductData,
  });

  return { data, isLoading, isPending, isFetched, isError };
}
