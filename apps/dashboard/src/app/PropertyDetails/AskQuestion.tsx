import React from "react";
import styles from "./AskQuestion.module.scss"; // Importing as CSS Module
import arrow from "../../assets/downicon.svg";
import { Box, Typography, Button, Container } from "@mui/material";
import icon1 from "../../assets/profileIcon.svg";

interface AskQuestionProps {
  questions: {
    question: string;
    customer_name: string;
  }[];
}

const AskQuestion: React.FC<AskQuestionProps> = ({ questions }) => {
  return (
    <Container maxWidth="xl">
      <Box className={styles.head}>
        <Box className={styles.heading}>
          <Typography variant="h2" className={styles.title}>
            ASK A QUESTION
          </Typography>
        </Box>

        <Box className={styles.questionsList}>
          {questions.map((q, index) => (
            <Box key={index} className={styles.commonheading}>
              <Box className={styles.section}>
                <Typography variant="body2" className={styles.questionText}>
                  {q.question}
                </Typography>
                <Button className={styles.btn11}>
                  <img src={arrow} alt="arrow icon" />
                </Button>
              </Box>
              <hr className={styles.divider} />
              <Box className={styles.section}>
                <Box className={styles.img}>
                  <img src={icon1} alt="profile icon" />
                </Box>
                <Typography className={styles.customerName}>
                  {q.customer_name}
                </Typography>
                <Typography className={styles.customerLabel}>
                  - Customer
                </Typography>
                <Button className={styles.answerButton}>Answer now</Button>
              </Box>
            </Box>
          ))}
        </Box>

        <Box className={styles.heading3}>
          <Box className={styles.bb1}>
            <Typography className={styles.questionPrompt}>Have a question?</Typography>
          </Box>
          <Box className={styles.bb2}>
            <Typography className={styles.answerPrompt}>Ask to get an answer!</Typography>
          </Box>
          <Box className={styles.bb3}>
            <Button className={styles.askButton}>Ask now</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AskQuestion;
