import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Rating, IconButton, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import img1 from "../../assets/Product Image01.svg";
import img2 from "../../assets/Product Image02.svg";
import img3 from "../../assets/Product Image03.svg";
import img4 from "../../assets/Product Image04.svg";
import heart from "../../assets/ic-actions-heart (1).svg";
import retweet from '../../assets/retweet.png';
import './RoomListCard.scss';

interface RoomCardProps {
  image: string;
  rating: number;
  roomType: string;
  amenities: number;
  price: number;
  isSelected?: boolean;
  isFavorite?: boolean;
  onFavoriteToggle: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
  image,
  rating,
  roomType,
  amenities,
  price,
  isSelected = false,
  isFavorite = false,
  onFavoriteToggle,
}) => {
  return (
    <Card
      sx={{
        background: '#FFFFFF',
        boxShadow: '0rem 0.75rem 1.5rem rgba(126, 0, 0, 0.16)',
        borderRadius: '0.75rem',
        position: 'relative',
      }}
      className={`room-card ${isSelected ? 'room-card--selected' : ''}`}
    >
      <IconButton
        aria-label="add to favorites"
        onClick={onFavoriteToggle}
        color={isFavorite ? "error" : "default"}
        sx={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
        }}
      >
        <img src={heart}></img>
      </IconButton>

      {isSelected && (
        <Chip
          label="Selected Room"
          color="primary"
          className="room-card__selected-label"
        />
      )}

      <CardMedia
        className="room-card__media"
        image={image}
        title={roomType}
      />

      <CardContent className="room-card__content" sx={{ padding: 1 }}>
        <Box className="room-card__info">
          <Box className="room-card__rating" mb={1}>
            <Rating value={rating} precision={0.1} readOnly size="small" />
            <Typography
              textAlign="left"
              sx={{
                fontWeight: 600,
                fontSize: '0.875rem',
                fontFamily: 'Poppins',
              }}
              variant="body2"
              color="text.secondary"
              ml={1}
            >
              ({rating})
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography
              textAlign="left"
              sx={{ mr: 1,
                fontWeight: 'medium',
                fontSize: '1rem',
                fontFamily: 'Poppins',
              }}
              variant="subtitle1"
              component="div"
            >
              {roomType}
            </Typography>

            <Typography
              textAlign="left"
              sx={{
                fontWeight: 'medium',
                fontSize: '0.875rem',
                fontFamily: 'Poppins',
                letterSpacing: '0px',
                color: '#053EFF',
              }}
              variant="body2"
              className="room-card__amenities"
            >
              {amenities} amenities
            </Typography>
           
          </Box>
          <img
              src={retweet}
              alt="Retweet Icon"
              style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
              }}
            />
          <Typography
            variant="h6"
            component="div"
            className="room-card__price"
            sx={{
              marginBottom: 0,
              
            }}
          >
            ${price.toFixed(2)}
          </Typography>
          {/* <Box className="room-card__actions">
            <IconButton 
              aria-label="add to favorites" 
              onClick={onFavoriteToggle}
              color={isFavorite ? "error" : "default"}
            >
              <FavoriteIcon /> 
            </IconButton>
            <IconButton aria-label="share">
             <ShareIcon /> 
            </IconButton>
          </Box> */}
        </Box>
      </CardContent>
    </Card>



  );
};

export function RoomList() {
  const [rooms, setRooms] = useState([
    { id: 1, image: img1, rating: 4.7, roomType: "Standard Single Room", amenities: 14, price: 1990, isSelected: false, isFavorite: false },
    { id: 2, image: img2, rating: 4.9, roomType: "Deluxe Single Room", amenities: 18, price: 2990, isSelected: false, isFavorite: true },
    { id: 3, image: img3, rating: 5, roomType: "Premium Suite", amenities: 18, price: 7990, isSelected: true, isFavorite: true },
    { id: 4, image: img4, rating: 5, roomType: "Ultra Premium Room", amenities: 20, price: 8990, isSelected: false, isFavorite: true },
  ]);

  const toggleFavorite = (id: number) => {
    setRooms(rooms.map(room =>
      room.id === id ? { ...room, isFavorite: !room.isFavorite } : room
    ));
  };

  return (
    <Box className="room-list">
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '1.25rem',
          fontFamily: 'Poppins',
          letterSpacing: '0.25rem',
          color: '#22293C',
          textTransform: 'uppercase',
        }}
        variant="h5"
        component="h2"
        className="room-list__title"
      >
        ROOMS
      </Typography>
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          {...room}
          onFavoriteToggle={() => toggleFavorite(room.id)}
        />
      ))}
    </Box>
  );
}

export default RoomList;