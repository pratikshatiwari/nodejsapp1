import { Box } from '@mui/material';
import './SSHeader.scss';
import Logo from '../../assets/SunnySyde_Black.svg';
import Dollar from '../../assets/dollar_icon.svg';
import Group from '../../assets/Group.svg';
import Arrow from '../../assets/chevron-down 1.svg'; 
import sideBarIcon from '../../assets/sideBar.svg'; 

import SearchBar from './SearchBar'; 
interface HeaderProps {
    showSearch?: boolean;
    isHome?: boolean;
}
 
export function SSHeader({ isHome }: HeaderProps) {
    let showSearch = true;
 
    const isClicked = () => {};
  
    return (
        <>
            <Box component="header" className="header">
            <Box className="header-left">
            <img src={sideBarIcon} alt="SideBar Icon" className="header-image-top-left" />
 
                <img src={Logo} alt="Logo" className="header-image-left" />
            </Box>
 
                <Box className="header-center">
 
                </Box>
 
                <Box className="header-right">
                    <Box className="header-icon-wrapper-first">
                        <img src={Dollar} alt="Dollar Icon" className="header-image" onClick={isClicked} />
                        <img src={Arrow} alt="Arrow Icon" className="arrow-icon" />
                    </Box>
                    <Box className="header-icon-wrapper-second">
                        <img src={Group} alt="Group Icon" className="header-image" onClick={isClicked} />
                        <img src={Arrow} alt="Arrow Icon" className="arrow-icon" />
                    </Box>
                </Box>
            </Box>
 
            {showSearch && <SearchBar />}
 
        </>
    );
}
 
export default SSHeader;