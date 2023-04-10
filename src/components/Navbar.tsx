import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'
import { HashLink } from 'react-router-hash-link'

function AltNavbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        setIsVisible(!isVisible)
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ){
            setIsVisible(!isVisible)
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

  return (
    <nav className="flex flex-col p-7 opposite-fade w-full fixed h-40 z-10">
        <div className="flex flex-shrink-0 text-white">
            <div className=' pl-3.5 '>
                <HashLink smooth to='/#top' className='text-4xl hover:text-black bg-red-600 rounded-2xl p-3 opacity-70 border-2 border-white'>Minneapolis Music</HashLink>
            </div>
            <button onClick={dropDown} className="flex text-red-500 hover:text-white text-5xl w-20 h-20 pl-10"><i className="fa-solid fa-bars"></i></button>
        </div>
        { isVisible ? (
            <div className='items-center opposite-fade rounded-3xl -mt-2'>
                <div className='text-sm lg:flex-grow px-14'>
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <HashLink smooth to='/#top' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white'>
                                Home
                            </HashLink>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <Link to='/wishlist' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white'>
                                Wishlist
                            </Link>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <HashLink smooth to="/#AltSpotify" onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white'>
                                Local Artists
                            </HashLink>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <HashLink smooth to="/#ConcertTable" onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white'>
                                Events
                            </HashLink>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <HashLink smooth to="/#Shop" onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white'>
                                Shop
                            </HashLink>
                        </div>
                    </button>
                    
                    {
                    !auth.currentUser ? 
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <Link to='/' onClick={ () => { signInOnClick()}} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white'>
                                    Login
                            </Link>
                        </div>
                    </button>
                        :
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <Link to='/' onClick={ () => { signOutOnClick()}} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white'>
                                    Logout
                            </Link>
                        </div>
                    </button>
                    }
                </div>
            </div>
            ) : (
        <></>
        )}
    </nav>
  )
}

export default AltNavbar
