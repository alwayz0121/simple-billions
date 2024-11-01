// export const metadata = {
//     title: `id: ` id,
//   };

export default function Detail({ params: { id } }: { params: { id: string } }) {
  const API_URL_GET_ONE = `https://billions-api.nomadcoders.workers.dev/person/${id}`;

  return <h1>{id}</h1>;
}
