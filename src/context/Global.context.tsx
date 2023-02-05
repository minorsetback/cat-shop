import React, { Dispatch, SetStateAction, useEffect } from "react";
import Image1 from "@/assets/images/cat-street-creme_2000.webp";
import Image2 from "@/assets/images/cat-street-olive_2000.webp";

type Provider<Elements = void> = React.FC<{
  children: React.ReactNode;
  extraData?: {
    elements: Elements;
  };
}>;

export type GlobalState = {
  cart: Array<any>;
  setCart: Dispatch<SetStateAction<Array<any>>>;
  form: any;
  setForm: Dispatch<SetStateAction<any>>;
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
    delivery: "",
  },
  setForm: () => {},
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider: Provider = ({ children }) => {
  const [cart, setCart] = React.useState<Array<any>>(initialState.cart);
  const [form, setForm] = React.useState<any>(initialState.form);
  return (
    <GlobalContext.Provider value={{ form, setForm, cart, setCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
