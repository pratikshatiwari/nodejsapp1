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
 
    const handleInputClick = (event: any, popupState: any) => {
        popupState.open(event);
    };
 
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
 
    const handleAddClick = (popupState: any) => {
        console.log('Add button clicked');
        popupState.close();
    };
 
    return (
        <PopupState variant="popover" popupId="popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <input
                        type="text"
                        readOnly
                        onClick={(event) => handleInputClick(event, popupState)}
                        placeholder="Select Traveller"
                        className="popup-input"
                    />
 
                    <Menu
                        {...bindMenu(popupState)}
                        sx={{
                            '& .MuiPaper-root': {
                                top: '250px !important',
                                left: '850px !important',
                                width: '232px',
                                height: 'auto',
                                background: '#FFFFFF',
                                boxShadow: '0px 8px 16px #7E000029',
                                borderRadius: '20px',
                                opacity: 1,
                            },
                        }}
                    >
                        <MenuItem onClick={popupState.close}>Room1</MenuItem>
                        <MenuItem>
                            <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                <img src={Subract_Icon} alt="First Icon" className="menu-item-icon icon-first" />
                                <span className="menu-item-label">2</span>
                                <img src={Plus_Icon} alt="Second Icon" className="menu-item-icon icon-second" />
                                Adults
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                <img src={Subract_Icon} alt="First Icon" className="menu-item-icon icon-first" />
                                <span className="menu-item-label">1</span>
                                <img src={Plus_Icon} alt="Second Icon" className="menu-item-icon icon-second" />
                                Children
                            </span>
                        </MenuItem>
 
                        <MenuItem>
                            <FormControl sx={{ m: 1, minWidth: 195, height: 49 }} size="small" variant="outlined">
                                <InputLabel id="demo-select-small-label">Age</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                    input={<OutlinedInput sx={{ padding: 0 }} />}
                                    sx={{
                                        width: '195px',
                                        height: '49px',
                                        background: '#FFFFFF',
                                        left: '-10px',
                                        border: '0.5px solid #707070',
                                        borderRadius: '8px',
                                        opacity: 1,
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                    }}
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
                            <span style={{
                                width: '129px',
                                height: '20px',
                                textAlign: 'left',
                                font: 'normal normal normal 14px/21px Poppins',
                                letterSpacing: '0px',
                                color: '#2D3DDF',
                                opacity: 1
                            }}>
                                Add another room
                            </span>
                        </MenuItem>
 
                        <Divider sx={{ my: 1 }} />
 
                        <MenuItem>
                            <Button
                                onClick={() => handleAddClick(popupState)}
                                sx={{
                                    width: '74px',
                                    height: '33px',
                                    background: '#2D3DDF',
                                    borderRadius: '8px',
                                    color: '#FFFFFF',
                                    textTransform: 'none',
                                    font: 'normal normal normal 14px/21px Poppins',
                                    '&:hover': {
                                        background: '#1A2BCC',
                                    }
                                }}
                            >
                                Done
                            </Button>
                        </MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}