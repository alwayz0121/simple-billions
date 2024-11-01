import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

const API_URL = "https://billions-api.nomadcoders.workers.dev/";

async function getAllList() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

interface IListProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export default async function HomePage() {
  const lists = await getAllList();

  return lists.map((list: IListProps) => {
    const truncatedWorth = Math.round(list.netWorth / 1000);

    return (
      <Link href={`/person/${list.id}`} key={list.id}>
        {list.squareImage && list.squareImage !== "https:undefined" ? (
          <Image
            alt={list.name}
            src={list.squareImage}
            width={145}
            height={145}
          />
        ) : (
          <div>No image available</div>
        )}

        <h3>{list.name}</h3>
        <div>
          <span>{truncatedWorth} Billions</span> /{" "}
          <span>{list.industries}</span>
        </div>
      </Link>
    );
  });
}
