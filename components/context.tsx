import React from "react";
type Props = {
  children: React.ReactNode;
};
const payload = {
  name: "Vince",
  locale: "Nairobi",
  dev: "React developer",
  theme: {
    color: "#ccc",
    fallback: "#fff",
  },
};
export const Context = React.createContext(null);

const ContextProvider: React.FC<Props> = ({ children }: Props) => {
  return <Context.Provider value={payload}>{children}</Context.Provider>;
};
export default ContextProvider;
