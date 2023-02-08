import Image from "next/image";
import Link from "next/link";
import Pic from "../../public/images/placeholder.jpeg";

export default function HighlightItem({ title, description, color, image }) {
  if (color) {
    return (
      <article>
        <div style={{backgroundColor: color, widht: '50', height: '50'}}></div>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    );
  }
  return (
    <article>
      <Image src={Pic} width={120}></Image>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
