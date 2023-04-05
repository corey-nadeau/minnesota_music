import React from 'react'

function Shop() {
  return (
    <div>
      <section className="shop flex flex-row justify-center bg-gradient-to-r from-black to-gray-600" id="shop">
        <div className="wrap-container flex flex-row justify-center double-fade">
            <div className="wrapper grid grid-cols-3 ">
                <div className="box p-36 text-white text-center">
                    <img src="src\assets\images\merchbarcom.jpg" alt="Outerwear" className="grid-image rounded-full"></img>
                    <a href="https://www.merchbar.com/" target="_blank"><h3 className="grid-text pt-8 text-4xl hover:text-blue-600">Merch from Merchbar</h3></a>
                </div>
                <div className="box p-36 text-white text-center">
                    <img src="src\assets\images\Ticketmaster.jpg" alt="Posters" className="grid-image rounded-full"></img>
                    <a href="https://www.ticketmaster.com/" target="_blank"><h3 className="grid-text pt-8 text-4xl hover:text-blue-600">Tickets from Ticketmaster</h3></a>
                </div>
                <div className="box p-36 text-white text-center">
                    <img src="src\assets\images\wallpapersden.com_spotify-logo_500x500.jpg" alt="CD" className="grid-image rounded-full"></img>
                    <a href="https://open.spotify.com/" target="_blank"><h3 className="grid-text pt-8 text-4xl hover:text-blue-600">Music from Spotify</h3></a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Shop
