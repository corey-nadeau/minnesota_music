import { HashRouter, Route, Routes } from 'react-router-dom'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './redux/slices/store'
import AltNavbar from './components/AltNavbar'
import AuthChecker from './auth/AuthChecker'



function App() {


  return (
    <HashRouter>
      <AltNavbar />
        <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                    <AuthChecker>
                      <route.component/>
                    </AuthChecker>
                  ): (
                    <route.component />
                  )
                }
              />
          )) }
        </Routes>
      </Provider>
    </HashRouter>
  )
}

export default App
