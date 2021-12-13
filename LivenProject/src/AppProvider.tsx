import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';
import {Product, ProductOnCart} from './types';

type Action =
  | {
      type: 'setProductList';
      payload: Product[];
    }
  | {
      type: 'clearCartList';
    }
  | {
      type: 'setCartList';
      payload: ProductOnCart[];
    };

type Dispatch = (action: Action) => void;

export type State = {
  productList?: Product[];
  cartList?: ProductOnCart[] | undefined;
};

const INITIAL_STATE: State = {
  productList: [],
  cartList: [],
};

const reducer = (state = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case 'setProductList':
      return {...state, productList: action.payload};
    case 'clearCartList':
      return {
        ...state,
        cartList: [],
      };
    case 'setCartList':
      return {
        ...state,
        cartList: action.payload,
      };
    default:
      return state;
  }
};

const AppStateContext = createContext<State | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

export const useAppState = () => {
  const state = useContext(AppStateContext);

  if (!state) {
    throw new Error('useAppState should be inside AppStateContext Provider');
  }

  return state;
};

export const useAppDispatch = () => {
  const dispatch = useContext(AppDispatchContext);

  if (!dispatch) {
    throw new Error(
      'useAppDispatch should be inside AppDispatchContext Provider',
    );
  }

  return dispatch;
};

type Props = {
  initialState?: State;
};

function AppProvider({
  initialState = INITIAL_STATE,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export default AppProvider;
