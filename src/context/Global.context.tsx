import React, { Dispatch, SetStateAction, useEffect } from "react";
import Image1 from "@/assets/images/cat-street-creme_2000.webp";
import Image2 from "@/assets/images/cat-street-olive_2000.webp";

type Provider<Elements = void> = React.FC<{
  children: React.ReactNode;
  extraData?: {
    elements: Elements;
  };
}>;

type FormType = {
  email: string;
  first_name: string;
  last_name: string;
  phone: string | undefined;
  country: string;
  address: string;
  delivery: number;
};

type CartType = {
  id: number;
  title: string;
  count: number;
  img: any;
  price: number;
};

export type GlobalState = {
  cart: Array<CartType>;
  setCart: Dispatch<SetStateAction<Array<CartType>>>;
  form: FormType;
  setForm: Dispatch<SetStateAction<FormType>>;
  promo: Array<string>;
  setPromo: Dispatch<SetStateAction<Array<string>>>;
};

const initialState: GlobalState = {
  cart: [
    {
      id: 1,
      title: "Bouclé Bungalow “Creme” Cover",
      count: 1,
      img: Image1,
      price: 239,
    },
    {
      id: 2,
      title: "Bouclé Bungalow “Olive” Cover",
      count: 1,
      img: Image2,
      price: 239,
    },
  ],
  setCart: () => {},
  form: {
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    country: "Ukraine",
    address: "",
    delivery: 0,
  },
  setForm: () => {},
  promo: ["FREECODE", "TESTCODE"],
  setPromo: () => {},
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider: Provider = ({ children }) => {
  const [cart, setCart] = React.useState<Array<CartType>>(initialState.cart);
  const [form, setForm] = React.useState<FormType>(initialState.form);
  const [promo, setPromo] = React.useState<Array<string>>(initialState.promo);

  return (
    <GlobalContext.Provider
      value={{ form, setForm, cart, setCart, promo, setPromo }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
