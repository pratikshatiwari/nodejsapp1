import { Box, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '../../assets/search_header.svg'
import './MiniSearchBar.scss'
export function MiniSearchBar (){
    return(

        <Box className="search-container">
            <Box className="search-part search-part-first">
                <Typography className='search-input-first'>Rome</Typography>
            </Box>
 
            <Box className="divider"></Box>
 
            <Box className="search-part search-part-second">
                <Typography className='search-input'>Sept 12 - 22</Typography>
            </Box>
 
            <Box className="divider"></Box>
 
            <Box className="search-part search-part-last">
                <Typography className='search-input-last'>3 travellers, 1 room</Typography>
            </Box>
 
            <img src={SearchIcon} alt="Search Icon" className="search-end-icon" />
        </Box>
    )
}

export default MiniSearchBar