import  { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';



const columns: GridColDef[] = [
  { field: 'maker', headerName: 'Artist', flex: 1, headerAlign: 'left', width: 100, cellClassName:'cell' },
  { field: 'flavor', headerName: 'Venue', flex: 1, headerAlign: 'left', width: 100},
  { field: 'year', headerName: 'Date', flex: 1, headerAlign: 'left', width: 100},
 
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
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row justify-center pt-44'>
            <Button onClick={handleOpen} className='p-3 bg-red-400 text-black m-3 rounded-xl hover:bg-slate-800 hover:text-white ' >Enter New Concert</Button>
            <Button onClick={handleOpen} className="p-3 bg-red-400 text-black m-3 rounded-xl hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-red-400 text-black m-3 rounded-xl hover:bg-slate-800 hover:text-white" >Delete Show</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-20 my-5 flex flex-col pl-52"}
          style={{ height: 700, width: '100%' }}
          >
            <h2 className="p-3 bg-red-400 text-black text-center text-2xl my-2 mx-20 pl-14 rounded-3xl">My Concert Wishlist</h2>
            <DataGrid rows={contactData} columns={columns}
              checkboxSelection={true} 
              onRowSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable