import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  count: 0
}

export const StateContext = createContext();
// export const StateDispatch = createContext()

function reducer (state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    case 'DECREMENT': {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    default:
      return state
  }
}

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const wrapRootElement = ({ element }) => (
  <StateProvider>{element}</StateProvider>
);

const useStateProvider = () => {
  const [state, dispatch] =  useContext(StateContext);
  return { state, dispatch };
}

export default useStateProvider;