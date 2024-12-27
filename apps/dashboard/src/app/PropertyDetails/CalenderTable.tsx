import React, { useEffect, useState } from 'react'; import { Typography, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Box, Modal, TextField, Button, Container, TableContainer } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import down_arrow from '../../assets/ic-chevron-down.svg';
import DeleteIcon from '@mui/icons-material/Delete';
import plus_icon from '../../assets/baseline-add_circle-24px.svg';
import ActivitiesAndService from './ActivitiesAndService';

import FlightIcon from '@mui/icons-material/Flight';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LandscapeIcon from '@mui/icons-material/Landscape';
import AirballoonIcon from '@mui/icons-material/Air';
import styles from './CalenderTable.module.scss';
type Activity = {
    id: string;
    time: string;
    description: string;
    price: number;
    duration: number;
    icon: React.ReactNode;
};

type Day = {
    date: string;
    activities: Activity[];
};

type CalendarDate = {
    day: number;
    formattedDate: string;
};

type CalendarTime = string;

const generateDates = (): CalendarDate[] => {
    const start = new Date(2024, 8, 12);
    const dates: CalendarDate[] = [];
    for (let i = 0; i < 12; i++) {
        const nextDate = new Date(start);
        nextDate.setDate(start.getDate() + i);
        const day = i + 1;
        const formattedDate = nextDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
        });
        dates.push({ day, formattedDate });
    }
    return dates;
};

const generateTimes = (): CalendarTime[] => {
    const times: CalendarTime[] = [];
    for (let i = 9; i <= 33; i++) {
        const hour = i % 24;
        const suffix = hour < 12 ? 'AM' : 'PM';
        const displayHour = hour % 12 || 12;
        times.push(`${displayHour} ${suffix}`);
    }
    return times;
};

