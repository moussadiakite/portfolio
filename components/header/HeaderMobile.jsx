import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo/dark.png";
import logo2 from "../../public/img/logo/light.png";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image className="logo_light" src={logo} alt="brand" with={92} height={37}/>
          <Image className="logo_dark" src={logo2} alt="brand" with={92} height={37}/>
        </Link>
      </div>
      {/* End .logo */}
    </>
  );
};

export default HeaderMobile;
