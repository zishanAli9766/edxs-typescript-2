import React, { FC, useEffect, useState } from 'react';
import {
  Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    TextField,
    Typography,
  } from "@mui/material";
  import axios from 'axios';
  import "./SearchData.css"

const SearchData:FC<any> = () =>{

    const [data,setData] = useState<any>([])
    const [dataTemp, setDataTemp] = useState<any>([]);

    useEffect(()=>{
        getData();
    
    },[])

    const getData = () =>{
        axios
        .get("https://fakestoreapi.com/products")
        .then((resp) => {
          setData(resp.data);
          setDataTemp(resp.data);
          console.log(resp.data);
        })
        .catch((err) => {
          console.log("We Got Error : ", JSON.stringify(err));
        });
    }
  

    const handleSearch = ({ target }:{target :any}) => {
        var text = target?.value?.toUpperCase()?.trim();
        if (!text) {
          setData(dataTemp);
          return;
        }
        var tempArr = [];
        tempArr = dataTemp.filter(
          (item : any) =>
            item?.title?.toUpperCase()?.trim()?.includes(text) ||
            item?.description?.toUpperCase()?.trim()?.includes(text)
        );
        setData(tempArr);
      };

    return(
      <>
        <div style={{ width: "100%" }}>
        <div style={{ width: "50%", alignSelf: "center", marginLeft:'25%' }}>
          <h1>Search Screen</h1>
          <TextField
            fullWidth
            id="fullWidth"
            label="Search users"
            variant="outlined"
            onChange={handleSearch}
          />
        </div>
        <div className="cardContainer">
          {data?.map((item :any) => {
            return (
              
              <Card sx={{ maxWidth: 300, margin: "20px" }}>
              <CardActionArea>
                  <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt="green iguana"
                      />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          {item.description}
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
            );
          })}
        </div>
      </div>
      
      </>
      )
}

export default SearchData;