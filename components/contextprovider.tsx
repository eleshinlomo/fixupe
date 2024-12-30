'use client'
import { createContext, useState } from 'react';



interface CompanyProviderProps {
  children: React.ReactNode;
}

const initialValue = {
  company: ''
}

export const CompanyContext = createContext(initialValue);



export const CompanyProvider = ({ children }: CompanyProviderProps) => {

  const [company, setCompany] = useState<string>('No name')

  
const value = {
  company
}

  return (
    <CompanyContext.Provider value={value}>
      {children}
    </CompanyContext.Provider>
  );
};
