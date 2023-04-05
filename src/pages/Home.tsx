import Background from '../assets/images/bg2.jpg'
import ConcertTable from '../components/ConcertTable'
import Shop from '../components/Shop'
import LocalArtists from '../components/LocalArtists'





function Home() {
  return (
    <div>
{/* Landing area */}
      <div 
          style={{ backgroundImage: `url(${ Background })`}} 
          className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
      <div className='flex place-items-center h-screen'>
      </div>
        <div className='w-full'>
          <section>
            <h1 className="showfeats ">Welcome to Minneapolis</h1>
          </section>
{/* Local Artist area */}
        <LocalArtists/>
          </div>
      </div>
      <div>
{/* concert table */}
        <ConcertTable/>
{/* shop */}
        <Shop/>
      </div>
    </div>
  )
}

export default Home
