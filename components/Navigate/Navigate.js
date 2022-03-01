import Link from "next/link";

const Navigate = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
          <Link href={"/pokemon"}> Pokemon CSR</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;
