import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import styles from './sortByOption.module.scss';

interface FilterByOptionProps {
  setFilterList: (value: boolean) => void;
  applyFilter: (filterType: string, value: number) => void; 
}

const FilterByOption: React.FC<FilterByOptionProps> = ({ setFilterList, applyFilter }) => {
  const [filterType, setFilterType] = useState<string | null>(null);
  const priceOptions = [1000, 2000, 3000, 4000, 5000]; 
  const ratingOptions = [1, 2, 3, 4, 5]; 
  return (
    <div className={styles.container}>
      {!filterType && (
        <Box display="flex" flexDirection="column">
          <Button
            onClick={() => setFilterType('price')}
            className={styles.btn}
          >
            Filter by Price
          </Button>
          <Button
            onClick={() => setFilterType('rating')}
            className={styles.btn}
          >
            Filter by Rating
          </Button>
        </Box>
      )}
      {filterType === 'price' && (
        <Box display="flex" flexDirection="column">
          {priceOptions.map((price, index) => (
            <Button
              key={index}
              onClick={() => {
                applyFilter('price', price);
                setFilterList(false); 
              }}
              className={styles.btn}
            >
              Properties less than ${price}
            </Button>
          ))}
        </Box>
      )}

      {filterType === 'rating' && (
        <Box display="flex" flexDirection="column">
          {ratingOptions.map((rating, index) => (
            <Button
              key={index}
              onClick={() => {
                applyFilter('rating', rating);
                setFilterList(false); 
              }}
              className={styles.btn}
            >
              Rating equal to {rating}
            </Button>
          ))}
        </Box>
      )}
    </div>
  );
};

export default FilterByOption;
