import {
  Box,
  Button,
  ButtonGroup,
  Card,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./Login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../assets/flame.png";
import { useNavigate } from "react-router-dom";
import useMobile from "../customHooks/useMobile";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../store/userSlice";

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

const LoginFormValidationSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Password can not empty."),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useMobile(window.innerWidth);

  const handleLogin = async (values: any) => {
    const res = await axios("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        application: "json",
        testHeader: "test",
      },
      data: {
        email: values.email,
        password: values.password,
      },
    });
    if (res.status === 200) {
      navigate("/");
      console.log("data:", res.data);
      dispatch(setIsLoggedIn(true));
    }
  };

  const { handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
    validationSchema: LoginFormValidationSchema,
  });

  return (
    <Box className={styles.loginCard}>
      <StyledCard elevation={isMobile ? 0 : 10} $isMobile={isMobile}>
        <Box display="flex" justifyContent="center" my={3}>
          <StyledImage src={Logo} alt="company-logo" />
        </Box>
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            my={2}
          >
            <Box mt={1}>
              <Box mb={2}>
                <TextField
                  id="login-email"
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <Typography color="error">{errors.email}</Typography>
                )}
              </Box>
              <Box>
                <TextField
                  id="login-password"
                  label="Password"
                  variant="outlined"
                  name="password"
                  type="password"
                  onChange={handleChange}
                />
                {errors.password && touched.password && (
                  <Typography color="error">{errors.password}</Typography>
                )}
              </Box>
            </Box>
          </Box>
          <StyledButtonGroup>
            <Button variant="contained" onClick={() => navigate("/")}>
              Cancel
            </Button>
            <Box mx={1} />
            <Button variant="contained" type="submit">
              Login
            </Button>
          </StyledButtonGroup>
        </form>
      </StyledCard>
    </Box>
  );
};

export default Login;
