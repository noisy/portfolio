import db from "@/db";
import type { IDB } from "@/types/IDB";

export function useDB(): IDB {
  return { ...db };
}
