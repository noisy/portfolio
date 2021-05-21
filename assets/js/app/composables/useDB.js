import db from "../db.js";

export function useDB() {
  return { ...db };
}
