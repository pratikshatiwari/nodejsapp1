import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton, Button, Checkbox, TextField, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './TravellerDetails.scss';

interface Traveller {
  id: number;
  name: string;
  isChecked: boolean;
}

interface TravellerDetailsProps {
  onTravellerUpdate: (checkedTravellers: number) => void;
}

const TravellerDetails: React.FC<TravellerDetailsProps> = ({ onTravellerUpdate }) => {
  const [travellers, setTravellers] = useState<Traveller[]>([
    { id: 1, name: 'Josef Joe', isChecked: true },
    { id: 2, name: 'Sin Joe', isChecked: true },
    { id: 3, name: 'Mac Joe', isChecked: true },
  ]);

  const [editingTraveller, setEditingTraveller] = useState<Traveller | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTravellerName, setNewTravellerName] = useState('');

  const handleCheckboxChange = (id: number) => {
    setTravellers(travellers.map(traveller =>
      traveller.id === id ? { ...traveller, isChecked: !traveller.isChecked } : traveller
    ));
  };

  const handleEditClick = (traveller: Traveller) => {
    setEditingTraveller(traveller);
    setNewTravellerName(traveller.name);
    setIsDialogOpen(true);
  };

  useEffect(() => {
    const checkedCount = travellers.filter(t => t.isChecked).length;
    onTravellerUpdate(checkedCount);
  }, [travellers, onTravellerUpdate]);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingTraveller(null);
    setNewTravellerName('');
  };

  const handleSaveEdit = () => {
    if (editingTraveller) {
      setTravellers(travellers.map(traveller =>
        traveller.id === editingTraveller.id ? { ...traveller, name: newTravellerName } : traveller
      ));
    } else {
      const newTraveller: Traveller = {
        id: Math.max(...travellers.map(t => t.id)) + 1,
        name: newTravellerName,
        isChecked: true,
      };
      setTravellers([...travellers, newTraveller]);
    }
    handleDialogClose();
  };

  const handleAddReplace = () => {
    setEditingTraveller(null);
    setNewTravellerName('');
    setIsDialogOpen(true);
  };

  return (
    <Card className="traveller-details">
      <Typography variant="h2" className="traveller-details__title">
        TRAVELLER DETAILS
      </Typography>
      <CardContent className="traveller-details__content">
        <List className="traveller-details__content_items">
          {travellers.map((traveller, index) => (
            <ListItem key={traveller.id} className="traveller-details__item">
                <Checkbox
                  checked={traveller.isChecked}
                  onChange={() => handleCheckboxChange(traveller.id)}
                />
              <ListItemText
                primary={`Traveller ${index + 1}`}
                secondary={traveller.name}
                className="traveller-details__item-text"
              />
                <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(traveller)}>
                  <EditIcon />
                </IconButton>
            </ListItem>
          ))}
        </List>
        <hr className='horizontal'/>
        <Link
          onClick={handleAddReplace}
          className='link'
        >
          Add/Replace Traveller
        </Link>
      </CardContent>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{editingTraveller ? 'Edit Traveller' : 'Add Traveller'}</DialogTitle>
        <DialogContent>
           <FormControl variant="outlined">
          <InputLabel shrink htmlFor="travellername">
          Traveller Name
          </InputLabel>
          <TextField value={newTravellerName}   onChange={(e) => setNewTravellerName(e.target.value)} id="travellername"
            />
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} variant="outlined"  >
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} variant="outlined">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default TravellerDetails;