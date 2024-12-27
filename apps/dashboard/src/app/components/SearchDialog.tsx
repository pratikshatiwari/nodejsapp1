import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Profile_Icon from '../../assets/Profile.svg';
import Calender_Icon from '../../assets/calendar.svg';
import Location_Icon from '../../assets/Location.svg';
import Search_Icon from '../../assets/search_header.svg';
import Multi_Icon from '../../assets/check-icon.svg'
import { useState } from 'react';
import DateRangePickerComponent from './DateRangePickerComponent';
import MenuPopupState from './MenuPopup';
import SearchPopUp from './search-popup';
import { Chip, Divider, Stack } from '@mui/material';
/* import { RxCross1 } from "react-icons/rx"; */
 
export interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}
 
export default function SearchDialog(props: SearchDialogProps) {
  const { open, onClose } = props;
  const chipLabelsRecentSearch = [
    { label: "Effiel Tower, Paris", href: "#basic-chip-1" },
    { label: "Eternal City, Rome", href: "#basic-chip-2" },
    { label: "Buckingham Palace, London", href: "#basic-chip-3" },
    { label: "Lopoland, Poland", href: "#basic-chip-4" },
    { label: "Lake Coma, Italy", href: "#basic-chip-5" },
    { label: "Lopoland, Poland", href: "#basic-chip-6" },
  ];
  const chipLabelsMostSearch = [
    { label: "Effiel Tower, Paris", href: "#basic-chip-1" },
    { label: "Eternal City, Rome", href: "#basic-chip-2" },
    { label: "Buckingham Palace, London", href: "#basic-chip-3" },
    { label: "Lopoland, Poland", href: "#basic-chip-4" },
    { label: "Lake Coma, Italy", href: "#basic-chip-5" },
    { label: "Lopoland, Poland", href: "#basic-chip-6" },
  ];
  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          width: '1000px',
          height: '484px',
        },
      }}
      maxWidth={false}
      open={open}
    >
      <DialogContent>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '28px', marginTop: '28px' }}>
          <div style={{ left: '164px', width: '71px', height: '28px', textAlign: 'left', font: 'normal normal normal 20px Poppins', letterSpacing: '0px', color: '#000000', opacity: 1 }}>
            Search
          </div>
          {/* <RxCross1 style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={onClose} /> */}
 
        </div>
 
        <div style={{ display: 'contents' }}>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Card
              style={{
                width: 967,
                height: 62,
                borderRadius: 50,
                padding: 7,
                alignItems: 'center',
                boxShadow: '0px 8px 16px #7E000026',
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 15,
                marginTop: 10,
                overflow: 'visible',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: 25, flexBasis: '30%' }}>
                <div style={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
                  <img src={Location_Icon} alt="Location Icon" style={{ width: 24, height: 24 }} />
                </div>
                <div>
                  <Typography style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,  
                    color: '#242424',
                    opacity: 0.8,
                  }}>
                    Where
                  </Typography>
                  <SearchPopUp />
                </div>
              </div>
 
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexBasis: '40%' }}>
                <div style={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
                  <img src={Calender_Icon} alt="Calendar Icon" style={{ width: 24, height: 24 }} />
                </div>
                <div>
                  <Typography style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,  
                    color: '#242424',
                    opacity: 0.8,
                  }}>
                    Dates
                  </Typography>
                  <DateRangePickerComponent />
                </div>
              </div>
 
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexBasis: '30%' }}>
                <div style={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
                  <img src={Profile_Icon} alt="Profile Icon" style={{ width: 24, height: 24 }} />
                </div>
                <div style={{ marginRight: 15 }}>
                  <Typography style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,  
                    color: '#242424',
                    opacity: 0.8,
                  }}>
                    Travellers
                  </Typography>
                  <MenuPopupState />
                </div>
                <img src={Search_Icon} alt="Search Icon" style={{ width: 50, height: 50, color: "#2D3DDF" }} />
              </div>
            </Card>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '18px', marginLeft: '26px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '8px' }}>
                <img src={Multi_Icon} alt="Icon" style={{ width: '16px', height: '16px', background: 'transparent' }} />
              </div>
              <div style={{ width: '73px', height: '19px', textAlign: 'left',
               fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                     fontWeight: 400,
                      letterSpacing: '0px', color: '#2D3DDF', opacity: 1 }}>
                Add Flight
              </div>
              <div style={{ marginRight: '8px' }}>
                <img src={Multi_Icon} alt="Icon" style={{ width: '16px', height: '16px', background: 'transparent' }} />
              </div>
              <div style={{ width: '73px', height: '19px', textAlign: 'left',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                   fontWeight: 400,  
                 letterSpacing: '0px', color: '#2D3DDF', opacity: 1 }}>
                Add Car
              </div>
            </div>
 
            <div style={{ width: '42px', height: '23px', textAlign: 'center',
               fontFamily: 'Poppins, sans-serif',
               fontSize: '16px',
                fontWeight: 400,
               letterSpacing: '-0.38px', color: '#2D3DDF', opacity: 1 }}>
              Reset
            </div>
          </div>
          <div style={{ marginTop: 25 }}>
            <Divider sx={{ my: 1 }} />
          </div>
 
 
          <div style={{ marginTop: 18 }}>
            <Typography
              sx={{
                width: '196px',
                height: '16px',
                textAlign: 'left',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                 fontWeight: 400,
                letterSpacing: '-0.34px',
                color: '#000000',
                opacity: 1,
              }}
            >
              Recent Search
            </Typography>
          </div>
          <div style={{ marginTop: 18 }}>
 
            <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap' }}>
              {chipLabelsRecentSearch.map(({ label, href }) => (
                <Chip
                  key={label}
                  label={label}
                  component="a"
                  href={href}
                  clickable
                  sx={{
                    width: '127px',
                    height: '22px',
                    background: '#EDF5FF 0% 0% no-repeat padding-box',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12px',
                     fontWeight: 400,
                    borderRadius: '11px',
                    opacity: 1,
                  }}
                />
              ))}
            </Stack>
          </div>
          <div style={{ marginTop: 20 }}>
            <Typography
              sx={{
                width: '196px',
                height: '16px',
                textAlign: 'left',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                 fontWeight: 400,
                letterSpacing: '-0.34px',
                color: '#000000',
                opacity: 1,
              }}
            >
              Most Search
            </Typography>
          </div>
          <div style={{ marginTop: 18 }}>
            <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap' }}>
              {chipLabelsMostSearch.map(({ label, href }) => (
                <Chip
                  key={label}
                  label={label}
                  component="a"
                  href={href}
                  clickable
                  sx={{
                    width: '127px',
                    height: '22px',
                    background: '#EDF5FF 0% 0% no-repeat padding-box',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12px',
                     fontWeight: 400,
 
                    borderRadius: '11px',
                    opacity: 1,
                  }}
                />
              ))}
            </Stack>
          </div>
 
        </div>
      </DialogContent>
    </Dialog>
  );
}