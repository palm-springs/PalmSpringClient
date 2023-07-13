import { createContext, useContext, useReducer } from 'react';

interface DashboardContextProps {
  modalOpenContentId: string;
  setModalOpenContentId: (value: PickContextPropsType<'modalOpenContentId'>) => void;
}

const initialDashboardContext: DashboardContextProps = {
  modalOpenContentId: '',
  setModalOpenContentId: () => {
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

export type PickContextPropsType<T extends keyof DashboardContextProps> = Pick<DashboardContextProps, T>[T];

type ActionType = {
  type: 'SETID';
  value: PickContextPropsType<'modalOpenContentId'>;
};

export const reducer = (state: DashboardContextProps, action: ActionType) => {
  switch (action.type) {
    case 'SETID':
      return {
        ...state,
        modalOpenContentId: action.value,
      };
    default:
      return state;
  }
};

export const DashboardContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialDashboardContext);

  return (
    <DashboardContext.Provider
      value={{
        ...state,
        setModalOpenContentId: (value: PickContextPropsType<'modalOpenContentId'>) =>
          dispatch({ type: 'SETID', value }),
      }}>
      {children}
    </DashboardContext.Provider>
  );
};
