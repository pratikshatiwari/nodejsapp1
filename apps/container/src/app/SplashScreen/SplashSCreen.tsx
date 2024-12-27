import { useState, useEffect } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import Logo from '../assets/Sunnysyde_Logo_White.svg';
import { useNavigate } from 'react-router-dom';
import './SplashSCreen.scss'
export function SplashScreen() {
  const [progress, setProgress] = useState<number>(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress: number) =>
        prevProgress >= 100 ? 100 : prevProgress + 50
      );
    }, 1000);
 
    if (progress === 100) {
      clearInterval(timer);
 
      setTimeout(() => {
        navigate('/categories');
      }, 500);
    }
 
    return () => clearInterval(timer);
  }, [progress, navigate]);
 
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#22293C"
    >
      <img src={Logo} alt="Logo" className="logo-image" />
      <Typography
        variant="h6"
        color="white"
        className="typography-title"
      >
        EXPLORE THE GREAT OUTDOORS
      </Typography>
      <Box className="progress-container">
        <LinearProgress
          variant="determinate"
          value={progress}
          className="linear-progress"
        />
      </Box>
    </Box>
  );
}
 
export default SplashScreen;