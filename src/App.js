import React from 'react'
import { Provider } from 'react-redux'
import XCoinsRoutes from './Routes'
import { store } from './redux/configStore'

const App = () =>{
  return(
    <Provider store={store}>
        <XCoinsRoutes />
    </Provider>
  )
}

export default App;