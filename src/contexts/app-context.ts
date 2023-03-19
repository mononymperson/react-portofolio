import { createContext, useContext } from 'react'

interface Context {
  onSectionActive: (id: string, val: any) => any
  setSectionActive: (val: string) => any
  sectionActive: string
  toggleTheme: () => void
  themeMode: (light: any, dark: any) => any
}

export const AppContext = createContext<Context>({} as Context)
export const useAppContext = () => useContext(AppContext)
