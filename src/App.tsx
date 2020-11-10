import React, { FunctionComponent as FC,  Suspense } from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import ScreenLoader from './components/ScreenLoader';
const Home = React.lazy(() => import('./pages/Home'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Favourite = React.lazy(() => import('./pages/Favourite'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: FC = () => {
  return (
    <div className='App' data-testid='App'>
      <Header />
        <div className='listing-body'>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Suspense fallback={<ScreenLoader />}>
                  <Home />
                </Suspense>
              </Route>
              <Route path='/details/:productId'>
                <Suspense fallback={<ScreenLoader />}>
                  <ProductDetails />
                </Suspense>
              </Route>
              <Route path='/favourite'>
                <Suspense fallback={<ScreenLoader />}>
                  <Favourite />
                </Suspense>
              </Route>
              <Route>
                <Suspense fallback={<ScreenLoader />}>
                  <NotFound />
                </Suspense>
              </Route>
            </Switch>
          </Router>
        </div>
      <Footer />
    </div>
  );
}

export default App;
