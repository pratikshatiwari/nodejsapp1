import Profile_Icon from '../../assets/Profile.svg';
import Calender_Icon from '../../assets/calendar.svg';
import Location_Icon from '../../assets/Location.svg';
import { Typography, Card } from '@mui/material';
import Search_Icon from '../../assets/search_header.svg';
import Multi_Icon from  '../../assets/check-icon.svg';
import ConfirmationDialogRaw from './SearchDialog';
import { useState } from 'react';
import SearchDialog from './SearchDialog';
 
const SearchScreen: React.FC = () => {
  const [open, setOpen] = useState(false);
  let value = 'Done';
    const handleClickListItem = () => {
    setOpen(true);
  };
  const handleClose = (newValue?: string) => {
    setOpen(false);
 
    if (newValue) {
      value = newValue;
        }
  };
 
  return (
    <div style={{ display: 'contents' }}>
       <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Card
        style={{
          width: 850,
          height: 50,
          borderRadius: 50,
          padding: 7,
          alignItems: 'center',
          boxShadow: '0px 8px 16px #7E000026',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 15,
          marginTop: 10,
        }}
      >
        {/* Left - Location */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 25, flexBasis: '30%' }}>
          <div style={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
            <img src={Location_Icon} alt="Location Icon" style={{ width: 24, height: 24 }} onClick={handleClickListItem} />
          </div>
          <div>
            <Typography style={{ fontSize: 12, color: '#242424', opacity: 0.8 }}>Where</Typography>
            <Typography>Rome</Typography>
          </div>
        </div>
 
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexBasis: '40%' }}>
          <div style={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
            <img src={Calender_Icon} alt="Calendar Icon" style={{ width: 24, height: 24 }} onClick={handleClickListItem} />
          </div>
          <div>
            <Typography style={{ fontSize: 12, color: '#242424', opacity: 0.8 }}>Dates</Typography>
            <Typography>Sept 12 - Sept 22</Typography>
          </div>
        </div>
 
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexBasis: '30%'}}>
          <div style={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
            <img src={Profile_Icon} alt="Profile Icon" style={{ width: 24, height: 24 }} onClick={handleClickListItem} />
          </div>
          <div style={{ marginRight: 15 }}>
            <Typography style={{ fontSize: 12, color: '#242424', opacity: 0.8 }}>Travellers</Typography>
            <Typography style={{ fontSize: 14, color: '#000000' }}>3 travellers, 1 room</Typography>
          </div>
          <img src={Search_Icon} alt="Search Icon" style={{ width: 50, height: 50, color: "#2D3DDF"}} />
        </div>
      </Card>
    </div>
 
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginLeft: '240px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Multi_Icon}
            alt="Multi Icon"
            style={{
              width: 16,
              height: 16,
              background: `transparent url(${Multi_Icon}) no-repeat`,
              opacity: 1,
            }}
          />
          <Typography
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
               fontWeight: 400,
               color: '#2D3DDF',
              opacity: 1,
              textAlign: 'left',
            }}
          >
            Add Flight
          </Typography>
          <img
            src={Multi_Icon}
            alt="Multi Icon"
            style={{
              width: 16,
              marginLeft: 26,
              height: 16,
              background: `transparent url(${Multi_Icon}) no-repeat`,
              opacity: 1,
            }}
          />
          <Typography
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
               fontWeight: 400,
               color: '#2D3DDF',
              opacity: 1,
              textAlign: 'left',
            }}
          >
            Add Car
          </Typography>
        </div>
 
        <Typography
          style={{
            marginRight: "240px",
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
             fontWeight: 400,
            textAlign: 'center',
            letterSpacing: '-0.38px',
            color: '#2D3DDF',
            opacity: 1,
          }}
        >
          Reset
        </Typography>
      </div>
      <SearchDialog
      open={open}
      onClose={handleClose}
    />
    </div>
  );
};
 
export default SearchScreen;