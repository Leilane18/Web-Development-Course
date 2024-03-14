import { useQueryCep } from "../hooks/useQueryCep";

export function App() {
  const { data, isLoading, error } = useQueryCep();
  console.log(data);

  console.log(error);
  
  
  return (
    <>
      <h1>App</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error && <div>Error...</div>}

     {data && <pre>{data}</pre>}
    </>
  );
}
