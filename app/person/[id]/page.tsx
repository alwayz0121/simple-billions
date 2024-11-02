import PersonalData from "../../../components/Personal";

export const metadata = {
  title: "person details",
};

interface IFinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
}

export interface IPersonalProps {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: IFinancialAsset[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

const getAPIUrl = (id: string) =>
  `https://billions-api.nomadcoders.workers.dev/person/${id}`;

async function getPersonData(id: string) {
  const response = await fetch(getAPIUrl(id));
  const json = await response.json();
  return json;
}

export default async function Detail({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: IPersonalProps = await getPersonData(id);
  console.log(data);

  return (
    <PersonalData
      id={data.id}
      state={data.state}
      city={data.city}
      name={data.name}
      country={data.country}
      position={data.position}
      industries={data.industries}
      financialAssets={data.financialAssets}
      thumbnail={data.thumbnail}
      squareImage={data.squareImage}
      bio={data.bio}
      about={data.about}
      netWorth={data.netWorth}
    />
  );
}
