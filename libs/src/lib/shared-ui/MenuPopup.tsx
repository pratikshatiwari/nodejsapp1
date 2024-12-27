import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Plus_Icon from '../../assets/ic-actions-add.svg';
import Subract_Icon from '../../assets/ic-actions-sub.svg';
import './MenuPopup.scss';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function MenuPopupState() {
  const [age, setAge] = React.useState('');
  const [travellers, setTravellers] = React.useState(3);
  const [isDoneClicked, setIsDoneClicked] = React.useState(false);
  const [adultCount, setAdultCount] = React.useState(2);
  const [childCount, setChildCount] = React.useState(1);

  const handleInputClick = (event: any, popupState: any) => {
    popupState.open(event);
  };

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  const handleAddClick = (popupState: any) => {
    setTravellers(adultCount + childCount);
    setIsDoneClicked(true);
    popupState.close();
  };

  const handleIncrement = (setter: any, count: any) => {
    setter(count + 1);
  };

  const handleDecrement = (setter: any, count: any) => {
    if (count > 0) {
      setter(count - 1);
    }
  };

  return (
    <PopupState variant="popover" popupId="popup-menu">
      {(popupState) => (
        <React.Fragment>
          <input
            type="text"
            readOnly
            value={isDoneClicked ? `${travellers} Travellers` : ''}
            onClick={(event) => handleInputClick(event, popupState)}
            placeholder="Select Traveller"
            className="popup-input"
          />
          <Menu
            {...bindMenu(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            className="custom-menu"
          >
            <MenuItem onClick={popupState.close}>Room 1</MenuItem>
            <MenuItem>
              <span className="menu-item-container">
                <img
                  src={Subract_Icon}
                  alt="Subtract Icon"
                  onClick={() => handleDecrement(setAdultCount, adultCount)}
                  className="menu-item-icon icon-first"
                />
                <span className="menu-item-label">{adultCount}</span>
                <img
                  src={Plus_Icon}
                  alt="Plus Icon"
                  onClick={() => handleIncrement(setAdultCount, adultCount)}
                  className="menu-item-icon icon-second"
                />
                <span className="menu-item-text">Adults</span>
              </span>
            </MenuItem>


            <MenuItem>
              <span className="menu-item-container">
                <img
                  src={Subract_Icon}
                  alt="Subtract Icon"
                  onClick={() => handleDecrement(setChildCount, childCount)}
                  className="menu-item-icon icon-first"
                />
                <span className="menu-item-label-child">{childCount}</span>
                <img
                  src={Plus_Icon}
                  alt="Plus Icon"
                  onClick={() => handleIncrement(setChildCount, childCount)}
                  className="menu-item-icon icon-second"
                />
                <span className="menu-item-children-wrapper">
                  <span className="menu-item-children-label">Children</span>
                  <span className="menu-item-ages">Ages 0 to 17</span>
                </span>
              </span>
            </MenuItem>



            <MenuItem>
              <FormControl className="form-control" size="small" variant="outlined">
                <InputLabel
                  id="demo-select-small-label"
                  className="custom-input-label"
                >
                  Child 1 age
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  input={<OutlinedInput className="custom-input" />}
                  className="custom-select"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </MenuItem>


            <MenuItem>
              <div className="relative-container">
                <span className="add-room-label">Add another room</span>

              </div>
            </MenuItem>

            <Divider sx={{ my: 1 }} />

            <MenuItem>
              <div className="menu-item-container-done">
                <Button onClick={() => handleAddClick(popupState)} variant="contained" color="primary" size="small" className="select-travellers">
                  Done
                </Button>
              </div>
            </MenuItem>

          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}