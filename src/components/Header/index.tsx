import Image from "next/image";
import logo from "@/assets/images/catstreet-logo.svg";
import style from "@/styles/header/Header.module.scss";

const Header = ({ title }: { title: string }) => {
  return (
    <div className={style.header}>
      <div className={style.header__logo}>
        <Image src={logo} width={181} height={61} alt="" />
      </div>
      <h1 className={style.header__title}>{title}</h1>
    </div>
  );
};

export default Header;
