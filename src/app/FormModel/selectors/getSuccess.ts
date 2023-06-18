import { StateSchema } from "../../StoreProvider";

export const getSuccess = (state: StateSchema) => {
    return state.form.success;
};
