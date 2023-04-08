import map from '../assets/images/mpls-map.jpg'

function Footer() {
  return (
  
    <footer className="text-white text-center py-12 bg-black">
      <div className="bottom pb-20 text-white">
          <div className="map">
              <img src={map} alt="map" className="maping rounded-lg"></img>
          </div>
          <div className="footinfo">
              <div className="foothead">Info</div>
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
          <div className="footshows">
              <div className="foothead">Featured Venues</div>
              <div className="venue">
                  <a href="https://www.usbankstadium.com/" target="_blank"><p className="tiny">U.S. Bank Stadium</p></a>
              </div>
              <div className="venue">
                  <a href="https://www.xcelenergycenter.com/" target="_blank"><p className="tiny">Xcel Energy Center</p></a>
              </div>
              <div className="venue">
                  <a href="https://gophersports.com/sports/2022/10/18/huntington-bank-stadium" target="_blank"><p className="tiny">Huntington Bank Stadium</p></a>
              </div>
              <div className="venue">
                  <a href="https://www.mlb.com/twins/ballpark" target="_blank"><p className="tiny">Target Field</p></a>
              </div>
          </div>
          <div className="social">
              <div className="foothead">Social</div>
              <div className="media">
                  <a href="https://www.facebook.com/places/Things-to-do-in-Minneapolis-Minnesota/106300959405546" target="_blank"><p className="tiny"><i className="fab fa-facebook"></i> Facebook </p></a>
              </div>
              <div className="media">
                  <a href="https://twitter.com/CityMinneapolis" target="_blank"><p className="tiny"><i className="fab fa-twitter-square"></i> Twitter </p></a>
              </div>
              <div className="media">
                  <a href="https://www.youtube.com/watch?v=7BGqB4SPrsc" target="_blank"><p className="tiny"><i className="fab fa-youtube"></i> Youtube </p></a>
              </div>
              <div className="media">
                  <a href="https://www.instagram.com/meetminneapolis/" target="_blank"><p className="tiny"><i className="fab fa-instagram"></i> Instagram </p></a>
              </div>
          </div>
      </div>&copy;  Corey Nadeau 2023 all rights reserved, data by Spotify and Ticketmaster
  </footer>
  
  )
}
export default Footer