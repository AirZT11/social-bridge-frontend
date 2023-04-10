import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/es/integration/react"
import { store } from "./store"

const element = document.getElementById("root")
const root = createRoot(element!)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
