import { StateSchema } from "../../StoreProvider";
import { FormSchema } from "../types/FormSchema";


export const getFormData = (state: StateSchema) => {
    return state.form.data;
};
