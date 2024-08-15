"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";
interface Props {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

export const TabContext = createContext<Props | undefined>(undefined);
function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [tab, setTab] = useState("");
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}

export default Provider;
