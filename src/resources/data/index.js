//THIS FILE SEEDS THE SUPABASE DB
import { supabase } from "../../utils/supabase.ts";
import { productsData } from "./products.ts";
import { teamMembersData } from "./teamMembers.ts";

async function seedProducts() {
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

async function seedTeamMembers() {
  try {
    for (const teamMember of teamMembersData) {
      const { data, error } = await supabase
        .from("teamMembers")
        .insert([teamMember]);
      console.log("teamMember", teamMember, "data", data, "error", error);
      if (error) {
        console.error("Error inserting teamMember:", error.message);
      } else {
        console.log("Team member inserted successfully:", data);
      }
    }
  } catch (error) {
    console.error("Error inserting team members:", error.message);
  }
}

seedProducts();
seedTeamMembers();
