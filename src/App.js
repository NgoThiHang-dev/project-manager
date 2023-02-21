import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
// import { publicRoutes, privateRoutes } from '~/routes';
import WOW from 'wowjs';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  // <RequireLoginAuth redirectTo={routesConfig.home}>
                  // <Layout>
                  <Page />
                  // </Layout>
                  // </RequireLoginAuth>
                }
              />
            );
          })}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
