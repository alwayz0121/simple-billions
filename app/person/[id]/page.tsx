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

async function getPersonData(id: string): Promise<IPersonalProps> {
  const response = await fetch(getAPIUrl(id));
  const json: IPersonalProps = await response.json();
  return json;
}

export default async function Detail({ params }) {
  const { id } = await params;

  const data: IPersonalProps = await getPersonData(id);

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
