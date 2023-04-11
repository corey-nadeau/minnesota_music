import Ticketmaster from '../assets/images/Ticketmaster.jpg'
import Spotify from '../assets/images/spotify.jpg'
import Merchbar from '../assets/images/merchbar.jpg'

function Shop() {
  return (
    <div id='Shop'>
      <section className="flex flex-row justify-center bg-gradient-to-r from-black to-gray-600" id="shop">
        <div className="flex flex-row justify-center double-fade">
            <div className="grid grid-cols-3 ">
                <div className="p-36 text-white text-center">
                    <a href="https://www.merchbar.com/" target="_blank"><img src={Merchbar} alt="merchbar" className="rounded-full border-2 p-2 hover:border-red-500 hover:blur-sm"></img>
                    <h3 className="pt-8 text-4xl hover:text-red-500">Merch from Merchbar</h3></a>
                </div>
                <div className="p-36 text-white text-center">
                    <a href="https://www.ticketmaster.com/" target="_blank"><img src={Ticketmaster} alt="ticketmaster" className="rounded-full border-2 p-2 hover:border-red-500 hover:blur-sm"></img>
                    <h3 className="pt-8 text-4xl hover:text-red-500">Tickets from Ticketmaster</h3></a>
                </div>
                <div className="p-36 text-white text-center">
                    <a href="https://open.spotify.com/" target="_blank"><img src={Spotify} alt="spotify" className="rounded-full border-2 p-2 hover:border-red-500 hover:blur-sm"></img>
                    <h3 className="pt-8 text-4xl hover:text-red-500">Check them out on Spotify</h3></a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Shop
