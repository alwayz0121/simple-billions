import Image from "next/image";
import Link from "next/link";
import { IListProps, truncatedWorth } from "../app/page";
import styles from "./List.module.css";

export default async function List({
  id,
  squareImage,
  name,
  netWorth,
  industries,
}: IListProps) {
  return (
    <Link href={`/person/${id}`} key={id} className={styles.bg}>
      {squareImage && squareImage !== "https:undefined" ? (
        <Image alt={name} src={squareImage} width={145} height={145} />
      ) : (
        <div className={styles.no_img}>No image</div>
      )}

      <div className={styles.desc_wrapper}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.desc}>
          <span>{truncatedWorth(netWorth)} Billions</span>
          <span>{industries}</span>
        </div>
      </div>
    </Link>
  );
}
