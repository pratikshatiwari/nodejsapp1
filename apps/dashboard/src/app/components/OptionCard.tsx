import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import cityScape from '../../assets/cityscape.svg';
import bookIcon from '../../assets/bookIcon.png';
import beachFront from '../../assets/beachFront.png';
import countrySide from '../../assets/countrySide.png';
import luxe from '../../assets/luxe.png';
import cabins from '../../assets/cabins.png';
import coffeeBreak from '../../assets/coffeeBreak.png';
import camping from '../../assets/camping.png';
import activities from '../../assets/activities.png';
import trending from '../../assets/trending.png';
import NewAdded from '../../assets/NewAdded.png';

import sortIcon from '../../assets/sort_icon.svg';
import filterIcon from '../../assets/filter_icon.svg';
import downIcon from '../../assets/ic-chevron-right.svg';
import { usePropertyContext } from '../PropertyContext';
import './OptionCard.scss'
import SortByOption from './sortByOption';
interface Award {
  icon: string;
  title: string;
  description: string;
}
interface ManagerDetails {
  name: string;
  role: string;
  image: string;
  reviews: number;
  rating: number;
  yearExperience: number;
  about: string;
  detail: string;

}
interface IconItem {
  icons: string;
  label: string;
  rating: number;
  star: string;
}interface VerifiedReviews {
  rating: number;
  comment: string;
  good_review: string;
  bad_review: string;
  date: string;
  type: string;
}
interface askQuestion {
  question: string,
  customer_name: string
}
type Property = {
  images: string[];
  price: number;
  name: string;
  location: string;
  rating: number;
  guestFav: boolean;
  amenities: string[];
  manager: ManagerDetails;
  awards: Award[];
  checkin: string; checkout: string; reviews: number, reviewsIcons: IconItem[],
  verifiedReviews: VerifiedReviews[];

  questions: askQuestion[];
};


const OptionCard = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 11;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [sortList, setSortList] = useState<boolean>(false);
  const [sortType, setSortType] = useState<string | null>(null);
  const [sortedProperties, setSortedProperties] = useState<typeof properties>([]);

  const [filterList, setFilterList] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState<number | null>(null);
  const { properties } = usePropertyContext();

  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setSortList(!sortList);
  };
  const images = [
    { id: 1, src: cityScape, label: 'Cityscapes' },
    { id: 2, src: beachFront, label: 'Beachfront' },
    { id: 3, src: countrySide, label: 'Countryside' },
    { id: 4, src: luxe, label: 'Luxe' },
    { id: 5, src: cabins, label: 'Cabins' },
    { id: 6, src: coffeeBreak, label: 'Breakfast' },
    { id: 7, src: camping, label: 'Camping' },
    { id: 8, src: activities, label: 'Activities' },
    { id: 9, src: trending, label: 'Trending' },
    { id: 10, src: NewAdded, label: 'New' },
    { id: 11, src: bookIcon, label: 'Book' },
    { id: 12, src: cityScape, label: 'Cityscapes' },
    { id: 13, src: beachFront, label: 'Beachfront' },
    { id: 14, src: bookIcon, label: 'Countryside' },
    { id: 15, src: luxe, label: 'Luxe' },
    { id: 16, src: cabins, label: 'Cabins' },
    { id: 17, src: coffeeBreak, label: 'Breakfast' },
    { id: 18, src: camping, label: 'Camping' },
    { id: 19, src: activities, label: 'Activities' },
    { id: 20, src: trending, label: 'Trending' },
    { id: 21, src: NewAdded, label: 'New' },
    { id: 22, src: bookIcon, label: 'Book' },
  ];

  const handleScroll = () => {
    if (startIndex + visibleCount < images.length) {
      setStartIndex(startIndex + 1); 
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="top-container">
      <Divider className="divider" />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ref={scrollContainerRef}
        sx={{
          overflowX: 'hidden',
          whiteSpace: 'nowrap',
          '::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none',
        }}
      >
        <div className="image-scroll-container">
          <div className="image-scroll-bar">
            {visibleImages.map((image, index) => (
              <div key={image.id} className="image-scroll-item">
                <img src={image.src} alt={`img-${index}`} className="scroll-image" />
                <Typography variant="h6" className="city-label">
                  {image.label}
                </Typography>
              </div>
            ))}
            <div className="sticky-icon-container" onClick={handleScroll}>
              <img src={downIcon} alt="Scroll Down Icon" className="sticky-icon" />
            </div>
          </div>
        </div>
      </Box>
      <div className="properties-container">
        <Typography variant="h5" className="properties-title">
          153 Properties Curated For You
        </Typography>
        <div className="properties-actions">
          <Box
            component="img"
            src={sortIcon}
            alt="Icon 1"
            className="action-icon"
            onClick={() => setSortedProperties(properties)}
          />
          <Box
            component="img"
            src={filterIcon}
            alt="Icon 2"
            className="action-icon filter-icon"
            onClick={() => setSortedProperties(properties)}
          />
          <Button onClick={() => setSortList(!sortList)} className="action-button">
            Sort
          </Button>
          {sortList && <SortByOption images={images} onClose={() => setSortList(false)} />}
          <Button onClick={() => setSortList(false)} className="action-button">
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
