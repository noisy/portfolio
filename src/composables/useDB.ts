import db from "@/db";
import { IDB } from "@/types/IDB";

export function useDB(): IDB {
  return { ...db };
}
