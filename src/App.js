import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes/routes';
// import { publicRoutes, privateRoutes } from '~/routes';
import WOW from 'wowjs';
import { useEffect } from 'react';
import DefaultLayout from './layouts/DefaultLayout';

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
                  <Page />
                }
              />
            );
          })}

          {privateRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            let Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
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
