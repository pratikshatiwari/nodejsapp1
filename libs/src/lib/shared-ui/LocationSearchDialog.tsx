import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Profile_Icon from '../../assets/Profile.svg';
import Calender_Icon from '../../assets/calendar.svg';
import Location_Icon from '../../assets/Location.svg';
import Search_Icon from '../../assets/search_header.svg';
import crossIcon from '../../assets/cross_icon.svg';
import DateRangePickerComponent from './DateRangePickerComponent';
import MenuPopupState from './MenuPopup';
import SearchPopUp from './search-popup';
import { Checkbox, Chip, Divider, Stack } from '@mui/material';
import './LocationSearchDialog.scss'
export interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function LocationSearchDialog(props: SearchDialogProps) {
  const { open, onClose } = props;

  const chipLabelsRecentSearch = [
    { label: "Effiel Tower, Paris" },
    { label: "Eternal City, Rome" },
    { label: "Buckingham Palace, London" },
    { label: "Lopoland, Finland" },
    { label: "Lake Coma, Italy" },
  ];
  const chipLabelsMostSearch = [
    { label: "Holistatt, Austria" },
    { label: "Las Coloradas, Mexico" },
    { label: "Bagan, Myanmar" },
    { label: "Barcelona, Spain" },
    { label: "Saturnia, Italy" },
  ];

  return (
    <>
      {open && (
        <div className="overlay"></div>
      )}
      <Dialog
        className="dialog-container"
        maxWidth={false}
        open={open}
      >
        <DialogContent>
          <div className="header-container">
            <Typography variant='h2' className="header-title-popup" >Search</Typography>
            <img
              src={crossIcon}
              alt="Close Icon"
              className="close-icon"
              onClick={onClose}
            />
          </div>


          <div className="card-container">
            <div className="card-wrapper">
              <Card className="custom-card">

                <div className="location-container">
                  <div className="icon-wrapper">
                    <img src={Location_Icon} alt="Location Icon" className="location-icon" />
                  </div>
                  <div className="text-wrapper">
                    <Typography className="location-typography">Where</Typography>
                    <SearchPopUp />
                  </div>
                </div>

                <div className="date-container">
                  <div className="icon-wrapper">
                    <img src={Calender_Icon} alt="Calendar Icon" className="calendar-icon" />
                  </div>
                  <div className="text-wrapper">
                    <Typography className="date-typography">Dates</Typography>
                    <DateRangePickerComponent />
                  </div>
                </div>

                <div className="travellers-container">
                  <div className="icon-wrapper">
                    <img src={Profile_Icon} alt="Profile Icon" className="profile-icon" />
                  </div>
                  <div className="text-wrapper">
                    <Typography className="travellers-typography">Travellers</Typography>
                    <MenuPopupState />
                  </div>
                </div>
                <div className="search-icon-wrapper-popup">
                  <img src={Search_Icon} alt="Search Icon" className="search-icon-popup" />
                </div>

              </Card>
            </div>
            <div className="action-container">
              <div className="action-group">
                <div className="checkbox-container">
                  <Checkbox className="custom-checkbox" />

                </div>
                <div className="label">Add Flight</div>

                <div className="checkbox-group">
                  <div className="checkbox-container">
                    <Checkbox className="custom-checkbox" />


                  </div>
                  <div className="label">Add Car</div>
                </div>
              </div>

              <Button variant="text" color="primary" size="small" className="reset">
                Reset
              </Button>
            </div>


            <div className="recent-search-container">
              <div className="divider-container">
                <Divider className="divider" />
              </div>

              <div className="recent-search-title">
                <Typography variant='h5' className="title">Recent Search</Typography>
              </div>

            </div>
            <div className="recent-and-most-search-container">
              <div className="recent-search-chips">
                <Stack direction="row" spacing={3} className="chips-stack">
                  {chipLabelsRecentSearch.map(({ label }) => (
                    <Chip
                      key={label}
                      label={label}
                      component="a"
                      clickable
                      className="chip"
                    />
                  ))}
                </Stack>
              </div>

              <div className="most-search-title">
                <Typography variant='h5' className="title">Most Search</Typography>
              </div>
            </div>

            <div className="most-search-chips-container">
              <Stack direction="row" spacing={3} className="chips-stack">
                {chipLabelsMostSearch.map(({ label }) => (
                  <Chip
                    key={label}
                    label={label}
                    component="a"
                    clickable
                    className="chip"
                  />

                ))}
              </Stack>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}