import supabase from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase
    .from("recent_projects")
    .select("*")
    .eq("category", "recent-project");
  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching projects");
  }

  return data;
}
