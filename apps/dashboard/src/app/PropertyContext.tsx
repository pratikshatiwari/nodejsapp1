import React, { createContext, useContext, useState, ReactNode } from 'react';
import Icon1 from "../assets/1164.svg";
import Icon2 from "../assets/1165.svg";
import Icon3 from "../assets/1084.svg";
import Icon4 from "../assets/1167.svg";
import image from "../assets/image.png";
// import ii1 from '../assets/jonathan-gallegos-_vA2q0-NroU-unsplash@2x.png';
// import ii2 from '../assets/davide-ragusa-1PHDS-PFtcM-unsplash@2x.png';
import i1 from "../assets/i1.svg";
import i2 from "../assets/i2.svg";
import i3 from "../assets/i3.svg";
import i4 from "../assets/i4.svg";
import i5 from "../assets/i5.svg";
import i6 from "../assets/i6.svg";
import i7 from "../assets/i7.svg";
import i8 from "../assets/i8.svg";
import r0 from "../assets/r0.svg";
import r1 from "../assets/r1.svg";
import r2 from "../assets/r2.svg";
import r3 from "../assets/r3.svg";
import r4 from "../assets/r4.svg";
import r5 from "../assets/r5.svg";
import r6 from "../assets/r6.svg";
import AskQuestion from './PropertyDetails/AskQuestion'
import ii1 from '../assets/Image01.png';
import ii2 from '../assets/Image02.png';
import ii3 from '../assets/Image03.png';
import ii4 from '../assets/Image04.png';
import ii5 from '../assets/Image05.png';
import ii6 from '../assets/Image06.png';
import ii7 from '../assets/Image07.png';
import ii8 from '../assets/Image08.png';


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
  detail: string;

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
  
type Property = {
  images: string[];
  price: number;
  name: string;
  location: string;
  rating: number;
  guestFav: boolean;
  amenities: string[];
  manager: ManagerDetails;
  awards: Award[];
  checkin: string; checkout: string; reviews: number, reviewsIcons: IconItem[];
  verifiedReviews : VerifiedReviews[];
  questions : askQuestion[];
};

