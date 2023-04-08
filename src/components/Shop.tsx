import Ticketmaster from '../assets/images/Ticketmaster.jpg'
import Spotify from '../assets/images/spotify.jpg'
import Merchbar from '../assets/images/merchbar.jpg'

function Shop() {
  return (
    <div>
      <section className="shop flex flex-row justify-center bg-gradient-to-r from-black to-gray-600" id="shop">
        <div className="wrap-container flex flex-row justify-center double-fade">
            <div className="wrapper grid grid-cols-3 ">
                <div className="box p-36 text-white text-center">
                    <img src={Merchbar} alt="bob dylan the times" className="grid-image rounded-full"></img>
                    <a href="https://www.merchbar.com/" target="_blank"><h3 className="grid-text pt-8 text-4xl hover:text-blue-600">Merch from Merchbar</h3></a>
                </div>
                <div className="box p-36 text-white text-center">
                    <img src={Ticketmaster} alt="prince purple" className="grid-image rounded-full"></img>
                    <a href="https://www.ticketmaster.com/" target="_blank"><h3 className="grid-text pt-8 text-4xl hover:text-blue-600">Tickets from Ticketmaster</h3></a>
                </div>
                <div className="box p-36 text-white text-center">
                    <img src={Spotify} alt="yung gravy oops" className="grid-image rounded-full"></img>
                    <a href="https://open.spotify.com/" target="_blank"><h3 className="grid-text pt-8 text-4xl hover:text-blue-600">Music from Spotify</h3></a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Shop
