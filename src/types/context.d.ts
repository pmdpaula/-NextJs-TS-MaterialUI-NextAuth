/* eslint-disable no-unused-vars */
import { Theme } from '@mui/system';
import { useSession } from 'next-auth/react';

// eslint-disable-next-line react-hooks/rules-of-hooks
const { status } = useSession();
// type statusProps = { status } useSession();

export interface websitePageContextProps {
  resolvedTheme?: string;
  currentTheme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<Theme>>;
  headTitle: string;
  setHeadTitle: Dispatch<SetStateAction<Theme>>;
  sessionData: Session | null;
  sessionStatus: typeof status;
}
