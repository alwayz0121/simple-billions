import Image from "next/image";
import Link from "next/link";
import styles from "./Personal.module.css";
import { IPersonalProps } from "../app/person/[id]/page";
import { truncatedWorth } from "../app/page";

export default async function PersonalData({
  id,
  state,
  city,
  name,
  country,
  position,
  industries,
  financialAssets,
  thumbnail,
  squareImage,
  bio,
  about,
  netWorth,
}: IPersonalProps) {
  return (
    <div className={styles.bg}>
      {squareImage && squareImage !== "https:undefined" ? (
        <Image alt={name} src={squareImage} width={300} height={300} />
      ) : (
        <div className={styles.no_img}>No image</div>
      )}

      <div className={styles.desc_wrapper}>
        <p className={styles.name}>{name}</p>
        <p className={styles.desc}>Networth: {truncatedWorth(netWorth)}</p>
        <p className={styles.desc}>Country : {country}</p>
        <p className={styles.desc}>Industry : {industries}</p>
        <p className={styles.desc}>{bio}</p>
      </div>
    </div>
  );
}
