import { useQuery } from "@tanstack/react-query";

async function getCep(cep: string) {
  //const data = await fetch(`https://cdn.apicep.com/file/apicep/${cep}.json`);
  //const data = await fetch("https://api.github.com/users/Leilane18");
  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  return data.json();
}

export function useQueryCep() {
  const query = useQuery({
    queryKey: ["cep"],
    queryFn: () => getCep("63580-000"),
  });

  return query;
}
