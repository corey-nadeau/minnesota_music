import  { useState } from 'react';
import { server_calls } from '../api/Wishlist';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import bg2 from '../assets/images/bg2.jpg';
import ConcertTable from '../api/ConcertTable';
import Modal from './Modal'

const columns: GridColDef[] = [
  { field: 'maker', headerName: 'Artist', flex: 1, headerAlign: 'left'},
  { field: 'flavor', headerName: 'Venue', flex: 1, headerAlign: 'left'},
  { field: 'year', headerName: 'Date', flex: 1, headerAlign: 'left'},
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { contactData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])
  const handleOpen = () => {
    setOpen(true)
    }
  const handleClose = () => {
    setOpen(false)
    }
  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 500)
    }

  return (
    <div style={{ backgroundImage: `url(${ bg2 })`}} className=''>
      <Modal id={selectionModel} open={open} onClose={handleClose}/>
        <div className='flex flex-row justify-center pt-44'>
          <button onClick={handleOpen} className='p-3 bg-red-400 text-black m-3 rounded-xl hover:bg-slate-800 hover:text-white ' >Enter New Concert</button>
          <button onClick={handleOpen} className="p-3 bg-red-400 text-black m-3 rounded-xl hover:bg-slate-800 hover:text-white" >Update</button>
          <button onClick={deleteData} className="p-3 bg-red-400 text-black m-3 rounded-xl hover:bg-slate-800 hover:text-white" >Delete Show</button>
        </div>
        <div className={ open ? "hidden" : "container mx-20 my- flex flex-col pl-52"} style={{ height: 680, width: '100%' }}>
          <h2 className="p-3 bg-red-400  text-center text-2xl my-2 mx-20 pl-14 rounded-3xl">My Concert Wishlist<h6 
            className='text-base'>Scroll down to see suggestions for upcoming events!</h6></h2>
          <DataGrid rows={contactData} columns={columns} checkboxSelection={true} onRowSelectionModelChange={ (item:any) => {setSelectionModel(item)}} sx={{m:2, border:2, 
            borderColor:'red', color:'white', borderRadius: 10, p:2, gap:1 }}/>
        </div>
      <ConcertTable/>
    </div>
  )
}

export default DataTable