import React, { useState } from "react";
import myImage from "../../assets/about-vacation-bg.png";

import { Box, Typography, Button, Container } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useNavigate } from "react-router-dom";
import Reviews from "./Reviews";
import am_icon1 from '../../assets/am_icon1.svg'
import am_icon2 from '../../assets/am_icon2.svg'
import am_icon3 from '../../assets/am_icon3.svg'
import am_icon4 from '../../assets/am_icon4.svg'

import "./AboutVilla.scss";
interface IconItem {
  icons: string;
  label: string;
  rating: number;
  star: string;
}

interface Reason {
  heading: string;
  text: string;
  icon: string;
}

interface Amenity {
  icon: string;
  label: string;
}

interface Award {
  icon: string;
  title: string;
  description: string;
}
interface ManagerDetails {
  name: string;
  role: string;
  image: string;
  reviews: number;
  rating: number;
  yearExperience: number;
  about: string;
  detail: string
}

interface VerifiedReviews {
  rating: number;
  comment: string;
  good_review: string;
  bad_review: string;
  date: string;
  type: string;
}
interface askQuestion {
  question: string,
  customer_name: string
}
interface Property {
  facility: string;
  id: string;
  images: string[];
  price: number;
  name: string;
  location: string;
  rating: number;
  guestFav: boolean;
  amenities: string[];
  manager: ManagerDetails;
  awards: Award[];
  checkin: string;
  checkout: string;
  reviews: number;
  reviewsIcons: IconItem[];
  verifiedReviews: VerifiedReviews[];
  questions: askQuestion[];
}

const amenities: Amenity[] = [
  { icon: am_icon1, label: 'Swimming Pool' },
  { icon: am_icon2, label: '4 Restaurant' },
  { icon: am_icon3, label: 'SPA' },
  { icon: am_icon4, label: 'Fitness Center' },
];

interface AboutVillaProps {
  reasonsToBook: Reason[];
  property: Property;
}


