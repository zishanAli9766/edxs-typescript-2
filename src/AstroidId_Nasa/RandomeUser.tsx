import { Box, Button, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';

const RandomeUser = () => {

    const location = useLocation();
    const data: any = location.state;
    const navigate = useNavigate();


    return (
        <Grid container justifyContent="center" mt={5}>
            <Paper>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} gutterBottom>
                        name :<Box color="red" display="inline">{data?.name}</Box>
                    </Typography>

                    <Typography variant="h5" component="div">
                        {data?.nasa_jpl_url}nasa_jpl_url :
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} variant="h5" color="text.secondary">
                        is_potentially_hazardous_asteroid :
                        <Box color="red" display="inline">{`${data?.is_potentially_hazardous_asteroid}`}</Box>
                    </Typography>

                    <Typography variant="h6" color="text.primary">
                        ID:   <Box color="red" display="inline">{data?.id}</Box>
                    </Typography>
                    <CardActions>
                        <Button size="small" variant="contained" color='secondary' onClick={() => navigate("/")}>Back </Button>
                    </CardActions>
                </CardContent>
            </Paper>

        </Grid>
    )
}

export default RandomeUser



















  {/* <Routes>
        <Route path='/' element={<AstroidUsers />} />
        <Route path='/RandomeUser' element={<RandomeUser />} />
      </Routes> */}
