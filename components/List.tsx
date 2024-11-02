import Image from "next/image";
import Link from "next/link";
import { IListProps } from "../app/page";
import styles from "./List.module.css";

export default async function List({
  id,
  squareImage,
  name,
  netWorth,
  industries,
}: IListProps) {
  const truncatedWorth = Math.round(netWorth / 1000);

  return (
    <Link href={`/person/${id}`} key={id} className={styles.bg}>
      {squareImage && squareImage !== "https:undefined" ? (
        <Image alt={name} src={squareImage} width={145} height={145} />
      ) : (
        <div>No image</div>
      )}

      <div className={styles.desc_wrapper}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.desc}>
          <span>{truncatedWorth} Billions</span>
          <span>{industries}</span>
        </div>
      </div>
    </Link>
  );
}
