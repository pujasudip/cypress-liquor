import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./Login.module.scss";

const HomeSignUpCard: React.FC = () => {
  return (
    <Box p={2} position="relative">
      <Card sx={{ height: "400px" }}>
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" textAlign="center">
              Test is test
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              textAlign="center"
            >
              Sudip Baral
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        <Box className={styles.centerHorizontal} bottom="100px">
          <Button variant="contained">Sign in</Button>
        </Box>

        <Box className={styles.centerHorizontal} bottom="50px">
          <Link href="#">Create Account</Link>
        </Box>
      </Card>
    </Box>
  );
};

export default HomeSignUpCard;
