// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DealCard } from './deal-card';
import styles from './app.module.scss';
import Grid from '@mui/material/Grid2';
import mark from '../../assets/mark.png';

interface DealData {
  imageSrc: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  currency: string;
}

const dealsData: DealData[] = [
  {
    imageSrc: mark,
    title: 'Royal Paradise',
    location: 'Colosseum Termini Station',
    rating: 5.1,
    reviewCount: 1154,
    price: 7534,
    currency: '$',
  },
  {
    imageSrc: mark,
    title: 'King Palace',
    location: 'Colosseum Termini Station',
    rating: 5.1,
    reviewCount: 1154,
    price: 6034,
    currency: '$',
  },
];

export function Deal() {
  return (
    <div style={{ paddingBottom: 80 }}>
    <Grid container spacing={4.375} sx={{ marginTop: '3rem' }}>
      {dealsData.map((d, index) => (
        <Grid size={{ xs: 12, sm: 6 }}key={index}>
          <DealCard {...d} />
        </Grid>
      ))}
    </Grid>
  </div>
  );
}

export default Deal;
