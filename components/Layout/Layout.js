import Head from "next/head";
import Navigate from "../Navigate/Navigate";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Navigate />
      {children}
    </>
  );
};

export default Layout;
