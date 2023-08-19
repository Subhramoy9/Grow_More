
import {model} from './models'
import axios from 'axios'
import { useState , useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import Subsec from './Subsec';

const Page2 = () => {
    const [data,setData] = useState<model[]>([]);

    useEffect(() => {
        fetchData();
      }, []);     // The data is fetched whenever the page is refreshed

async function fetchData(){
    try{
        const res = await axios.get<model[]>('https://jsonplaceholder.typicode.com/posts');     // calling the API 
        setData(res.data);
        console.log(data);

    }catch(err){
        console.log(err);
    }
}

// populating the columns of the table
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'userId',
    headerName: 'User ID',
    width: 150,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Body',
    type: 'string',
    width: 110,
    editable: true,
  }

];

 

  return (
   <>
        <Box sx={{ height: 400, width: '100%' }}>
      {data && <DataGrid
        rows={data}     // populating the rows
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />}
    </Box>
    {/* Importing the collapsed components */}
    <Subsec/>  
   </>
  )
}

export default Page2