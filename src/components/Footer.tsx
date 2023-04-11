import map from '../assets/images/mpls-map.jpg'

function Footer() {
    return (
    <footer className="text-white text-center pb-6 bg-black">
        <div className="bottom pb-20 text-white rounded-2xl concerts-header">
            <div className="footinfo">
                <div className="foothead pt-28">Info</div>
                <div className="location">
                    <p className="tiny"><i className="fa-solid fa-location-dot"></i> Minneapolis, MN 55403 United States</p>
                </div>
                <div className="email">
                    <p className="tiny"><i className="far fa-envelope"></i> djcjn21@hotmail.com</p>
                </div>
                <div className="phone">
                    <p className="tiny"><i className="fas fa-mobile-alt"></i> Call Us: (555)-555-5555 </p>
                </div>
            </div>
            <div className="map">
            <a href='https://www.google.com/maps/search/minneapolis+concert+venues/@44.9708971,-93.2614786,12z/data=!3m1!4b1' target="_blank">
                <img src={map} alt="map" className="maping rounded-lg pt-12 hover:blur-sm pl-1 cursor-zoom-in"></img>Minneapolis Venue Map click to zoom
                </a>
            </div>
            <div className="footshows">
                <div className="foothead pt-28">Featured Venues</div>
                <div className="venue">
                    <a href="https://www.usbankstadium.com/" target="_blank"><p className="tiny hover:text-red-400">U.S. Bank Stadium</p></a>
                </div>
                <div className="venue">
                    <a href="https://www.xcelenergycenter.com/" target="_blank"><p className="tiny hover:text-red-400">Xcel Energy Center</p></a>
                </div>
                <div className="venue">
                    <a href="https://gophersports.com/sports/2022/10/18/huntington-bank-stadium" target="_blank"><p className="tiny hover:text-red-400">Huntington Bank Stadium</p></a>
                </div>
                <div className="venue">
                    <a href="https://www.mlb.com/twins/ballpark" target="_blank"><p className="tiny hover:text-red-400">Target Field</p></a>
                </div>
            </div>
            <div className="social pr-16">
                <div className="foothead pt-28">Social</div>
                <div className="media">
                    <a href="https://www.facebook.com/places/Things-to-do-in-Minneapolis-Minnesota/106300959405546" target="_blank"><p className="tiny hover:text-red-400"><i className="fab fa-facebook hover:text-red-400"></i> Facebook </p></a>
                </div>
                <div className="media">
                    <a href="https://twitter.com/CityMinneapolis" target="_blank"><p className="tiny hover:text-red-400"><i className="fab fa-twitter-square hover:text-red-400"></i> Twitter </p></a>
                </div>
                <div className="media">
                    <a href="https://www.youtube.com/watch?v=7BGqB4SPrsc" target="_blank"><p className="tiny hover:text-red-400"><i className="fab fa-youtube hover:text-red-400"></i> Youtube </p></a>
                </div>
                <div className="media">
                    <a href="https://www.instagram.com/meetminneapolis/" target="_blank"><p className="tiny hover:text-red-400"><i className="fab fa-instagram hover:text-red-400"></i> Instagram </p></a>
                </div>
            </div>
        </div>&copy; Website by Corey Nadeau 2023 all rights reserved, data by Spotify and Ticketmaster
    </footer>
    )
}
export default Footer