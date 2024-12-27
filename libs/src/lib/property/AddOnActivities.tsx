import React, { useState } from 'react';
import { Box, Typography, Button, Paper,IconButton } from '@mui/material';
import Grid  from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface Activity {
  id: string;
  time: string;
  description: string;
  price: number;
}

interface Day {
  date: string;
  activities: Activity[];
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  backgroundColor: theme.palette.grey[100],
}));

const TimeSlot = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
  minHeight: '50px',
}));

 export const AddOnActivities: React.FC = () => {
  const [days, setDays] = useState<Day[]>([
    { date: '12 Sept', activities: [
      { id: '1', time: '9am', description: 'Airport To Hassler Villa Transfer', price: 0 },
      { id: '2', time: '10am', description: 'Hotel To Tiber Trek Point', price: 0 },
      { id: '3', time: '11am', description: 'Guided Trek Around Tiber Springs', price: 45 },
      { id: '4', time: '12pm', description: 'Tiber Trek Point To Hot Air Balloon Ride Point', price: 0 },
      { id: '5', time: '1pm', description: 'Hot Air Balloon Ride', price: 80 },
    ] },
    { date: '13 Sept', activities: [] },
    { date: '14 Sept', activities: [] },
    { date: '15 Sept', activities: [] },
    { date: '16 Sept', activities: [] },
    { date: '17 Sept', activities: [] },
  ]);

  const addActivity = (dayIndex: number) => {
    const newDays = [...days];
    newDays[dayIndex].activities.push({
      id: Math.random().toString(36).substr(2, 9),
      time: '12pm',
      description: 'New Activity',
      price: 0,
    });
    setDays(newDays);
  };

  const removeActivity = (dayIndex: number, activityId: string) => {
    const newDays = [...days];
    newDays[dayIndex].activities = newDays[dayIndex].activities.filter(
      (activity) => activity.id !== activityId
    );
    setDays(newDays);
  };

  const totalPrice = days.reduce(
    (total, day) => total + day.activities.reduce((dayTotal, activity) => dayTotal + activity.price, 0),
    0
  );

  return (
    <Box style={{marginLeft:"30px"}} sx={{ width: '100%', overflowX: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        ADD-ON ACTIVITIES
      </Typography>
      <Grid container spacing={2}>
        {days.map((day, dayIndex) => (
          <Grid  size={{xs:12 , sm:6, md:4, lg:2}}  key={day.date}>
            <StyledPaper>
              <Typography variant="subtitle1" gutterBottom>
                Day {dayIndex + 1}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {day.date}
              </Typography>
              {['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'].map((time) => (
                <TimeSlot key={time}>
                  <Typography variant="body2" color="textSecondary">
                    {time}
                  </Typography>
                  {day.activities
                    .filter((activity) => activity.time === time)
                    .map((activity) => (
                      <Box key={activity.id} display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2">{activity.description}</Typography>
                        <IconButton size="small" onClick={() => removeActivity(dayIndex, activity.id)}>
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    ))}
                </TimeSlot>
              ))}
              <Button
                startIcon={<AddIcon />}
                onClick={() => addActivity(dayIndex)}
                fullWidth
                sx={{ mt: 2 }}
              >
                Add Activity
              </Button>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ mr: 2 }}>
            Activities Cart
          </Typography>
          <Typography variant="h6" color="primary">
            ${totalPrice.toFixed(2)}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddOnActivities;