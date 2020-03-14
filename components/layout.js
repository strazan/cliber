import Navbar from "./navbar";
import Head from "./head";
import { mainContent } from "./varibles";

const Layout = props => {
  return (
    <div className="layout">
      <Head />
      <Navbar />
      <main>{props.children}</main>
      <style jsx global>{`
        .layout main {
          ${mainContent}
        }
      `}</style>
    </div>
  );
};
export default Layout;
