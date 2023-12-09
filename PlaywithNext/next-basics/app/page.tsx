import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </div>
  );
}
