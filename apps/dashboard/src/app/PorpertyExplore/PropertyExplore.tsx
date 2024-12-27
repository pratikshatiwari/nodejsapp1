import { SSHeader } from '@ss/common-components';
import React from 'react';
import OptionCard from '../components/OptionCard';
import PropertyCardExample from '../components/PropertiesCard';
import Deal from '../components/Deal';
import { PropertyProvider } from '../PropertyContext';
import Footer from 'libs/src/lib/shared-ui/Footer';

const PropertyExplore = () => {
  return (
    <PropertyProvider>
      <div>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: 'white',
          }}
        >
          <SSHeader />
          <OptionCard />
        </div>
        <div
          style={{
            marginTop: '300px',
            height: 'calc(100vh - 150px)',
          }}
        >
          <PropertyCardExample />
          <Deal />
        </div>
      </div>

      <Footer />
    </PropertyProvider>
  );
};

export default PropertyExplore;
