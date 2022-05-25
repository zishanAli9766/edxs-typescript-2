import { Box, Drawer, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, SelectChangeEvent, Checkbox, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import './Register.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const useStyle = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    },
    Drawer: {
        width: "100px"
    },
    main: {
        width: "380px",
    },
    mains: {
        marginTop: "20px",
    }
}))

const Register: FC<any> = () => {
    const [openDrawer, setOpenDrawer] = useState<any>(false);
    const classes = useStyle();
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <>
            <Drawer
                className={classes.Drawer}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                anchor={"right"}>
                <Box style={{ width: "400px",marginLeft:"22px" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 20 }}
                        onClick={() => setOpenDrawer(false)}
                        className={classes.icon}>
                            
                        <ClearIcon />
                    </IconButton>
                    <h2>Register Now</h2>
                    <Box >
                        <Box>

                            <label > Full Name</label>
                        </Box>
                        <TextField  className={classes.main} style={{height:50}} id="filled-basic" label="Zishan ali" variant="filled" InputProps={{
                endAdornment: (
                  <PersonIcon />
                ),
              }} />

                    </Box>

                    <Box className={classes.mains}>

                        <label style={{ display: "block" }}>Mobile No</label>
                        <TextField className={classes.main} id="filled-basic" label="1234567890" variant="filled" InputProps={{
                endAdornment: (
                  <CallIcon />
                ),
              }} />
                    </Box>
                    <Box className={classes.mains}>

                        <label style={{ display: "block" }}>Email</label>
                        <TextField className={classes.main} id="filled-basic" label="zishanasd@gmail.com" variant="filled" InputProps={{
                endAdornment: (
                  <EmailIcon />
                ),
              }} />
                    </Box>
                    <Box className={classes.mains}>

                        <label style={{ display: "block" }}>PassCode</label>
                        <TextField className={classes.main} id="filled-basic" label="******" variant="filled" />
                    </Box>
                    <Box className={classes.mains}>

                        <label style={{ display: "block" }}>Confirm Passcode</label>
                        <TextField className={classes.main} id="filled-basic" label="******" variant="filled" />
                    </Box>
                    <Box sx={{ marginTop: 2, width: "380px" }} className={classes.mains}>
                        <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Andhra Pradesh</MenuItem>
                                <MenuItem value={2}>Arunachal Pradesh</MenuItem>
                                <MenuItem value={3}>Assam</MenuItem>
                                <MenuItem value={4}>Chhattisgarh</MenuItem>
                                <MenuItem value={5}>Maharashtra</MenuItem>
                                <MenuItem value={6}>Goa</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Checkbox defaultChecked /><span>Agree Terms & Condition</span>
                    <Box>
                        <Button style={{ background: "#E7A356", color: "white",height:"50px" }} className={classes.main}> <h3> Register Now</h3></Button>
                    </Box>

                </Box>
                {/* <h1>asdS</h1> */}
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                className={classes.icon}
            >
                <PersonIcon />
            </IconButton>
        </>
    )
}

export default Register