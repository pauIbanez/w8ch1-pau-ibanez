import Link from "next/link";

const Navigate = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/pokemon"}> Pokemon CSR</Link>
        </li>
        <li>
          <Link href={"/mypokemon-ssr"}> My pokemon SSR</Link>
        </li>
        <li>
          <Link href={"/mypokemon-ssg"}> My pokemon SSG</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;
