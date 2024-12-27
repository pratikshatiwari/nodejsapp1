import React, { useEffect, useState } from 'react';
import { Card, CardContent, Avatar, Typography, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LiquorIcon from '@mui/icons-material/Liquor';
import WifiIcon from '@mui/icons-material/Wifi';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import heart_image from '../../assets/ic-actions-heart.svg';
import gold_star from '../../assets/Star (1).svg';
import black_star from '../../assets/Star.svg';
 
 
interface ManagerDetails {
  name: string;
  role: string;
  image: string;
  reviews: number;
  rating: number;
  yearExperience : number ;
  about : string;
  detail : string;
}
 
interface Award {
  icon: string;
  title: string;
  description: string;
}
 
interface IconItem {
  icons: string;
  label: string;
  rating: number;
  star: string;
}
 
interface VerifiedReviews {
  rating : number;
  comment : string;
  good_review : string;
  bad_review : string ;
  date : string;
  type : string;
}
interface askQuestion {
  question : string,
  customer_name : string
}
 
interface PropertyCardProps {
  images: string[];
  price: number;
  name: string;
  location: string;
  rating: number;
  guestFav: boolean;
  amenities: string[];
  manager: ManagerDetails;
  awards: Award[];
  checkin:string ;
  checkout:string;
  reviews : number ;
  reviewsIcons : IconItem[];
  verifiedReviews : VerifiedReviews[];
  questions : askQuestion[];
}
 
const CardImage = styled('div')<{ image: string }>(({ theme, image }) => ({
  height: 139,
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: theme.spacing(2),
  position: "relative",
}));
 
const AmenityIcon = styled('div')({
  width: 16,
  height: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#2D3DDF',
});
 
const getRatingText = (rating: number): { text: string; color: string } => {
  if (rating > 5) return { text: "BEST", color: "#1AA700" };
  if (rating > 4) return { text: "GOOD", color: "#FFA500" };
  if (rating > 3) return { text: "POOR", color: "#FF0000" };
  return { text: "", color: "inherit" };
};
 
const getAmenityIcon = (amenity: string) => {
   switch (amenity) {
    case 'car': return <DirectionsCarIcon />;
    case 'bath': return <BathtubIcon />;
    case 'drinks': return <LiquorIcon />;
    case 'wifi': return <WifiIcon />;
    case 'gym': return <FitnessCenterIcon />;
    default: return null;
  }
}; 

const PropertyCard: React.FC<PropertyCardProps> = ({
  images,
  price,
  name,
  location,
  rating,
  guestFav,
  amenities,
}) => {
  const ratingInfo = getRatingText(rating);
  const displayedAmenities = amenities.slice(0, 5);
  const additionalAmenities = amenities.length - displayedAmenities.length;
 
  const [heart, setHeart] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRating, setUserRating] = useState<number>(rating);
  const [isHovering, setIsHovering] = useState<boolean>(false);
 
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isHovering) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1500);
    }
    return () => clearInterval(intervalId);
  }, [isHovering, images.length]);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
 
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
 
  const handleRatingClick = (newRating: number) => {
    setUserRating(newRating);
  };
 
  return (
    <Card sx={{
      boxShadow: "0px 10px 20px #7E00001A",
      opacity: 1,
      borderRadius: "10px",
      height: '400px', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between'
    }}>
      <CardImage
        image={images[currentImageIndex]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer', height: '50%' }} 
      >
        {guestFav && (
          <div style={{
            width: '110px',
            height: '22px',
            background: '#FFFFFF',
            borderRadius: '11px',
            position: 'absolute',
            top: '10px',
            left: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Typography style={{
              font: 'normal normal normal 12px/18px Poppins, sans-serif',
              color: '#070707',
              opacity: 0.8,
            }}>
              Guest Favorite
            </Typography>
          </div>
        )}
 
        <div onClick={(event) => { event.stopPropagation(); setHeart(!heart); }}
          style={{ display: "flex", justifyContent: "flex-end", cursor: "pointer" }}
        >
          {heart && <img src={heart_image} alt="heart" />}
        </div>
 
        <Avatar sx={{
          bgcolor: "#FFFFFF",
          color: "blue",
          fontSize: 12,
          width: 30,
          height: 30,
          fontWeight: 600,
          position: "absolute",
          bottom: 18,
          left: 18,
        }}>
          AR
        </Avatar>
      </CardImage>
 
      <CardContent style={{ height: '50%' }}> 
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <Typography color="primary" fontSize={18} fontWeight={600}>
            ${price}<span style={{ color: "#888888", fontSize: 14, fontWeight: 400 }}>/night</span>
          </Typography>
          <div>
             <ShareIcon style={{ color: "#2D3DDF", marginRight: 8 }} />
            <MoreVertIcon style={{ color: "#2D3DDF" }} /> 
          </div>
        </div>
        <Typography color="text.primary" fontSize={18} fontWeight={800}>{name}</Typography>
        <Typography fontSize={12} color="text.secondary">{location}</Typography>
        <div style={{ marginTop: 15, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
           {displayedAmenities.map((amenity, index) => (
            <AmenityIcon key={index}>{getAmenityIcon(amenity)}</AmenityIcon>
          ))} 
          {additionalAmenities > 0 && (
            <Typography color="primary" fontSize={16} fontWeight={600}>
              +{additionalAmenities}
            </Typography>
          )}
        </div>
        <div style={{ marginTop: 15, display: "flex", alignItems: "center" }}>

                    {/* <Rating name="read-only" value={rating > 5 ? 5 : rating} readOnly precision={0.1} size="small" /> */}
          {[1, 2, 3, 4, 5].map((star, index) => (
            <img
              key={index}
              src={star <= userRating ? gold_star : black_star}
              alt={`${star}-star`}
              style={{ cursor: "pointer", marginRight: 5 }}
              onClick={() => handleRatingClick(star)}
            />
          ))}

          <Typography fontSize={14} fontWeight={600} sx={{ mx: 1 }}>({userRating.toFixed(1)})</Typography>
          {ratingInfo.text && (
            <Typography color={ratingInfo.color} fontSize={14}>
              {ratingInfo.text}
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;