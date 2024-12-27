import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './sortByOption.module.scss';

import card from '../../assets/Card.png';
import card1 from '../../assets/Card1.png';
import card2 from '../../assets/Card2.png';
import card3 from '../../assets/Card3.png';
import star from '../../assets/Star.png'
import dollar from '../../assets/$.png';
import arrowright from '../../assets/arrowright.png';
import toparrow from '../../assets/toparrow.svg';
import badge from '../../assets/b1.png';
import zip from '../../assets/zip.png';
interface ImageData {
  src: string;
  label: string;
  id: number;
}

interface SortByOptionProps {
  images: ImageData[];
  onClose: () => void; 
}


const SortByOption: React.FC<SortByOptionProps> = ({ images , onClose}) => {
  const imagesPerRow = 5;
  const maxVisibleImages = imagesPerRow * 2;
  const imageData = [
    { src: card, label: 'Rome Capital', total: 4 },
    { src: card1, label: 'Piazza del Popolo', total: 15 },
    { src: card2, label: 'Pantheon', total: 11 },
    { src: card, label: 'Roman Forum', total: 10 },
  ];
  const options = ['Instant Book', 'Self Check-in', 'Allows Pets'];

  const visibleImages = images.slice(0, maxVisibleImages);

  const componentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleClickOutside = (event: MouseEvent) => {
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        onClose(); 
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {  
      document.body.style.overflow = 'auto'; 
      document.removeEventListener('mousedown', handleClickOutside); 
    };
  }, [onClose]);

  return (
    <Box
    ref={componentRef}
      className={styles.container}
      sx={{
        maxHeight: '100vh', 
        overflowY: 'auto', 
        padding: '20px',
        gap: '30px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      <Box>
        <Typography
          sx={{
            textAlign: 'left',
            font: 'normal normal normal 16px/25px Poppins',
            letterSpacing: '0px',
          }}
        >
          Sort By
        </Typography>
        <Box
          className={styles.optionsContainer}
        >
          <Box
            className={styles.optionBox}
          >
            <Box
              className={styles.arrows}
            >  <Box>
                <img src={toparrow} alt="arrow up" />
              </Box>
              <Box>
                <img src={arrowright} alt="arrow down" />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                style={{
                  textAlign: 'center',
                }}
                src={star}
                alt="star icon"
              />
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '10px',
                  lineHeight: '12px',
                  fontWeight: 500,
                  fontFamily: 'Poppins',
                  letterSpacing: '0px',
                  color: '#242424',
                  opacity: 0.8,
                }}
              >
                Popularity
              </Typography>
            </Box>

          </Box>


          <Box
            sx={{
              flex: 1,
              height: '72px',
              background: '#FAFAFA',
              border: '0.3px solid #707070',
              borderRadius: '8px',
              opacity: 1,
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'center',
              padding: '0 20px',
            }}>
            <Box
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >  <Box>
               <img src={toparrow} alt="arrow up" />
              </Box>
              <Box>
                <img src={arrowright} alt="arrow down" />
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                style={{
                  textAlign: 'center',
                }}
                src={dollar}
                alt="star icon"
              />
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '10px',
                  lineHeight: '12px',
                  fontWeight: 500,
                  fontFamily: 'Poppins',
                  letterSpacing: '0px',
                  color: '#242424',
                  opacity: 0.8,
                }}
              >
                Price
              </Typography>
            </Box>
          </Box>
        </Box>

      </Box>

      {/* <hr className={styles.customHr} /> */}

      <Box>
        <Typography
          sx={{
            textAlign: 'left',
            fontWeight: '400',
            fontSize: '1rem',
            fontFamily: 'Poppins',
            color: '#000000',
            opacity: 1,
          }}
        >
          Location
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
            marginTop: '5px'
          }}
        >
          {imageData.map((image, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src={image.src}
                alt={`image-${index}`}
                sx={{
                  height: '75px',
                  width: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '0.625rem',
                  fontWeight: '500',
                  fontFamily: 'Poppins',
                  letterSpacing: '0px',
                  color: '#000000',
                  opacity: 1,
                }}
              >
                {image.label} ({image.total})
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>


      <Box>
        <Typography
          sx={{
            textAlign: 'left',
            fontWeight: '400',
            fontSize: '1rem',
            fontFamily: 'Poppins',
            color: '#000000',
            opacity: 1,
          }}
        >
          Type
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '15%',
            maxWidth: '100%',
            overflow: 'hidden',
            marginTop: '10px'
          }}
        >
          {visibleImages.map((image, index) => (
            <Box
              key={image.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                width: '8%',
                 marginTop: '10px'
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={image.label}
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '0.5rem',
                  fontWeight: '400',
                  fontFamily: 'Poppins',
                  letterSpacing: '0px',
                  color: '#2D3DDF',
                  opacity: 1,
                }}
              >
                {image.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>



      <Box>
        <Typography
          sx={{
            textAlign: 'left',
            font: 'normal normal normal 16px/25px Poppins',
            letterSpacing: '0px',
            color: '#000000',
          }}
        >
          Top-tier stays
        </Typography>

        <Box
          className={styles.optionsContainer}
          sx={{ marginTop: '15px'}}
        >


          <Box
            className={styles.option} sx={{ position: 'relative' }}
          >
            <Box sx={{ position: 'absolute', top: '2px', right: '2px' }}>
              <input type="checkbox" />
            </Box>
            <Box className={styles.option1}>
              <img src={badge}></img>
              <Typography
                sx={{
                  textAlign: 'left',
                  font: 'normal normal 600 10px/14px Poppins',
                  letterSpacing: '0.5px',
                  color: '#000000',
                  textTransform: 'uppercase',
                }}
              >
                GUEST FAVOURITE
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  textAlign: 'left',
                  font: 'normal normal normal 8px/10px Poppins',
                  letterSpacing: '0.4px',
                  color: '#000000',
                }}
              >
                The most loved properties on SunnySyde, according to guests
              </Typography>
            </Box>
          </Box>


          <Box
            className={styles.option} sx={{ position: 'relative' }}
          >
            <Box sx={{ position: 'absolute', top: '2px', right: '2px' }}>
              <input type="checkbox" />
            </Box>
            <Box className={styles.option1}>
              <img src={zip}></img>
              <Typography
                sx={{
                  textAlign: 'left',
                  font: 'normal normal 600 10px/14px Poppins',
                  letterSpacing: '0.5px',
                  color: '#000000',
                  textTransform: 'uppercase',
                }}
              >
                LUXE
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  textAlign: 'left',
                  font: 'normal normal normal 8px/10px Poppins',
                  letterSpacing: '0.4px',
                  color: '#000000',
                }}
              >
                Extraordinary properties with elevated design. Inspected for quality.
              </Typography>
            </Box>
          </Box>

        </Box>


      </Box>


      <Box>
        <Typography
          sx={{
            textAlign: 'left',
            font: 'normal normal normal 16px/25px Poppins',
            letterSpacing: '0px',
            color: '#000000',
            opacity: 1,
          }}
        >
          Booking Options
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
             marginTop: '10px'
          }}
        >
          {options.map((option, index) => (
            <Box
              key={index}
              sx={{
                border: '0.5px solid #707070',
                borderRadius: '16px',
                padding: '8px 12px',
                textAlign: 'center',
                font: 'normal normal normal 14px/20px Poppins',
                letterSpacing: '0px',
                color: '#000000',
                opacity: 1,
              }}
            >
              {option}
            </Box>
          ))}
        </Box>
      </Box>



    </Box >
  );
};

export default SortByOption;
