import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const persistedContactsReducer = persistReducer(
    {
        key: "contacts",
        storage,
    },
    contactReducer
);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer, 
        filters: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);