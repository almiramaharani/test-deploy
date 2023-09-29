import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from './product-slice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
    product: productSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    backlist: ['product']
};

const pReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: pReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    }
});

const persistor = persistStore(store);

export { persistor };
export default store;