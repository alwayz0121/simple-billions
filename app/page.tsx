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
        width: "700px",
        margin: "100px auto 0",
      }}
    >
      {lists.map((list: IListProps) => {
        const truncatedWorth = Math.round(list.netWorth / 1000);

        return (
          <List
            key={list.id} // 고유 키 추가
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
