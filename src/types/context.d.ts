/* eslint-disable no-unused-vars */
import { Theme } from '@mui/system';

export interface websitePageContextProps {
  resolvedTheme?: string;
  currentTheme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<Theme>>;
  headTitle: string;
  setHeadTitle: Dispatch<SetStateAction<Theme>>;
  isAtuh: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}
