import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { formReducer } from "../../FormModel/slice/formSlice";


export function createReduxStore(initialState?: StateSchema){
    const rootReducers: ReducersMapObject<StateSchema> = {
        form: formReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
