import { Box, Button, Card } from "@mui/material";
import styles from "./Login.module.scss";
import styled from "@emotion/styled";

const StyledCard = styled(Card)`
  height: 450px;
  width: 400px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 25px;
`;

const Login = () => {
  return (
    <Box className={styles.loginCard}>
      <StyledCard>
        <Box>Logo</Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          my={2}
        >
          <StyledButton variant="contained">Login</StyledButton>
        </Box>
      </StyledCard>
    </Box>
  );
};

export default Login;
