
import { useForm } from 'react-hook-form'
import { server_calls } from '../api/Wishlist'
import { useDispatch, useStore } from 'react-redux';
import { chooseArtist, chooseVenue, chooseDate } from "../redux/slices/RootSlice";


interface EntryFormProps {
  id?: string[]
}
const EntryForm = (props:EntryFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();
  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.make } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
      } 
    else 
      {
      dispatch(chooseArtist(data.artist));
      dispatch(chooseVenue(data.venue));
      dispatch(chooseDate(data.date));
      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 500);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="artist">Artist</label>
          <input {...register('artist')} name='artist' placeholder="Artist" className="outline w-full m-5 py-1"/>
        </div>
        <div>
          <label htmlFor="venue">Venue</label>
          <input {...register('venue')} name='venue' placeholder="venue" className=" outline w-full m-5 py-1"/>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input {...register('date')} name='date' placeholder="Date" className="outline w-full m-5 py-1"/>
        </div>
        <div className="flex p-1">
          <button className="flex justify-start m-3 bg-black p-2 rounded hover:bg-red-400 text-white">
              Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EntryForm
