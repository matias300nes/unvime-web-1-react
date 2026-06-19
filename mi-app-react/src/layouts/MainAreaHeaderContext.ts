import { createContext, useContext, useEffect, type ReactNode } from "react";

export type MainAreaHeaderConfig = {
  title: string;
  eyebrow?: string;
  actions?: ReactNode;
};

export type MainAreaHeaderContextValue = {
  setHeaderConfig: (config: MainAreaHeaderConfig) => void;
};

export const MainAreaHeaderContext = createContext<MainAreaHeaderContextValue | null>(null);

export function useMainAreaHeader(config: MainAreaHeaderConfig) {
  const context = useContext(MainAreaHeaderContext);

  useEffect(() => {
    if (!context) {
      return;
    }

    context.setHeaderConfig(config);
  }, [config, context]);
}
