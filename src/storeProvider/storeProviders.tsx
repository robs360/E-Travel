'use client'
import { makeStore } from "@/redux/store"
import { ReactNode, useRef } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

const StoreProviders = ({ children }: { children: ReactNode }) => {
    const storeRef = useRef<ReturnType<typeof makeStore> | null>(null);


  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  
  return (
    <Provider store={storeRef.current.store}>
      <PersistGate loading={null} persistor={storeRef.current.persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default StoreProviders
