'use client'

import {createContext, useContext, useState} from 'react'

type SearchDrawerContextType = {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const SearchDrawerContext = createContext<SearchDrawerContextType | null>(null);

export const useSearchDrawer = () => {
  const ctx = useContext(SearchDrawerContext);
  if (!ctx) throw new Error("useSearchDrawer must be used within SearchDrawerProvider");
  return ctx;
};

export const SearchDrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <SearchDrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
      {children}
    </SearchDrawerContext.Provider>
  );
};