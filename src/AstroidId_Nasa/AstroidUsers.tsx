import { Box, Button, Grid, TextField } from '@mui/material'
import axios from 'axios';
import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AstroidUsers:FC<any> = () => {

    const [id, setId] = useState<string>("");

    let Api_KEY = "Af3YDh3DtN3uE2kKdzEP1W1nmaco8swEFuQQJlrp";
    const navigate = useNavigate();

    const submitData = async (id: any) => {
        await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${Api_KEY}`)
            .then((res) => {
                const data = res.data;
                console.log("ali", data);
                navigate(`/RandomeUser`, { state: res.data });
            })
            .catch((err) => console.log(err)
            )
    }

    const randomData = async () => {
        const randomItem = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${Api_KEY}`)
            .then((resp) => resp.json())
            .then((data) => data.near_earth_objects);
        const randomId: any = randomItem[Math.floor(Math.random() * randomItem.length)].id;
        submitData(randomId)
    }

    const handleChange = (e: any) => {
        setId(e.target.value);
    }



    return (
        <Grid container justifyContent='center' mt="10%">
            <Grid >
                <TextField value={id} type="number" name="id" onChange={handleChange} placeholder='Enter Asteroid ID' style={{ width: "300px" }} />
                <Box>
                    <Button style={{ marginTop: "20px", width: "300px" }} onClick={randomData} variant="contained" >RandomeUser</Button>
                </Box>
                <Box>
                    <Button style={{ marginTop: "20px", width: "300px" }} color="secondary" onClick={() => submitData(id)} disabled={!id} variant="contained">Submit</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AstroidUsers
