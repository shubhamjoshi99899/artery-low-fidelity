import React, { createContext, useReducer } from "react";
import ToastMessage from "../components/common/toast/toast-message";

interface context {
  Toast: any;
  BackdropLoader: any;
}

interface contextProviderProp {
  children: any;
}

import {
  initialState as toastInitialState,
  reducer as toastReducer,
} from "./reducers/toastReducers";

import {
  initialState as backdropLoaderInitialState,
  reducer as backdropLoaderReducer,
} from "./reducers/backdropLoaderReducers";

export const Context = createContext<context | null>(null);

const ContextProvider = Context.Provider;

const ContextProviderWrapper: React.FunctionComponent<contextProviderProp> = ({
  children,
}) => {
  const [toastData, toastDispatch] = useReducer(
    toastReducer,
    toastInitialState
  );

  const [backdropLoaderData, backdropLoaderDispatch] = useReducer(
    backdropLoaderReducer,
    backdropLoaderInitialState
  );

  const store: any = {
    Toast: { state: toastData, dispatch: toastDispatch },
    BackdropLoader: {
      state: backdropLoaderData,
      dispatch: backdropLoaderDispatch,
    },
  };

  return (
    <ContextProvider value={store}>
      {children}
      <ToastMessage
        open={toastData.open}
        message={toastData.message}
        severity={toastData.severity}
        seconds={toastData.seconds}
        messages={toastData.messages}
        handleClose={() => toastDispatch({ type: "close", value: "" })}
      />
    </ContextProvider>
  );
};

export default ContextProviderWrapper;