const CalendarTable: React.FC = () => {
    const dates: CalendarDate[] = generateDates();
    const times: CalendarTime[] = generateTimes();

    const [visibleDates, setVisibleDates] = useState<number>(0);
    const [visibleTimes, setVisibleTimes] = useState<number>(0);
    const [selectedColumn, setSelectedColumn] = useState<number | null>(null);

    const [days, setDays] = useState<Day[]>([
        {
            date: '12 Sept',
            activities: [
                { id: '1', time: '9 AM', description: 'Airport To Hassler Villa Transfer', duration: 45, price: 0, icon: <FlightIcon /> },
                { id: '2', time: '9:46 AM', description: 'Hotel To Tiber Trek Point', duration: 40, price: 0, icon: <DirectionsBusIcon /> },
                { id: '3', time: '10:30 AM', description: 'Guided Trek Around Tiber Springs', duration: 60, price: 45, icon: <LandscapeIcon /> },
                { id: '4', time: '11:30 PM', description: 'Tiber Trek Point To Hot Air Balloon Ride Point', duration: 45, price: 0, icon: <DirectionsBusIcon /> },
                { id: '5', time: '1 PM', description: 'Hot Air Balloon Ride', duration: 60, price: 80, icon: <AirballoonIcon /> },

            ],
        },
        { date: '13 Sept', activities: [{ id: '1', time: '1 PM', description: 'Hot Air Balloon Ride', duration: 60, price: 80, icon: <FlightIcon /> },] },
        { date: '14 Sept', activities: [] },
        { date: '15 Sept', activities: [] },
        { date: '16 Sept', activities: [] },
        { date: '17 Sept', activities: [] },
    ]);

    const [open, setOpen] = useState(false);

    const [newActivity, setNewActivity] = useState<Activity>({ id: '', time: '', description: '', duration: 0, price: 0, icon: '' });
    const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
    const [selectedTime, setSelectedTime] = useState<string>('');


    const datesPerPage = 5;
    const timesPerPage = 7;

    const handleDateScroll = (direction: 'left' | 'right'): void => {
        if (direction === 'left' && visibleDates > 0) {
            setVisibleDates(visibleDates - 1);
        } else if (direction === 'right' && visibleDates + datesPerPage < dates.length) {
            setVisibleDates(visibleDates + 1);
        }
    };

    const handleTimeScroll = (direction: 'down' | 'up'): void => {
        if (direction === 'down' && visibleTimes + timesPerPage < times.length) {
            setVisibleTimes(visibleTimes + 1);
        }
        if (direction === 'up' && visibleTimes > 0) {
            setVisibleTimes(visibleTimes - 1);
        }
    };
    const handleColumnClick = (index: number): void => {
        setSelectedColumn(index === selectedColumn ? null : index);
    };

    const addActivity = (dayIndex: number, time: string): void => {
        const newActivity: Activity = {
            id: Date.now().toString(),
            time,
            description: 'New Activity',
            duration: 60,
            price: 0,
            icon: ''
        };

        const updatedDays = [...days];
        updatedDays[dayIndex].activities.push(newActivity);
        setDays(updatedDays);
    };

    const deleteActivity = (dayIndex: number, activityId: string): void => {
        const updatedDays = [...days];
        updatedDays[dayIndex].activities = updatedDays[dayIndex].activities.filter(activity => activity.id !== activityId);
        setDays(updatedDays);
    };

    const handleOpen = (dayIndex: number, time: string): void => {
        setSelectedDayIndex(dayIndex);
        setSelectedTime(time);
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    const handleActivitySelect = (activity: { description: string; price: number }) => {
        const updatedDays = [...days];
        const newActivity = {
            id: Date.now().toString(),
            time: selectedTime,
            description: activity.description,
            duration: 60, // Assuming 1 hour duration
            price: activity.price,
        };
        // updatedDays[selectedDayIndex].activities.push(newActivity);
        setDays(updatedDays);
        handleClose();
    };

    const handleInputChange = (field: keyof Activity, value: string | number) => {
        setNewActivity({ ...newActivity, [field]: value });
    };

    const submitActivity = (): void => {
        const updatedDays = [...days];
        const activity = {
            ...newActivity,
            id: Date.now().toString(),
        };
        updatedDays[selectedDayIndex].activities.push(activity);
        setDays(updatedDays);
        handleClose();
    };

    useEffect(() => {
        // Effect
    }, [days]);

    const parseTime = (time: string): number => {
        const [hourMinute, period] = time.split(' ');
        // eslint-disable-next-line prefer-const
        let [hour, minute] = hourMinute.split(':').map(Number);

        if (period === 'PM' && hour !== 12) {
            hour += 12;
        } else if (period === 'AM' && hour === 12) {
            hour = 0;
        }

        return hour * 60 + (minute || 0);
    };


    const calculateOffset = (activityTime: string, currentTime: string): number => {
        const activityMinutes = parseTime(activityTime);
        const currentMinutes = parseTime(currentTime);

        return (activityMinutes - currentMinutes) * (66 / 60);
    };




    const isTimeWithinSlot = (activityTime: string, slotTime: string): boolean => {
        const [activityHour, activityPeriod] = activityTime.split(' ');
        const [slotHour, slotPeriod] = slotTime.split(' ');

        const activityHourInt = parseInt(activityHour.split(':')[0]);
        const slotHourInt = parseInt(slotHour.split(':')[0]);

        return activityHourInt === slotHourInt && activityPeriod === slotPeriod;
    };


    return (
        <Container maxWidth="xl">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="activities-and-service-modal"
                aria-describedby="activities-and-service-description"
            >
                <Box className="activities-and-service-modal">
                    <ActivitiesAndService onClose={handleClose} onActivitySelect={handleActivitySelect} />
                </Box>
            </Modal>

            <Box style={{ marginTop: '3%' }}>
                <Typography className={styles.addOnTitle} variant="h2">
                    ADD-ON ACTIVITIES
                </Typography>
            </Box>

            <Box sx={{ marginTop: "2%", marginBottom: "1%", width: '100%', overflow: 'hidden', position: 'relative' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>


                    <Table>

                        <TableHead>
                            <TableRow sx={{ height: '25px' }}>
                                <TableCell sx={{ visibility: 'hidden', border: 'none' }}></TableCell>
                                {dates.slice(visibleDates, visibleDates + datesPerPage).map((date, index) => (
                                    <TableCell
                                        key={index}
                                        align="center"
                                        onClick={() => handleColumnClick(index)}
                                        sx={{
                                            width: '10%',
                                            textAlign: 'center',
                                            fontFamily: 'Poppins',
                                            fontSize: '10px',
                                            fontWeight: 500,
                                            backgroundColor: selectedColumn === index ? '#2D3DDF' : '#EFF0FF',
                                            color: selectedColumn === index ? '#FFFFFF' : '#2D3DDF',
                                            cursor: 'pointer',
                                            borderRadius: '4px',
                                            ...(selectedColumn === index
                                                ? { borderColor: '#2D3DDF', borderWidth: '2px', borderStyle: 'solid' }
                                                : { border: 'none' }),
                                        }}
                                    >
                                        <div>Day {date.day}</div>
                                        <div>{date.formattedDate}</div>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {times.slice(visibleTimes, visibleTimes + timesPerPage).map((time, rowIndex) => (
                                <TableRow key={rowIndex} sx={{ height: '66px' }}>
                                    <TableCell
                                        sx={{
                                            width: '5%',
                                            textAlign: 'right',
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            fontWeight: 'normal',
                                            fontSize: '12px',
                                            letterSpacing: '0px',
                                            color: '#000000',
                                            opacity: 1,
                                            border: 'none',
                                        }}
                                    >
                                        {time}
                                    </TableCell>
                                    {Array(datesPerPage).fill(null).map((_, colIndex) => {
                                        const dayIndex = visibleDates + colIndex;
                                        const day = days[dayIndex];

                                        const lastActivityIndex = day?.activities.reduce((lastIndex, act, currentIndex) => {
                                            const currentTime = act.time;
                                            return (currentTime === time || isTimeWithinSlot(currentTime, time)) ? currentIndex : lastIndex;
                                        }, -1);

                                        const isLastRow = (rowIndex === lastActivityIndex);

                                        const noActivitiesInColumn = lastActivityIndex === -1;

                                        const activity = day?.activities.find(act => act.time === time || isTimeWithinSlot(act.time, time));
                                        const columnBackgroundColor = colIndex % 2 === 0 ? '#F4FDFE' : '#F7F5F7';
                                        return (
                                            <TableCell
                                                key={colIndex}
                                                onClick={() => handleColumnClick(colIndex)}
                                                sx={{
                                                    textAlign: 'center',
                                                    fontFamily: 'Poppins',
                                                    color: '#2D3DDF',
                                                    position: 'relative',
                                                    backgroundColor: columnBackgroundColor,
                                                    border: '0.5px solid #D7E6E7',
                                                    padding: 0.1,
                                                    height: '66px',
                                                }}
                                            >
                                                {activity ? (
                                                    <Box
                                                        sx={{
                                                            marginTop: `${calculateOffset(activity.time, time)}px`,
                                                            background: '#EBF3FF',
                                                            border: '0.5px solid #97B6E5',
                                                            borderRadius: '4px',
                                                            width: '100%',
                                                            height: `${(activity.duration / 60) * 66}px`,
                                                            minHeight: '33px',
                                                            overflow: 'hidden',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            zIndex: 1
                                                        }}
                                                    >
                                                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '4px' }}>
                                                            <div>
                                                                {activity.icon}
                                                            </div>
                                                            <div>
                                                                <div
                                                                    style={{
                                                                        textAlign: 'center',
                                                                        fontSize: '8px',
                                                                        fontFamily: 'Poppins, sans-serif',
                                                                        fontWeight: 'normal',
                                                                        color: '#000000',
                                                                    }}
                                                                >
                                                                    {activity.description}
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        textAlign: 'center',
                                                                        fontSize: '8px',
                                                                        fontFamily: 'Poppins, sans-serif',
                                                                        fontWeight: 600,
                                                                        color: '#000000',
                                                                    }}
                                                                >
                                                                    {activity.time}
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        textAlign: 'center',
                                                                        fontSize: '8px',
                                                                        fontFamily: 'Poppins, sans-serif',
                                                                        fontWeight: 600,
                                                                        color: '#000000',
                                                                    }}
                                                                >
                                                                    {activity.duration}min
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        textAlign: 'center',
                                                                        fontSize: '8px',
                                                                        fontFamily: 'Poppins, sans-serif',
                                                                        fontWeight: 'medium',
                                                                        color: '#0FBF00',
                                                                    }}
                                                                >
                                                                    {activity.price === 0 ? 'Free' : `$${activity.price}`}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <IconButton
                                                                    sx={{
                                                                        marginLeft: 'auto',
                                                                    }}
                                                                    size="small"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        deleteActivity(dayIndex, activity.id);
                                                                    }}
                                                                >
                                                                    <DeleteIcon fontSize="small" />
                                                                </IconButton>
                                                            </div>
                                                        </div>
                                                    </Box>
                                                ) : null}

                                                {rowIndex === 0 &&
                                                    <div style={{ position: 'absolute', zIndex: 100, top: '40%', left: '50%', transform: 'translateX(-50%)' }}>
                                                        <img
                                                            src={plus_icon}
                                                            alt="Add"
                                                            style={{ cursor: 'pointer', width: '20px' }}
                                                            onClick={() => {
                                                                handleOpen(dayIndex, time);
                                                            }}
                                                        />
                                                    </div>}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>

                    <div
                        style={{
                            height: '100%',
                            width: '100px',
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            background: 'transparent linear-gradient(90deg, #FFFFFF00 0%, #FFFFFFE6 65%, #FEFEFEF2 81%, #FDFDFD 100%)',
                            zIndex: '10',
                        }}
                    ></div>
                    <IconButton onClick={() => handleDateScroll('right')} style={{ zIndex: '10' }}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Box>

            <Box marginLeft={'4rem'}>
                <IconButton onClick={() => handleTimeScroll('down')}>
                    <img src={down_arrow} alt="Scroll Down" style={{ width: '15px', height: '15px' }} />
                </IconButton>
            </Box>

        </Container>
    );
};

export default CalendarTable; 