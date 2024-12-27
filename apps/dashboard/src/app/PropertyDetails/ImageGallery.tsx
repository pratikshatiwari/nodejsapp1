import React from "react";
import styles from "./ImageGallery.module.scss";

import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Icon5 from "../../assets/icon5.svg";
import showall from '../../assets/showallphoto.png';
import share_icon from '../../assets/share_icon.svg';
import share_icon1 from '../../assets/ic-actions-heart (2).svg';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const firstThreeImages = images.slice(0, 3);
    return (
        <Container maxWidth="xl" className={styles.FullContainer}>
            <Box className={styles.heading}>
                <Typography  variant = "h5" className="left-text">
                    PANORAMIC CABIN RIGHT BY THE TIBER!
                </Typography>
                <Box className={styles.righttext}>
                    <Box className={styles.sharesection}>
                        <img src={share_icon} alt="share_icon" />
            
                        <span>Share</span>
                    </Box>
                    <Box className={styles.likesection}>
                    <img src={share_icon1} alt="share_icon" />
                        <span>Like</span>
                    </Box>
                </Box>
            </Box>

            <Box className={styles.container}>
                {firstThreeImages.map((image, index) => (
                    <Box key={index} className={styles.cardContainer}>
                        <Card className={styles.card}>
                            <CardMedia
                                component="img"
                                image={image}
                                alt={`Gallery Image ${index + 1}`}
                                className={styles.cardMedia}
                            />
                            <img src={Icon5} alt="icon" className={styles.icon} />
                            {index === 2 && (
                                <Box className={styles.imageNameOverlay}>
                                    <Typography variant="body2">
                                        <img src={showall} alt="Show all" />
                                    </Typography>
                                </Box>
                            )}
                        </Card>
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default ImageGallery;
