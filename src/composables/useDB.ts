import db from "@/db";

export function useDB() {
  return { ...db };
}
