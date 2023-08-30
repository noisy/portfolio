import type { IMe } from "@/types/IMe";
import { useDB } from "./useDB";
const { me } = useDB();

export function useMe(): IMe {
  return { ...me };
}
