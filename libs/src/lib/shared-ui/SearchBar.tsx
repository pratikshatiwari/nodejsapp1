import Profile_Icon from '../../assets/Profile.svg';
import Calender_Icon from '../../assets/calendar.svg';
import Location_Icon from '../../assets/Location.svg';
import { Typography, Card, Checkbox, Button } from '@mui/material';
import Search_Icon from '../../assets/search_header.svg';
import { useState } from 'react';
import SearchDialog from './LocationSearchDialog';
import './SearchBar.scss';

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Done');
  const handleSearchBoxClick = () => {
    setOpen(true);
  };
  const handleClose = (newValue?: string) => {
    setOpen(false);
    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <Card className="card-container-home">

          <div
            onClick={handleSearchBoxClick}
            className="search-section location"
          >
            <div className="icon-container">
              <img src={Location_Icon} alt="Location Icon" className="icon" />
            </div>
            <div>
              <Typography className="subtext">Where</Typography>
              <Typography>Rome</Typography>
            </div>
          </div>

          <div
            onClick={handleSearchBoxClick}
            className="search-section-calender calendar"
          >
            <div className="icon-container">
              <img src={Calender_Icon} alt="Calendar Icon" className="icon" />
            </div>
            <div>
              <Typography className="subtext">Dates</Typography>
              <Typography>Sept 12 - Sept 22</Typography>
            </div>
          </div>
          <div
            onClick={handleSearchBoxClick}
            className="search-box"
          >
            <div className="profile-icon-container">
              <img src={Profile_Icon} alt="Profile Icon" className="profile-icon" />
            </div>
            <div className="travellers-info">
              <Typography className="travellers-label">Travellers</Typography>
              <Typography className="travellers-details single-line-text">3 travellers, 1 room</Typography>
            </div>
            <div className="additional-search-icon-container">
              <img src={Search_Icon} alt="Search Icon" className="additional-search-icon" />
            </div>
          </div>

        </Card>
      </div>

      <div className="parent-container">
        <div className="left-container">
          <div className="checkbox-container">
            <Checkbox className="checkbox" />
          </div>
          <Typography className="typography">Add Flight</Typography>
          <div className="additional-checkbox">
            <Checkbox className="checkbox" />

          </div>
          <Typography className="typography">Add Car</Typography>
        </div>
        <Button  variant="text" color="primary" size="large" className="reset">
         Reset 
        </Button>
      </div>

      <SearchDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

export default SearchBar;