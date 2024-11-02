import List from "../components/List";

export const metadata = {
  title: "Home",
};

const API_URL = "https://billions-api.nomadcoders.workers.dev/";

async function getAllList() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export interface IListProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export default async function HomePage() {
  const lists = await getAllList();

  return (
    <div
      style={{
        display: "grid",
        gap: "50px 10px",
        gridTemplateColumns: "repeat(auto-fill, minmax(145px, 1fr))",
      }}
    >
      {lists.map((list: IListProps) => {
        return (
          <List
            key={list.id}
            id={list.id}
            squareImage={list.squareImage}
            name={list.name}
            netWorth={list.netWorth}
            industries={list.industries}
          />
        );
      })}
    </div>
  );
}
