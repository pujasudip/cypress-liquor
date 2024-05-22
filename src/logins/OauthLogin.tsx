import { Box, Button, ButtonGroup, Card } from "@mui/material";
import styles from "./Login.module.scss";
import Logo from "../assets/flame.png";
import { useNavigate } from "react-router-dom";
import useMobile from "../customHooks/useMobile";
import styled from "styled-components";

const StyledCard = styled(Card)<{ $isMobile: boolean }>`
  height: ${(props) => (props.$isMobile ? "100vh" : "500px")};
  width: 400px;
  img {
    margin-top: ${(props) => (props.$isMobile ? "100px" : "0")};
  }
`;

const StyledButtonGroup = styled(ButtonGroup)`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const OauthLogin = () => {
  const navigate = useNavigate();
  const isMobile = useMobile(window.innerWidth);

  const handleLogin = async (values: any) => {
    const callbackUrl = "http://localhost:3000";
    const responseType = "code";
    const clientId =
      "646823301532-5bqnf2ifmghdogdaj5jf5if7t2u4gap7.apps.googleusercontent.com";
    const targetUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${callbackUrl}&response_type=${responseType}&scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&
    include_granted_scopes=true`;
    window.location.href = targetUrl;
  };

  return (
    <Box className={styles.loginCard}>
      <StyledCard elevation={isMobile ? 0 : 10} $isMobile={isMobile}>
        <Box display="flex" justifyContent="center" my={3}>
          <StyledImage src={Logo} alt="company-logo" />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          my={2}
        ></Box>
        <StyledButtonGroup>
          <Button variant="contained" onClick={() => navigate("/")}>
            Cancel
          </Button>
          <Box mx={1} />
          <Button variant="contained" type="submit" onClick={handleLogin}>
            Login
          </Button>
        </StyledButtonGroup>
      </StyledCard>
    </Box>
  );
};

export default OauthLogin;
