import { createContext, useContext, useReducer } from 'react';

interface DashboardContextProps {
  id: string;
  setId: (value: PickContextPropsType<'id'>) => void;
}

const initialDashboardContext: DashboardContextProps = {
  id: '',
  setId: () => {
    return;
  },
};

const DashboardContext = createContext(initialDashboardContext);

DashboardContext.displayName = 'DashboardContext';

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error('DashBoardContext must be used within <DashboardContextProvider />');
  }
  return context;
};

type PickContextPropsType<T extends keyof DashboardContextProps> = Pick<DashboardContextProps, T>[T];

type ActionType = {
  type: 'SETID';
  value: PickContextPropsType<'id'>;
};

export const reducer = (state: DashboardContextProps, action: ActionType) => {
  switch (action.type) {
    case 'SETID':
      return {
        ...state,
        id: action.value,
      };
    default:
      return state;
  }
};

export const DashboardContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialDashboardContext);

  return (
    <DashboardContext.Provider
      value={{ ...state, setId: (value: PickContextPropsType<'id'>) => dispatch({ type: 'SETID', value }) }}>
      {children}
    </DashboardContext.Provider>
  );
};
