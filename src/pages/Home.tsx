import Background from '../assets/images/bg2.jpg'
import ConcertTable from '../components/ConcertTable'
import Shop from '../components/Shop'
import AltSpotify from '../api/AltSpotify'
import Footer from '../components/Footer'





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
          </div>
      </div>
        <div>
{/* Local artist/ spotify */}
          <AltSpotify/>
{/* concert table */}
            <ConcertTable/>
{/* shop */}
          <Shop/>
{/* Footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Home