const AboutVilla: React.FC<AboutVillaProps> = ({ reasonsToBook, property }) => {

  const [showReviews, setShowReviews] = useState<boolean>(false);

  const handleClick = () => {
    setShowReviews(!showReviews);
  };
  const navigate = useNavigate();
  return (
    <>


      <Box className="about-villa-container">
        <Box className="header-im">
          <img src={myImage} alt="description" />
        </Box>
        <Box
          className="text-overlay"
        >

          <Box
            className="vacation-div"
          >
            <Typography
              variant="h5"
              className="vacation-div-text"

            >
              Create Your own vacation
            </Typography>
          </Box>

          <Box
            className="vacation-div-1"

          >
            <Typography
              variant="h5"
              className="vacation-div-1-text"
            >
              SunnySyde helps you to create your own likings with nearby
              activities and service
            </Typography>
          </Box>


          <Button className="vacation-btn" variant="outlined" onClick={() => navigate("/activitypage", { state: { property } })}>Start now</Button>


        </Box>
      </Box>



      <Box className="header-3" sx={{ mt: "2rem" }}>


        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid size={4} className="reasons-grid">
              <p className="reasons-title">TOP REASONS TO BOOK</p>
              {reasonsToBook.map((reason, index) => (
                <Box className="reason-box" key={index}>
                  <Box className="reason-icon">
                    <img src={reason.icon} alt="ic" className="reason-img" />
                  </Box>
                  <Box className="reason-text-box">
                    <p className="para1">{reason.heading}</p>
                    <p className="para2">{reason.text}</p>
                  </Box>
                </Box>
              ))}
            </Grid>

            <Grid size={4}>
              <Box className="summary-section">
                <Box className="heading2">
                  <p className="reviews-title">REVIEWS</p>
                </Box>


                <Box
                  className="review-box"
                >

                  <Box className="summary-header">
                    <p className="para">Review Summary</p>
                    <span className="ai">
                      powered by AI &nbsp;
                      <svg
                        id="Group_927"
                        data-name="Group 927"
                        xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="16.484"
                        height="15.59"
                        viewBox="0 0 16.484 15.59"
                        className="ai-icon"
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_627"
                              data-name="Rectangle 627"
                              width="16.484"
                              height="15.59"
                              fill="#838383"
                              stroke="#838383"
                              stroke-width="0.5"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Group_926"
                          data-name="Group 926"
                          clip-path="url(#clip-path)"
                        >
                          <path
                            id="Path_1566"
                            data-name="Path 1566"
                            d="M0,146.913a.438.438,0,0,1,.356-.172,2.467,2.467,0,0,0,1.775-.819,2.549,2.549,0,0,0,.571-1.489c.01-.112,0-.226.019-.337a.276.276,0,0,1,.265-.271.283.283,0,0,1,.266.289c.019.208.027.418.062.623a2.283,2.283,0,0,0,2.095,1.983c.085.01.17.02.256.027.195.016.3.106.3.267s-.112.26-.315.29a4.655,4.655,0,0,0-.892.182,2.187,2.187,0,0,0-1.467,1.833c-.035.211-.042.426-.063.639-.012.126-.049.234-.2.241a.258.258,0,0,1-.289-.221c-.036-.243-.04-.492-.084-.733A2.275,2.275,0,0,0,.539,147.3a1.732,1.732,0,0,0-.208-.019A.329.329,0,0,1,0,147.075Zm4.435.118a2.809,2.809,0,0,1-1.473-1.451A2.813,2.813,0,0,1,1.5,147.033a2.875,2.875,0,0,1,1.468,1.451,2.824,2.824,0,0,1,1.472-1.453"
                            transform="translate(0 -134.61)"
                            fill="#838383"
                            stroke="#838383"
                            stroke-width="0.5"
                          />
                          <path
                            id="Path_1567"
                            data-name="Path 1567"
                            d="M104.837,54.842c.148,0,.243.116.257.294.027.353.04.707.089,1.057a4.157,4.157,0,0,0,3.357,3.633c.317.071.646.091.969.136a.866.866,0,0,1,.157.028.266.266,0,0,1-.057.528c-.319.038-.643.056-.956.123a4.31,4.31,0,0,0-2.533,1.476,4.411,4.411,0,0,0-.93,2.26c-.042.313-.05.63-.07.945a.314.314,0,0,1-.156.3c-.18.091-.365-.036-.381-.269s-.015-.494-.041-.739a4.229,4.229,0,0,0-3.634-4c-.252-.047-.511-.061-.767-.085s-.351-.108-.344-.29.128-.261.354-.27a5,5,0,0,0,2.156-.572,3.98,3.98,0,0,0,2.011-2.476,6.637,6.637,0,0,0,.248-1.762c.006-.2.113-.316.272-.311m-.008,2.295a4.721,4.721,0,0,1-3.191,3.1,4.69,4.69,0,0,1,3.191,3.149,4.688,4.688,0,0,1,3.19-3.149,4.72,4.72,0,0,1-3.191-3.1"
                            transform="translate(-93.401 -51.328)"
                            fill="#838383"
                            stroke="#838383"
                            stroke-width="0.5"
                          />
                          <path
                            id="Path_1568"
                            data-name="Path 1568"
                            d="M39.719,0c.155,0,.24.115.264.305a6.211,6.211,0,0,0,.16.995A2.2,2.2,0,0,0,42,2.869c.121.023.244.03.367.041.22.02.326.11.325.279s-.111.273-.337.284a2.737,2.737,0,0,0-1.084.267A2.226,2.226,0,0,0,40.016,5.5c-.033.206-.042.415-.06.623a.237.237,0,0,1-.222.251.259.259,0,0,1-.276-.236c-.034-.249-.044-.5-.086-.749a2.263,2.263,0,0,0-1.992-1.9c-.112-.014-.223-.026-.336-.034-.189-.013-.3-.107-.313-.259s.108-.268.309-.278a2.787,2.787,0,0,0,1.085-.263A2.239,2.239,0,0,0,39.4.854c.031-.2.032-.406.057-.607A.253.253,0,0,1,39.719,0m-1.5,3.182A2.814,2.814,0,0,1,39.7,4.633,2.827,2.827,0,0,1,41.162,3.18a2.794,2.794,0,0,1-1.467-1.446,2.829,2.829,0,0,1-1.473,1.448"
                            transform="translate(-34.378 0)"
                            fill="#838383"
                            stroke="#838383"
                            stroke-width="0.5"
                          />
                        </g>
                      </svg>
                    </span>
                  </Box>
                  <Box className="summary-body">
                    <p>
                      From a guest’s perspective, guests loved the convenience and
                      proximity of the hotel to the airport and the city centre, with
                      many appreciating views. Spectacular architect- designed cottage
                      with stunning views of mountain peaks, the fjord straight from the
                      edge of the bed.Here you just sit back and gaze out on the horizon
                      or up to the starry sky and let your mind wander where you want to
                      go.
                      <span
                        className="see-more"
                      >
                        …See more
                      </span>
                    </p>
                  </Box>
                  <Box onClick={handleClick} className="summary-footer">
                    <a style={{ textDecoration: "none", cursor: 'pointer' }}>
                      <p >Show {property.reviews} Verified Reviews</p>
                    </a>
                  </Box>


                </Box>

                {showReviews && (
                  <Box sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 10,
                  }}>
                    <Reviews setShowReviews={setShowReviews} property={property} />
                  </Box>
                )
                }

              </Box>
            </Grid>
            <Grid size={4}>
              <Box className="amenites-section">
                <Box className="heading3">
                  <p>TOP AMENITIES</p>
                </Box>
                <Box className="about-villa">
                  {amenities.map((amenity, index) => (
                    <Box key={index} className="amenity-item">
                      <Box className="icon">
                        <img src={amenity.icon} alt={amenity.label} />
                      </Box>
                      <Box className="icon-text">
                        <Typography className="icon-text-label">
                          {amenity.label}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box className="section33">
                  <p>Show All Amenities</p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

      </Box >

    </>
  );
}

export default AboutVilla;

