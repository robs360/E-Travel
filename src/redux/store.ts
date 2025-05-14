import { configureStore } from '@reduxjs/toolkit'
import ticketReducer from '../redux/features/ticketSlice'
import  hotelDataSlice  from '../redux/features/hotelDataSlice'
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
const hotelpersistConfig = {
  key: 'hoteInfo',
  storage,
}

const persistedReducer = persistReducer(persistConfig, ticketReducer)
const persisthotelInfo= persistReducer(hotelpersistConfig,hotelDataSlice)

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      tickets: persistedReducer,
      hotelinfo:persisthotelInfo
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
