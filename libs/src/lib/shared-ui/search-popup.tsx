import React, { useState } from 'react';
import { List, ListItem, Paper, Box, Typography } from '@mui/material';
import locationIcon from '../../assets/LocationIcon.svg';
import './search-popup.scss';

const countries: string[] = [
  "New York, United States", "Ontario, Canada", "Mexico City, Mexico", "São Paulo, Brazil", "Buenos Aires, Argentina",
  "London, United Kingdom", "Berlin, Germany", "Paris, France", "Rome, Italy", "Madrid, Spain",
  "Sydney, Australia", "Auckland, New Zealand", "Beijing, China", "Tokyo, Japan", "Mumbai, India",
  "Moscow, Russia", "Seoul, South Korea", "Johannesburg, South Africa", "Cairo, Egypt", "Lagos, Nigeria",
  "Riyadh, Saudi Arabia", "Dubai, United Arab Emirates", "Istanbul, Turkey", "Tehran, Iran", "Jakarta, Indonesia",
  "Bangkok, Thailand", "Hanoi, Vietnam", "Manila, Philippines"
];

const SearchPopUp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const filteredStates = countries.filter((state) =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectState = (state: string) => {
    setSearchTerm(state);  
    setIsDropdownOpen(false);  
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setIsDropdownOpen(true);  
  };

  return (
    <Box className="search-popup-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search"
        onFocus={() => setIsDropdownOpen(true)}
        className="search-popup-input"
      />

      {isDropdownOpen && searchTerm && filteredStates.length > 0 && (
        <Paper elevation={3} className="search-popup-dropdown">
          <List>
          {filteredStates.map((state, index) => {
              const [firstPart, secondPart] = state.split(', '); 
              return (
                <ListItem
                  key={index}
                  className="search-popup-list-item"
                  onClick={() => handleSelectState(state)}
                >
                  <img src={locationIcon} alt="Location Icon" className="search-popup-icon" />
                  <Typography className="search-popup-typography">
                    <span className="search-popup-primary">{firstPart}</span>,&nbsp;
                    <span className="search-popup-secondary">{secondPart}</span>
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default SearchPopUp;