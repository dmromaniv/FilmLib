import Footer from "../Footer/Footer";
import Header from "../Header";
import { ILayoutProps } from "./Layout.props";

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
