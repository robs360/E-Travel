import { configureStore } from '@reduxjs/toolkit'
import ticketReducer from '../redux/features/ticketSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'tickets',
  storage,
}

// This wraps your reducer to add persistence behavior
const persistedReducer = persistReducer(persistConfig, ticketReducer)

// ✅ This function creates both store and persistor
export const makeStore = () => {
  const store = configureStore({
    reducer: {
      tickets: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

  const persistor = persistStore(store)

  return { store, persistor }
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['store']['getState']>
export type AppDispatch = AppStore['store']['dispatch']
