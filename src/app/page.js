import Image from "next/image";
import Link from "next/link";
import Test from "./components/Test";

export default function Home() {
  return (
    <div className="">
      <Link href="/detalje">
        <h1>Til detalje side</h1>
      </Link>
      <Link href="/favorite">
        <h1>Til favorite side</h1>
      </Link>
      <Test />
      <Image
        loading="eager"
        src="https://placecats.com/neo/300/200"
        width={300}
        height={200}
      />
    </div>
  );
}
