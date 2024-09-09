'use client'
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
  Box,
  Stack
} from "@mui/material";
import { useState } from "react";
import { auth } from "../firebase/firebase-client";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential : UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log('Logged in user:', user);
      // const token = await user.getIdToken();
      // localStorage.setItem('authToken', token);
          // Redirect to the dashboard or home page
      router.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Stack direction="row" sx={{ height: "100vh" }}>
      {/* Left Side Image */}
      <Box
        sx={{
          flex: { xs: 0, sm: 1, md: 1.4 },
          display: { xs: 'none', sm: 'block' },
          backgroundImage: "url(/images/img-login-page.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Right Side - Login Form */}
      <Box
        sx={{
          flex: { xs: 1, sm: 1, md: 1 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Box
          sx={{
            maxWidth: 400,
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Save password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
              <Link href="/register" variant="body2">
                {"Don't have account? Register"}
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}