import Image from "next/image";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div className="bg-gray-600 shadow-[0_0_10px_black] grid grid-cols-[1fr_375px_1fr]">
      <div className="[grid-column:2] w-[375px] h-[100vh] bg-white rounded-3xl overflow-hidden">
        <Nav />
        <Filter />
        <div className="px-6 py-4 grid grid-cols-[1fr_1fr] gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Menu />
      </div>
    </div>
  );
}
