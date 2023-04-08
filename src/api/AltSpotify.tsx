import Dylan from '../assets/images/bobdylan.jpg'
import Prince from '../assets/images/prince.jpg'
import Gravy from '../assets/images/gravy.jpg'

const AltSpotify = () => {

let playSong;
const clientId = "99707647c8c34b5984cca216921a2f53";
const clientSecret = "112abdfe335d46f4ae20d3b2efccd880";

const _getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    return data.access_token
}

async function clickedEventDylan(){
  let track = 'bob dylan knockin on heavens door'
  let token = await _getToken();
  let headers = new Headers([
      ['Content-Type', 'application/json'],
      ['Accept', 'application/json'],
      ['Authorization', `Bearer ${token}`]
  ]);
  let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`,{
      method: 'GET',
      headers: headers
  });
  let result = await fetch(request);
  let response = await result.json();
  console.log(response)
  let song = response.tracks.items[0].preview_url

  if (playSong){
      stopSnippet();
  }
  songSnippet(song);
}
async function clickedEventPrince(){
  let track = 'prince you got the look 2020 remaster'
  let token = await _getToken();
  let headers = new Headers([
      ['Content-Type', 'application/json'],
      ['Accept', 'application/json'],
      ['Authorization', `Bearer ${token}`]
  ]);
  let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`,{
      method: 'GET',
      headers: headers
  });
  let result = await fetch(request);
  let response = await result.json();
  console.log(response)
  let song = response.tracks.items[0].preview_url

  if (playSong){
      stopSnippet();
  }
  songSnippet(song);
}

async function clickedEventGravy(){
    let track = 'yung gravy oops'
    let token = await _getToken();
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization', `Bearer ${token}`]
    ]);
    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`,{
        method: 'GET',
        headers: headers
    });
    let result = await fetch(request);
    let response = await result.json();
    console.log(response)
    let song = response.tracks.items[0].preview_url

    if (playSong){
        stopSnippet();
    }
    songSnippet(song);
}

function songSnippet(url){
    playSong = new Audio(url);
    return playSong.play()
}

function stopSnippet(){
    return playSong.pause();
}

  return (
    <div>
    <div className="artist-header text-5xl pb-6" id="localartists">
        <h2>Artists from Minnesota</h2>
    </div>
    
    <div className='w-full bg-black text-center'>
        <a className=" bg-black text-white text-center w-full text-2xl">Click an image to hear their music!</a>
    </div>
    <div className='bg-black text-white text-center pt-10'>
      <button onClick={stopSnippet} className=' p-1 hover:text-red-500 hover:border-red-500 border-2 text-xl'>
        STOP Music
      </button>
    </div>
    
    <div className=" items-center w-full flex flex-row opposite-fade">
        <div className="artist text-white w-1/3 mt-10">
            <div className="image-container-artist items-center">
              <img onClick={clickedEventDylan} src={Dylan} alt="bob dylan" className='ml-14 rounded-full border p-1 hover:border-red-500'/>
            </div>
            <div className="artist-name text-center text-2xl">
                <h1 className='pt-10'>Bob Dylan</h1>
            </div>
            <div  className="artist-info text-center mx-14">Bob Dylan was born on May 24, 1941 in Duluth, Minnesota. He grew up in the city of
                Hibbing. As a teenager, he played in various bands and with time his interest in music 
                deepened, with a particular passion for American folk music and blues. One of his idols 
                was the folk singer Woody Guthrie.
            </div>
            <div className="artist-socials text-center space-x-4 pb-20">
                <a href="https://www.instagram.com/bobdylan" target="_blank"><i className="fab fa-instagram hover:text-blue-600"></i></a>
                <a href="https://www.facebook.com/bobdylan" target="_blank"><i className="fab fa-facebook hover:text-blue-600"></i></a>
                <a href="https://twitter.com/bobdylan" target="_blank"><i className="fab fa-twitter hover:text-blue-600"></i></a>
                <a href="https://www.tiktok.com/@bobdylanofficial?lang=en" target="_blank"><i className="fab fa-tiktok hover:text-blue-600"></i></a>
            </div>
        </div>
        <div className="artist text-white w-1/3 mt-10">
            <div className="image-container-artist">
                <img onClick={clickedEventPrince} className='ml-14 rounded-full border p-1 hover:border-red-500' src={Prince} alt="prince" />
            </div>
            <div className="artist-name text-center text-2xl">
                <h1 className='pt-10'>Prince</h1>
            </div>
            <div className="artist-info text-center mx-14">Prince Rogers Nelson, songwriter, singer, producer, and all-round musical 
                    icon, was born on June 7, 1958 in Minneapolis, Minnesota. Music was a part of Prince's family; his father, 
                    John Nelson, was a jazz pianist whose stage name was Prince Rogers, and his mother, Mattie Nelson, was a 
                    vocalist.</div>
            <div className="artist-socials text-center space-x-4 pb-20">
                <a href="https://www.instagram.com/prince" target="_blank"><i className="fab fa-instagram hover:text-blue-600"></i></a>
                <a href="https://www.facebook.com/prince" target="_blank"><i className="fab fa-facebook hover:text-blue-600"></i></a>
                <a href="https://twitter.com/prince" target="_blank"><i className="fab fa-twitter hover:text-blue-600"></i></a>
                <a href="https://www.tiktok.com/tag/prince?lang=en" target="_blank"><i className="fab fa-tiktok hover:text-blue-600"></i></a>
            </div>
        </div>
        <div className="artist text-white w-1/3 mt-10">
            <div className="image-container-artist">
                <img onClick={clickedEventGravy} className='ml-14 rounded-full border p-1 hover:border-red-500' src={Gravy} alt="yung gravy" /><button></button>
            </div>
            <div className="artist-name text-center text-2xl">
                <h1 className='pt-10'>Yung Gravy</h1>
            </div>
            <div className="artist-info text-center mx-14">Mathew Raymond Hauri, or Yung Gravy, was born on March 19, 1996, in Rochester, 
            Minnesota, the United States. He is a well-known rapper, songwriter, producer, and entrepreneur who has been professionally 
            active since 2016, when he started uploading his music onto the online audio distribution platform, SoundCloud.</div>
            <div className="artist-socials text-center space-x-4 pb-20">
                <a href="https://www.instagram.com/yunggravy" target="_blank"><i className="fab fa-instagram hover:text-blue-600"></i></a>
                <a href="https://www.facebook.com/yunggravy" target="_blank"><i className="fab fa-facebook hover:text-blue-600"></i></a>
                <a href="https://twitter.com/yunggravy" target="_blank"><i className="fab fa-twitter hover:text-blue-600"></i></a>
                <a href="https://www.tiktok.com/@yunggravy?lang=en" target="_blank"><i className="fab fa-tiktok hover:text-blue-600"></i></a>
              
            </div>
        </div>
     </div>
    </div>
  )
}

export default AltSpotify