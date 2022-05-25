import {  Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, { FC, useState } from 'react'
import { makeStyles } from "@mui/styles";


const useStyle = makeStyles(() => ({
  TextField :{
    margin :"30px",
  }
}))

const  Todo:FC<any> = () =>{
     const [text,setText] = useState<any>({});
     const [List,setList] = useState<any>([]);
     const [edit, setEdite] = useState<any>(true);
     const [isEdit, setIsEdit] = useState<any>(null)
     const classes = useStyle();
     
   
     console.log("text",text);
     const handleadd = () =>{
         if(!text){

         }else if(text && !edit){
             setList(
                 List.map((item : any)=>{
                     if(item === isEdit){
                         return {...item,
                       title:text.title,
                      description: text.description,
                    status : text.status,}
                     }
                     return item;
                 })
             )
             setEdite(true);
             setText({title : "", description: "",status: ""});
             setIsEdit(null)
         }else{
            setList([...List,text]);
            setText({title : "", description: "",status: ""});
        }
     }
   
    const handledelete = (id : number) =>{
  const del = List.filter((item : any,i :number) => i !== id);
  setList([...del])
    }

    const handleEdit = (item :any) =>{
        let newEditItem = List.find((items : any) =>{
            return items === item;
        });
        setEdite(false);
        setText(newEditItem);
        console.log("newedititem",newEditItem);
        setIsEdit(item);
    }
     

  return (
      <>
    <div>Todo</div>
    <div className="container1">
    
     <div >
    
      <Box>

          <TextField id="standard-basic"  
          className={classes.TextField}
          type="text"
          name='title'
          value={text.title}
          onChange={(e)=> setText({
            ...text,
              title: e.target.value
          })} label="Title" variant="standard" />
      </Box>
         
    
      <Box>
        
          <TextField id="standard-basic" 
           className={classes.TextField}
          type="text"
          name='description'
          value={text.description}
          onChange={(e)=> setText({
            ...text,
            description: e.target.value
        })} label="description" variant="standard" />
        </Box>
     
    
        <Box>
        
          <TextField id="standard-basic"  
           className={classes.TextField}
          type="text"
          name='status'
          value={text.status}
          onChange={(e)=> setText({
            ...text,
            status: e.target.value
        })} label="status" variant="standard" />
        </Box>
          </div>          {
            edit ? <button style={{ marginLeft: 30 }} onClick={handleadd}>Add</button> : <button onClick={handleadd}>Edit</button>
            } 
  

       
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
                    List.map((data :any,id : number)=>{
                        return(
            <TableRow
            key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{data.title}</TableCell>
              <TableCell align="right">{data.description}</TableCell>
              <TableCell align="right">{data.status}</TableCell>
              <TableCell align="right"><Button onClick={()=>handledelete(id)}> Delete</Button></TableCell>
              <TableCell  align="right"><button onClick={()=>handleEdit(data)}>Edits</button></TableCell>
            </TableRow>
           )
          })
      }
        </TableBody>
      </Table>
    </TableContainer>

      </div>
      </>
  )
}

export default Todo