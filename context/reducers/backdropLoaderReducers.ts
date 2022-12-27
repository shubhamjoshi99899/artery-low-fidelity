import * as interfaces from "../../interfaces/context-interface.interface";

export const initialState: interfaces.backdropLoader = {
  open: false,
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "backdrop-open":
      return { ...state, open: action.value };
    default:
      return state;
  }
};