interface PropertyContextType {
  properties: Property[];
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [properties, setProperties] = useState<Property[]>([
    {
      images: [ii1,ii8, ii7],
      price: 1990,
      name: "Hassler Villa",
      location: "Roma RM, Italy",
      rating: 5,
      guestFav: true,
      amenities: ['car', 'bath', 'drinks', 'wifi', 'gym', 'pool', 'spa', 'restaurant', 'bar', 'parking', 'laundry', 'room-service'],
      manager: {
        name: "Jack KK",
        role: "Property Manager",
        image: "path_to_manager_image.jpg",
        reviews: 73,
        rating: 4.88,
        yearExperience: 12,
        about: 'Jack is experienced, highly rated Property Manager who are committed to providing great stays for guests.Jack is experienced, highly rated Property Manager who are committed to providing great stays for guests.'
        , detail: 'Response rate: 97% Responds within an hour'
      },
      awards: [
        {
          icon: Icon1,
          title: "Award best family vacation destination",
          description: "Year 2022",
        },
        {
          icon: Icon2,
          title: "Great location",
          description: "90% of guests gave the location a 5-star rating.",
        },
        {
          icon: Icon3,
          title: "Free cancellation before 11 Aug",
          description: "Get a full refund if you change your mind.",
        },
        {
          icon: Icon4,
          title: "For beach adventures and life-size Legos",
          description: "Nature’s own beauty",
        },
      ]
      , checkin: 'sept 12 2024',
      checkout: 'sept 13 2024',
      reviews: 4004,
      reviewsIcons: [
        { icons: i1, label: "Cleanliness", rating: 4.9, star: r0 },
        { icons: i2, label: "Food", rating: 4.7, star: r1 },
        { icons: i3, label: "Accuracy", rating: 4.6, star: r2 },
        { icons: i4, label: "Accuracy", rating: 4.8, star: r3 },
        { icons: i5, label: "Service", rating: 4.7, star: r4 },
        { icons: i6, label: "Staff", rating: 4.8, star: r5 },
        { icons: i7, label: "Location", rating: 5, star: r6 },
        { icons: i8, label: "Value", rating: 5, star: r4 },
      ],
      verifiedReviews: [
        {
          rating: 4.5,
          comment: 'Value',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.0,
          comment: 'Communication',
          good_review: 'Reasonably priced',
          bad_review: 'I paid for the premium room and found out it did not include the complimentary breakfast that was advertised',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.5,
          comment: 'Accuracy',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'BUSINESS TRAVELER'
        },

      ]
      ,
      questions : [
        {
            question : "Does the hotel have any complimentary activities or water sports?",
            customer_name : "Mr. Josef Joe"
        },
        {
          question : "What are the restaurant hours and availability during our program dates?",
            customer_name : "Lina K"
        }
      ]
    },
    {
      images: [ii2, ii6, ii5],
      price: 2300,
      reviews: 40040,
      name: "Paradise Villa",
      location: "Roma RM, Italy",
      rating: 4, guestFav: false,
      amenities: ['car', 'bath', 'drinks', 'wifi', 'gym', 'pool', 'spa', 'restaurant'],
      manager: {
        name: "Jack K",
        role: "Property Manager",
        image: "path_to_manager_image.jpg",
        reviews: 73,
        rating: 4.88,
        yearExperience: 13,
        about: ' who are committed to providing great stays for guests.'
        , detail: 'Response rate: 97% Responds within an hour'
      }, awards: [
        {
          icon: Icon1,
          title: "Award best family vacation destination",
          description: "Year 2022",
        },
        {
          icon: Icon2,
          title: "Great location",
          description: "90% of guests gave the location a 5-star rating.",
        },
        {
          icon: Icon3,
          title: "Free cancellation before 11 Aug",
          description: "Get a full refund if you change your mind.",
        },
        {
          icon: Icon4,
          title: "For beach adventures and life-size Legos",
          description: "Nature’s own beauty",
        },
      ], checkin: 'sept 12 2024',
      checkout: 'sept 13 2024',
      reviewsIcons: [
        { icons: i1, label: "Cleanliness", rating: 4.9, star: r0 },
        { icons: i2, label: "Food", rating: 4.7, star: r1 },
        { icons: i3, label: "Accuracy", rating: 4.6, star: r2 },
        { icons: i4, label: "Accuracy", rating: 4.8, star: r3 },
        { icons: i5, label: "Service", rating: 4.7, star: r4 },
        { icons: i6, label: "Staff", rating: 4.8, star: r5 },
        { icons: i7, label: "Location", rating: 5, star: r6 },
        { icons: i8, label: "Value", rating: 5, star: r4 },
      ],  verifiedReviews: [
        {
          rating: 4.5,
          comment: 'Value',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.0,
          comment: 'Communication',
          good_review: 'Reasonably priced',
          bad_review: 'I paid for the premium room and found out it did not include the complimentary breakfast that was advertised',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.5,
          comment: 'Accuracy',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'BUSINESS TRAVELER'
        },

      ],
      questions : [
        {
            question : "Does the hotel have any complimentary activities or water sports?",
            customer_name : "Mr. Josef Joe"
        },
        {
          question : "What are the restaurant hours and availability during our program dates?",
            customer_name : "Lina K"
        }
      ]
    },
    {
      images: [ii3, ii8, ii6],
      price: 3300,
      name: "J.K. Place Roma",
      location: "Roma RM, Italy",
      rating: 3, guestFav: true,
      amenities: ['car', 'bath', 'drinks', 'wifi', 'gym'],
      manager: {
        name: "Jack K",
        role: "Property Manager",
        image: "path_to_manager_image.jpg",
        reviews: 73,
        rating: 4.88,
        yearExperience: 14,
        about: ' highly rated Property Manager'
        , detail: 'Response rate: 97% Responds within an hour'
      },
      awards: [
        {
          icon: Icon1,
          title: "Award best family vacation destination",
          description: "Year 2022",
        },
        {
          icon: Icon2,
          title: "Great location",
          description: "90% of guests gave the location a 5-star rating.",
        },
        {
          icon: Icon3,
          title: "Free cancellation before 11 Aug",
          description: "Get a full refund if you change your mind.",
        },
        // {
        //     icon: Icon4,
        //     title: "For beach adventures and life-size Legos",
        //     description: "Nature’s own beauty",
        // },
      ]
      , checkin: 'sept 12 2024',
      checkout: 'sept 13 2024',
      reviews: 7004,
      reviewsIcons: [
        { icons: i1, label: "Cleanliness", rating: 4.9, star: r0 },
        { icons: i2, label: "Food", rating: 4.7, star: r1 },
        { icons: i3, label: "Accuracy", rating: 4.6, star: r2 },
        { icons: i4, label: "Accuracy", rating: 4.8, star: r3 },
        { icons: i5, label: "Service", rating: 4.7, star: r4 },
        { icons: i6, label: "Staff", rating: 4.8, star: r5 },
        { icons: i7, label: "Location", rating: 5, star: r6 },
        { icons: i8, label: "Value", rating: 5, star: r4 },
      ],
      verifiedReviews: [
        {
          rating: 4.5,
          comment: 'Value',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.0,
          comment: 'Communication',
          good_review: 'Reasonably priced',
          bad_review: 'I paid for the premium room and found out it did not include the complimentary breakfast that was advertised',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.5,
          comment: 'Accuracy',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'BUSINESS TRAVELER'
        },

      ],
      questions : [
        {
            question : "Does the hotel have any complimentary activities or water sports?",
            customer_name : "Mr. Josef Joe"
        },
        {
          question : "What are the restaurant hours and availability during our program dates?",
            customer_name : "Lina K"
        }
      ]
    },
    {
      images: [ii4, ii2, ii3],
      price: 4180,
      name: "J.K. Place Roma",
      location: "Roma RM, Italy",
      rating: 3, guestFav: false,
      amenities: ['car', 'bath', 'drinks', 'wifi', 'gym'],
      manager: {
        name: "Jack K",
        role: "Property Manager",
        image: "path_to_manager_image.jpg",
        reviews: 73,
        rating: 4.88,
        yearExperience: 10, about: ' who are committed to providing great stays for guests.'
        , detail: 'Response rate: 97% Responds within an hour'

        ,
      },
      awards: [
        {
          icon: Icon1,
          title: "Award best family vacation destination",
          description: "Year 2022",
        },
        {
          icon: Icon2,
          title: "Great location",
          description: "90% of guests gave the location a 5-star rating.",
        },
        {
          icon: Icon3,
          title: "Free cancellation before 11 Aug",
          description: "Get a full refund if you change your mind.",
        },
        {
          icon: Icon4,
          title: "For beach adventures and life-size Legos",
          description: "Nature’s own beauty",
        },
      ], checkin: 'sept 12 2024',
      checkout: 'sept 13 2024',
      reviews: 40040,
      reviewsIcons: [
        { icons: i1, label: "Cleanliness", rating: 4.9, star: r0 },
        { icons: i2, label: "Food", rating: 4.7, star: r1 },
        { icons: i3, label: "Accuracy", rating: 4.6, star: r2 },
        { icons: i4, label: "Accuracy", rating: 4.8, star: r3 },
        { icons: i5, label: "Service", rating: 4.7, star: r4 },
        { icons: i6, label: "Staff", rating: 4.8, star: r5 },
        { icons: i7, label: "Location", rating: 5, star: r6 },
        { icons: i8, label: "Value", rating: 5, star: r4 },
      ],
      verifiedReviews: [
        {
          rating: 4.5,
          comment: 'Value',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.0,
          comment: 'Communication',
          good_review: 'Reasonably priced',
          bad_review: 'I paid for the premium room and found out it did not include the complimentary breakfast that was advertised',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.5,
          comment: 'Accuracy',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'BUSINESS TRAVELER'
        },
      ],
      questions : [
        {
            question : "Does the hotel have any complimentary activities or water sports?",
            customer_name : "Mr. Josef Joe"
        },
        {
          question : "What are the restaurant hours and availability during our program dates?",
            customer_name : "Lina K"
        }
      ]
    },
    {
      images: [ii5, ii4, ii3],
      price: 4516,
      name: "Paradiso Grande",
      location: "Roma RM, Italy",
      rating: 1, guestFav: true,
      amenities: ['car', 'bath', 'drinks', 'wifi', 'gym'],
      questions : [
        {
            question : "Does the hotel have any complimentary activities or water sports?",
            customer_name : "Mr. Josef Joe"
        },
        {
          question : "What are the restaurant hours and availability during our program dates?",
            customer_name : "Lina K"
        }
      ],
      manager: {
        name: "Jack K",
        role: "Property Manager",
        image: "path_to_manager_image.jpg",
        reviews: 73,
        rating: 4.88,
        yearExperience: 11, about: ' who are committed to providing great stays for guests.'

        , detail: 'Response rate: 97% Responds within an hour'
      },
      awards: [
        {
          icon: Icon1,
          title: "Award best family vacation destination",
          description: "Year 2022",
        },
        {
          icon: Icon2,
          title: "Great location",
          description: "90% of guests gave the location a 5-star rating.",
        },
        // {
        //     icon: Icon3,
        //     title: "Free cancellation before 11 Aug",
        //     description: "Get a full refund if you change your mind.",
        // },
        {
          icon: Icon4,
          title: "For beach adventures and life-size Legos",
          description: "Nature’s own beauty",
        },
      ]
      ,
      checkin: 'sept 12 2024',
      checkout: 'sept 13 2024',
      reviews: 440,
      reviewsIcons: [
        { icons: i1, label: "Cleanliness", rating: 4.9, star: r0 },
        { icons: i2, label: "Food", rating: 4.7, star: r1 },
        { icons: i3, label: "Accuracy", rating: 4.6, star: r2 },
        { icons: i4, label: "Accuracy", rating: 4.8, star: r3 },
        { icons: i5, label: "Service", rating: 4.7, star: r4 },
        { icons: i6, label: "Staff", rating: 4.8, star: r5 },
        { icons: i7, label: "Location", rating: 5, star: r6 },
        { icons: i8, label: "Value", rating: 5, star: r4 },
      ],
      verifiedReviews: [
        {


          rating: 4.5,
          comment: 'Value',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.0,
          comment: 'Communication',
          good_review: 'Reasonably priced',
          bad_review: 'I paid for the premium room and found out it did not include the complimentary breakfast that was advertised',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.5,
          comment: 'Accuracy',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'BUSINESS TRAVELER'
        },

      ]
    },
    {
      images: [ii6, ii3, ii1],
      price: 4133,
      name: "Belmont Pleasures",
      location: "Roma RM, Italy",
      rating: 5, guestFav: false,
      amenities: ['car', 'bath', 'drinks', 'wifi', 'gym'],
      questions : [
        {
            question : "Does the hotel have any complimentary activities or water sports?",
            customer_name : "Mr. Josef Joe"
        },
        {
          question : "What are the restaurant hours and availability during our program dates?",
            customer_name : "Lina K"
        }
      ],
      manager: {
        name: "Jack K",
        role: "Property Manager",
        image: "path_to_manager_image.jpg",
        reviews: 73,
        rating: 4.88,
        yearExperience: 12, about: ' who are committed to providing great stays for guests.'
        , detail: 'Response rate: 97% Responds within an hour'
      },
      awards: [
        {
          icon: Icon1,
          title: "Award best family vacation destination",
          description: "Year 2022",
        },
        {
          icon: Icon2,
          title: "Great location",
          description: "90% of guests gave the location a 5-star rating.",
        },
        {
          icon: Icon3,
          title: "Free cancellation before 11 Aug",
          description: "Get a full refund if you change your mind.",
        },
        {
          icon: Icon4,
          title: "For beach adventures and life-size Legos",
          description: "Nature’s own beauty",
        },
      ]
      , checkin: 'sept 12 2024',
      checkout: 'sept 13 2024',
      reviews: 9004,
      reviewsIcons: [
        { icons: i1, label: "Cleanliness", rating: 4.9, star: r0 },
        { icons: i2, label: "Food", rating: 4.7, star: r1 },
        { icons: i3, label: "Accuracy", rating: 4.6, star: r2 },
        { icons: i4, label: "Accuracy", rating: 4.8, star: r3 },
        { icons: i5, label: "Service", rating: 4.7, star: r4 },
        { icons: i6, label: "Staff", rating: 4.8, star: r5 },
        { icons: i7, label: "Location", rating: 5, star: r6 },
        { icons: i8, label: "Value", rating: 5, star: r4 },
      ],
      verifiedReviews: [
        {
          rating: 4.5,
          comment: 'Value',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.0,
          comment: 'Communication',
          good_review: 'Reasonably priced',
          bad_review: 'I paid for the premium room and found out it did not include the complimentary breakfast that was advertised',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.5,
          comment: 'Accuracy',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'BUSINESS TRAVELER'
        },

      ]
    },
    {
      images: [ii7, ii3, ii2],
      price: 6115,
      name: "Zakopane",
      location: "Roma RM, Italy",
      rating: 1, guestFav: false,
      amenities: ['car', 'bath', 'drinks', 'wifi', 'gym'],
      questions : [
        {
            question : "Does the hotel have any complimentary activities or water sports?",
            customer_name : "Mr. Josef Joe"
        },
        {
          question : "What are the restaurant hours and availability during our program dates?",
            customer_name : "Lina K"
        }
      ],
      manager: {
        name: "Jack K",
        role: "Property Manager",
        image: "path_to_manager_image.jpg",
        reviews: 73,
        rating: 4.88,
        yearExperience: 9, about: ' who are committed to providing great stays for guests.'
        , detail: 'Response rate: 97% Responds within an hour'
      },
      awards: [
        {
          icon: Icon1,
          title: "Award best family vacation destination",
          description: "Year 2022",
        },
        {
          icon: Icon2,
          title: "Great location",
          description: "90% of guests gave the location a 5-star rating.",
        },
        // {
        //     icon: Icon3,
        //     title: "Free cancellation before 11 Aug",
        //     description: "Get a full refund if you change your mind.",
        // },
        {
          icon: Icon4,
          title: "For beach adventures and life-size Legos",
          description: "Nature’s own beauty",
        },
      ]
      , checkin: 'sept 12 2024',
      checkout: 'sept 13 2024',
      reviews: 10040,
      reviewsIcons: [
        { icons: i1, label: "Cleanliness", rating: 4.9, star: r0 },
        { icons: i2, label: "Food", rating: 4.7, star: r1 },
        { icons: i3, label: "Accuracy", rating: 4.6, star: r2 },
        { icons: i4, label: "Accuracy", rating: 4.8, star: r3 },
        { icons: i5, label: "Service", rating: 4.7, star: r4 },
        { icons: i6, label: "Staff", rating: 4.8, star: r5 },
        { icons: i7, label: "Location", rating: 5, star: r6 },
        { icons: i8, label: "Value", rating: 5, star: r4 },
      ],
      verifiedReviews: [
        {
          rating: 4.5,
          comment: 'Value',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.0,
          comment: 'Communication',
          good_review: 'Reasonably priced',
          bad_review: 'I paid for the premium room and found out it did not include the complimentary breakfast that was advertised',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.5,
          comment: 'Accuracy',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'BUSINESS TRAVELER'
        },

      ]
    },
    {
      images: [ii8, ii2, ii4],
      price: 5160,
      name: "Manhattan,Kansas",
      location: "Roma RM, Italy",
      rating: 2, guestFav: true,
      amenities: ['car', 'bath', 'drinks', 'wifi', 'gym'],
      questions : [
        {
            question : "Does the hotel have any complimentary activities or water sports?",
            customer_name : "Mr. Josef Joe"
        },
        {
          question : "What are the restaurant hours and availability during our program dates?",
            customer_name : "Lina K"
        }
      ],
      manager: {
        name: "Jack K",
        role: "Property Manager",
        image: "path_to_manager_image.jpg",
        reviews: 73,
        rating: 4.88,
        yearExperience: 11, about: ' who are committed to providing great stays for guests.'
        , detail: 'Response rate: 97% Responds within an hour'
      },
      awards: [
        {
          icon: Icon1,
          title: "Award best family vacation destination",
          description: "Year 2022",
        },
        {
          icon: Icon2,
          title: "Great location",
          description: "90% of guests gave the location a 5-star rating.",
        },
        {
          icon: Icon3,
          title: "Free cancellation before 11 Aug",
          description: "Get a full refund if you change your mind.",
        },
        {
          icon: Icon4,
          title: "For beach adventures and life-size Legos",
          description: "Nature’s own beauty",
        },
      ]
      , checkin: 'sept 12 2024',
      checkout: 'sept 13 2024',
      reviews: 70040,
      reviewsIcons: [
        { icons: i1, label: "Cleanliness", rating: 4.9, star: r0 },
        { icons: i2, label: "Food", rating: 4.7, star: r1 },
        { icons: i3, label: "Accuracy", rating: 4.6, star: r2 },
        { icons: i4, label: "Accuracy", rating: 4.8, star: r3 },
        { icons: i5, label: "Service", rating: 4.7, star: r4 },
        { icons: i6, label: "Staff", rating: 4.8, star: r5 },
        { icons: i7, label: "Location", rating: 5, star: r6 },
        { icons: i8, label: "Value", rating: 5, star: r4 },
      ],  verifiedReviews: [
        {
          rating: 4.5,
          comment: 'Value',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.0,
          comment: 'Communication',
          good_review: 'Reasonably priced',
          bad_review: 'I paid for the premium room and found out it did not include the complimentary breakfast that was advertised',
          date: 'Jul 2024',
          type: 'Traveling as Couple'
        },
        {
          rating: 4.5,
          comment: 'Accuracy',
          good_review: 'leaving',
          bad_review: 'guest services',
          date: 'Jul 2024',
          type: 'BUSINESS TRAVELER'
        },

      ]
    },
  ]);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};


export const usePropertyContext = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('usePropertyContext must be used within a PropertyProvider');
  }
  return context;
};