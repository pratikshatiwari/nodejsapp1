import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { SsCommonComponents } from '@ss/common-components';
import ThemeProviderWrapper from '@ss/common-components';
import SplashScreen from './SplashScreen/SplashSCreen';
import Category from './Category/Category';
import CategoryDescription from './CategoryDescription/CategoryDescription';
import SharedUi from './SharedUi/SharedUi';
import { PropertyProvider } from 'apps/dashboard/src/app/PropertyContext';
import CategoryDetails from './CategoryDetails/CategoryDetails';
import ActivityPage from 'apps/dashboard/src/app/ActivityPage/ActivityPage';
import Login from 'apps/authentication/src/app/Login/Login';
const Checkout = React.lazy(() => import('checkout/Module'));

const Authentication = React.lazy(() => import('authentication/Module'));

const Property = React.lazy(() => import('property/Module'));
const Dashboard = React.lazy(() => import('dashboard/Module'));


import PaymentPage from 'apps/checkout/src/app/PaymentDetails/PaymentPage';
import SuccessPage from 'apps/checkout/src/app/PaymentDetails/SuccessPage';
import FailurePage from 'apps/checkout/src/app/PaymentDetails/FailurePage';
import PaymentDone from 'apps/checkout/src/app/PaymentDone/PaymentDone';

export function App() {
  return (
    <ThemeProviderWrapper>
      <React.Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/authentication" element={<Authentication />} />

          <Route path="/categories" element={<Category />} />
          <Route
            path="/category-description"
            element={<CategoryDescription />}
          />
          <Route
            path="/categories-detail"
            element={
              <PropertyProvider>
                <CategoryDetails />
              </PropertyProvider>
            }
          />
          <Route path="/explore-property/*" element={<Dashboard />} />
          <Route path="/shared-ui" element={<SharedUi />} />
          <Route path="/activitypage" element={<ActivityPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment-details" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/failure" element={<FailurePage />} />
          <Route
          path="/PaymentDone"
          element={
            <PaymentDone />
          }
        />
        </Routes>
      </React.Suspense>
    </ThemeProviderWrapper>
  );
}

export default App;
