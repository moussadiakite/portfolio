/* import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import PortfolioPreview from "../components/pages/preview";

const index = () => {
  return (
    <>
      <Seo pageTitle="Preview" />
      <PortfolioPreview />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
 */
import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeHorizontal from "../components/pages/home-horizontal";

const index = () => {
  return (
    <>
      <Seo pageTitle="Dimous" />
      <HomeHorizontal />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });