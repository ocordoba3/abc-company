import { Client } from "@/interfaces/clients";

export async function fetchClients(): Promise<Client[]> {
  const clients: Client[] = await fetch(
    "https://api.jsoning.com/mock/vh5hrrlwqk/clients"
  ).then((resp) => resp.json());

  return clients;
}
