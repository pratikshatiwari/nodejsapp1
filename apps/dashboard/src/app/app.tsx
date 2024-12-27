import styles from './app.module.scss';
import React, { useState } from 'react';
import ThemeProvider, { SsCommonComponents } from '@ss/common-components';
import { SSHeader } from '@ss/common-components';
import SearchBar from '@ss/common-components';
import OptionCard from './components/OptionCard';
import PropertyCardExample from './components/PropertiesCard';
import Deal from './components/Deal';
import { PropertyProvider } from './PropertyContext';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import {Footer} from '@ss/common-components';
import PropertyDetails from './PropertyDetails/PropertyDetails';
import ActivityPage from './ActivityPage/ActivityPage';

const Authentication = React.lazy(() => import('authentication/Module'));
export function App() {
  return (
    <ThemeProvider>
      <PropertyProvider>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className={styles.appContainer}>
                  <div className={styles.headerContainer}>
                    <SSHeader />
                    <OptionCard />
                  </div>
                  <div className={styles.mainContent}>
                    <PropertyCardExample />
                    <div>
                      <Deal />
                    </div>
                  </div>
                </div>
                <Footer />
              </>
            }
          ></Route>
          <Route path="property-details" element={<PropertyDetails />} />
          <Route path="activitypage" element={<ActivityPage />} />
          <Route path="/authentication" element={<Authentication />} />
        </Routes>

      </PropertyProvider>
    </ThemeProvider>
  );
}

export default App;
