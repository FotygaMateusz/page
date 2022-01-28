import { ADD } from "../actions/reduxActions";

export const validateAuthorMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === ADD && !action.payload.author.length) {
      return;
    }

    next(action);
  };
