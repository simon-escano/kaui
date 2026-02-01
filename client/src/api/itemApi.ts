import type { Item } from "../types/Item";
import client from "./axiosClient";

export const getItems = async () => {
  const response = await client.get<Item[]>("/items");
  return response.data;
};
