import Navigate from "../Navigate/Navigate";

const Layout = ({ children }) => {
  return (
    <>
      <Navigate />
      {children}
    </>
  );
};

export default Layout;
