import React, { useState } from 'react';
import { List, ListItem, Paper, Box } from '@mui/material';
 
const indianStates: string[] = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];
 
const SearchPopUp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const filteredStates = indianStates.filter((state) =>
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
    <Box sx={{ position: 'relative', width: '300px',marginTop:'-5px !important' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search"
        onFocus={() => setIsDropdownOpen(true)}  
        style={{
          width: '200px',
          padding: '10px 0',
          border: 'none',
          outline: 'none',  
          fontSize: '16px',
          backgroundColor: 'white',  
        }}
      />
 
      {isDropdownOpen && searchTerm && filteredStates.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            top: '40px',  
            width: '100%',
            maxHeight: 150,
            overflowY: 'auto',
            zIndex: 1000,  
            backgroundColor: 'white',  
          }}
        >
          <List>
            {filteredStates.map((state, index) => (
              <ListItem
                key={index}
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSelectState(state)}  
              >
                {state}
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};
 
export default SearchPopUp;