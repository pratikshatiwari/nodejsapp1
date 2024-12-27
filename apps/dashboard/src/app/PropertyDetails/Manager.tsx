import styles from "./Manager.module.scss";
import { Typography, Box, Button, Container } from "@mui/material";
import img1 from "../../assets/profile.jpg";

interface ManagerDetails {
  yearExperience: number;
  name: string;
  role: string;
  image: string;
  reviews: number;
  rating: number;
  about: string;
  detail: string;
}
interface ManagerProps {
  manager: ManagerDetails;
}
function Manager({ manager }: ManagerProps) {
  return (
    <Container maxWidth="xl" className={styles.container}>
    <Box className={styles.head1}>
      <Typography variant='h2' className={styles.headtext}>MEET THE PROPERTY MANAGER</Typography>
    </Box>
  
    <Box className={styles.head2}>
      <Box className={styles.card}>
        <Box className={styles.image1}>
          <img src={img1} alt="" />
        </Box>
        <Box className={styles.profilename}>
          {manager?.name?.length > 0 ? (
            <Box>
              <Typography className={styles["profilename-name"]}>{manager.name}</Typography>
            </Box>
          ) : (
            <Box />
          )}
  
          {manager?.role?.length > 0 ? (
            <Box>
              <Typography className={styles["profilename-role"]}>{manager.role}</Typography>
            </Box>
          ) : (
            <Box />
          )}
        </Box>
  
        {manager?.reviews > 0 ? (
          <Box className={styles.review}>
            <Box>
              <Typography className={styles["review-number"]}>{manager.reviews}</Typography>
            </Box>
            <Box>
              <Typography className={styles["review-text"]}>Review</Typography>
            </Box>
          </Box>
        ) : (
          <Box />
        )}
  
        {manager?.rating > 0 ? (
          <Box className={styles.rating}>
            <Box>
              <Typography className={styles["rating-number"]}>{manager.rating}</Typography>
            </Box>
            <Box>
              <Typography className={styles["rating-text"]}>Rating</Typography>
            </Box>
          </Box>
        ) : (
          <Box />
        )}
  
        {manager?.yearExperience > 0 ? (
          <Box className={styles.year}>
            <Box mr={"1.5625rem"}>
              <Typography className={styles["year-number"]}>{manager.yearExperience}</Typography>
            </Box>
            <Box ml={"1.5625rem"}>
              <Typography className={styles["year-text"]}>Year Experience</Typography>
            </Box>
          </Box>
        ) : (
          <Box />
        )}
      </Box>
  
      <Box className={styles.card1}>
        {manager?.name?.length > 0 ? (
          <Box mt={"1.875rem"}>
            <Typography variant="h2" className={styles["card1-name"]}>{manager.name} is a Property Manager</Typography>
          </Box>
        ) : (
          <Box />
        )}
        {manager?.about?.length > 0 ? (
          <Box>
            <Typography className={styles["card1-about"]}>{manager.about}</Typography>
          </Box>
        ) : (
          <Box />
        )}
  
        {manager?.detail?.length > 0 ? (
          <Box>
            <Typography variant="h2" className={styles["card1-detail-title"]}>Manager Details</Typography>
          </Box>
        ) : (
          <Box />
        )}
  
        <Box>
          <Typography className={styles["card1-detail"]}>{manager.detail}</Typography>
        </Box>
  
          <Button variant="contained" color="primary" size="large" className={styles.btn}>
            Message {manager?.name?.length > 0 ? manager.name : ""}
          </Button>
       
      </Box>
    </Box>
  </Container>
  );
}

export default Manager;
