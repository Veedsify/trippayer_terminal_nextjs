"use client";
import { useEffect, useState } from "react";

type HydratePageProps = {
  children: React.ReactNode;
};

const Hydrate: React.FC<HydratePageProps> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return isHydrated ? children : null;
};

export default Hydrate;
