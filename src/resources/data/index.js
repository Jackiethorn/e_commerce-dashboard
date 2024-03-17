//THIS FILE SEEDS THE SUPABASE DB
import { supabase } from "../../utils/supabase.ts";
import { productsData } from "./products.ts";

export async function seedProducts() {
  try {
    for (const product of productsData) {
      // Remove 'total', 'skip', and 'limit' properties from the object
      if (product.total || product.skip || product.limit) continue;

      const { data, error } = await supabase.from("products").insert([product]);
      console.log("product", product, "data", data, "error", error);
      if (error) {
        console.error("Error inserting product:", error.message);
      } else {
        console.log("Product inserted successfully:", data);
      }
    }
  } catch (error) {
    console.error("Error inserting products:", error.message);
  }
}

seedProducts();
