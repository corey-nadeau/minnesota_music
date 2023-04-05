
function LocalArtists() {
  return (
    <div>
        <div className="artist-header text-5xl pb-6" id="localartists">
            <h2>Artists from Minnesota</h2>
        </div>
        
        <button className='w-full bg-black'>
            <a href="spotify_api\index.html" className=" bg-black text-red-600 hover:text-blue-600 text-center w-full text-2xl">Click HERE to hear their music!</a>
        </button>
        
        <div className=" items-center w-full flex flex-row opposite-fade">
            <div className="artist text-white w-1/3 mt-32">
                <div className="image-container-artist items-center">
                  <img src="src\assets\images\bobdylan.jpg" alt="bob dylan" className='ml-14 rounded-full'/>
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
            <div className="artist text-white w-1/3 mt-32">
                <div className="image-container-artist">
                    <img className='ml-14 rounded-full' src="src\assets\images\prince.jpg" alt="prince" />
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
            <div className="artist text-white w-1/3 mt-32">
                <div className="image-container-artist">
                    <img className='ml-14 rounded-full' src="src\assets\images\gravy.jpg" alt="yung gravy" />
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

export default LocalArtists
