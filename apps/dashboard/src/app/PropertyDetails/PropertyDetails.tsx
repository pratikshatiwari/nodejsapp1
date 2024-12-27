import ImageGallery from "./ImageGallery";
import { useLocation } from 'react-router-dom';
import PropertySection from "./PropertySection";
import VacationPage from "./VacationPage";
import AskQuestion from "./AskQuestion";
import Manager from "./Manager";
import AboutVilla from "./AboutVilla";
import reason_icon1 from '../../assets/reason_icon1.svg'
import reason_icon2 from '../../assets/reason_icon2.svg'
import reason_icon3 from '../../assets/reason_icon3.svg'
import { Box, Container, Typography } from "@mui/material";
import MapView from "./MapView";
import { useState } from "react";
import { AddOnActivities, TourCardGrid } from "@ss/common-components";
import RoomSection from "./RoomSection";
import CalendarTable from "./CalenderTable";
import Recommonded from "./Recommonded";
import { Footer } from "@ss/common-components";
import { Header } from '@ss/common-components';
import styles from './PropertyDetail.module.scss';
interface Award {
  icon: string;
  title: string;
  description: string;
}
interface VerifiedReviews {
  rating: number;
  comment: string;
  good_review: string;
  bad_review: string;
  date: string;
  type: string;
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
} interface IconItem {
  icons: string;
  label: string;
  rating: number;
  star: string;
}

interface askQuestion {
  question: string,
  customer_name: string
}
interface Property {
  id: string; facility: string;
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

const reasonsToBook = [
  {
    heading: "PAY LATER AVAILABLE",
    text: "Prepayment isn’t required when you pick a Pay Later room",
    icon: reason_icon1
  },
  {
    heading: "BEST LOCATION",
    text: "Enjoy a premium location near tourist attractions",
    icon: reason_icon2
  },
  {
    heading: "BEST LOCATION",
    text: "Enjoy a premium location near tourist attractions",
    icon: reason_icon3
  },
];



export function PropertyDetailComponent() {
  const [head, setHead] = useState<boolean>(true);

  const location = useLocation();
  const property = location.state?.property as Property;
  if (!property) {
    return <div>Property not found</div>;
  }
  return (
    <Box className={styles.outerbox}>
      <Box>
        <Header showSearch={true} />
        <hr className={styles.hrclass} />
      </Box>
      <Box className={styles.imagegallery}>
        <ImageGallery images={property.images} />
      </Box>
      <PropertySection property={property} />
      <Box className={styles.roomsectionclass}>
      <RoomSection property={property} />
      </Box>
      <CalendarTable />
      <AboutVilla reasonsToBook={reasonsToBook} property={property} />
      <Box className={styles.vacationpageclass}>
      <VacationPage  property={property} />
      </Box>
      <Box className={styles.mapclass}>
        <Typography className={styles.locateUsTitle} variant="h2">
          LOCATE US
        </Typography>
        <MapView />
      </Box>
      <Container maxWidth="xl">
        <Box className={styles.thingsToDoContainer}>
          <Box className={styles.titleContainer}>
            <Typography variant="h2" className={styles.sectionTitle}>
              THINGS TO DO AROUND ROME
            </Typography>
            <Typography variant="h5" className={styles.sectionSubtitle}>
              Experiences provided by Sunnysyde
            </Typography>
          </Box>
          <TourCardGrid />
        </Box>
      </Container>
      <Recommonded />
      <AskQuestion questions={property.questions} />
      <Box className={styles.managerclass}>
      <Manager manager={property.manager} />
      </Box>
      <Footer />
    </Box>
  );
}
export default PropertyDetailComponent;
