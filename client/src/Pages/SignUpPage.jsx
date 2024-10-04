"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility"; // Import VisibilityIcon
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; // Import VisibilityOffIcon
import Lottie from "lottie-react";
import loginAnimation from '../Lottie-animation/loginAnimation.json'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import Preloader from "../Components/Preloader";


const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");
    const [error, setError] = useState(""); //state to store error message
    let navigate = useNavigate();
    // handle Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/customer/register", { name, email, password })

            console.log(response.data);
            toast.success("register sucess");
            navigate('/login')
            // reset form and err msg on success
            setName("");
            setEmail("");
            setPassword("");
            //setPhone("");
            //setAddress("");
            setError("");
        } catch (err) {
            // Check if err.response exists, otherwise set a default error message
            const errorMessage = err.response ? err.response.data.message : "An error occurred. Please try again later.";
            setError(errorMessage);
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (

        <><Preloader />
            <Container maxWidth="xl">
                <Toaster />
                <div style={{ marginTop: "50px", marginBottom: "50px" }}>

                    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <Lottie animationData={loginAnimation} style={{ height: '500px' }} />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >

                            <form onSubmit={handleSubmit} className="w-full max-w-[400px] flex flex-col bg-white dark:bg-[#1e1e1e] p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
                                <Typography variant="h5" align="center" gutterBottom className="dark:text-white">
                                    <h1 className='text-2xl md:text-3xl text-[#060606] font-semibold mb-1 mt-1 dark:text-white'>Book4U</h1>
                                    <h2 className='text-lg md:text-xl mb-1'>Signup</h2>
                                </Typography>
                                <input
                                    placeholder="Name"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    margin="normal"
                                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none dark:text-white dark:border-white"
                                />
                                <input
                                    placeholder="Email"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    margin="normal"
                                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none dark:text-white dark:border-white"
                                />
                                <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                                    <input
                                        placeholder="Password"
                                        variant="outlined"
                                        value={password}
                                        type={showPassword ? "text" : "password"} // Set input type dynamically
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none dark:text-white dark:border-white"
                                    />
                                    <IconButton
                                        onClick={togglePasswordVisibility}
                                        sx={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                                    >
                                        {showPassword ? (
                                            <VisibilityIcon className="text-black dark:text-white" /> // Text color changes based on theme
                                        ) : (
                                            <VisibilityOffIcon className="text-black dark:text-white" />
                                        )}
                                    </IconButton>
                                </Box>
                                {/* <TextField
                                label="Phone"
                                fullWidth
                                variant="outlined"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="Address"
                                fullWidth
                                variant="outlined"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                margin="normal"
                            /> */}
                                {error && <Typography color="error" align="center">{error}</Typography>}
                                <button
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                    sx={{
                                        mt: 2,
                                        "&:hover": { backgroundColor: "#0069d9" },
                                    }}
                                    className="w-full text-white my-2 mt-5 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center dark:bg-white dark:text-black"
                                >
                                    Register
                                </button>
                                <div className='w-full flex items-center justify-center mt-3 mb-3'>
                                    <p className='text-sm text-[#060606] dark:text-white'>
                                        Already have an account?{' '}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className='w-full text-white my-2 font-semibold bg-[#060606] border border-black/40 rounded-md p-4 text-center flex items-center justify-center dark:bg-white dark:text-black'
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </button>
                            </form>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
};

export default SignUpPage;