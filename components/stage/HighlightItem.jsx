import Image from "next/image";
import Link from "next/link";
import Pic from "../../public/images/placeholder.jpeg";
import Classes from './HighlightItem.module.css'

export default function HighlightItem({ title, description, color, image }) {
  if (color) {
    return (
      <article className={Classes.container}>
        <div style={{backgroundColor: color, width: '120px', height: '120px'}}></div>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    );
  }
  return (
    <article className={Classes.container}>
      <Image src={image} width={120}></Image>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
