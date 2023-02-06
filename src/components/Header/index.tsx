import Image from "next/image";
import logo from "@/assets/images/catstreet-logo.svg";
import style from "@/styles/header/Header.module.scss";
import Link from "next/link";

const Header = ({ title }: { title: string }) => {
  return (
    <div className={style.header}>
      <Link href="/">
        <div className={style.header__logo}>
          <Image src={logo} width={181} height={61} alt="" />
        </div>
      </Link>
      <h1 className={style.header__title}>{title}</h1>
    </div>
  );
};

export default Header;
