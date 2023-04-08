import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'


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
            <Link to='/' className='text-4xl hover:text-black bg-red-600 rounded-2xl p-3 opacity-70'>Minneapolis Music</Link>
            </div>
            <button 
                onClick={dropDown}
                className="flex text-red-500 hover:text-white text-5xl w-20 h-20 pl-10" 
                ><i className="fa-solid fa-bars"></i>
            </button>
        </div>
        <div className="block">
            
        </div>
        { isVisible ? (
            <div className='items-center opposite-fade rounded-3xl -mt-2'>
                <div className='text-sm lg:flex-grow px-14'>
                    <Button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <Link to='/' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-white'>
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <Link to='/wishlist' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-white'>
                                Wishlist
                            </Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <Link to='/wishlist' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-white'>
                                Events
                            </Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <Link to='/wishlist' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-white'>
                                Shop
                            </Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <Link to='/wishlist' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-white'>
                                Local Artists
                            </Link>
                        </div>
                    </Button>
                    {
                        !auth.currentUser ? 
                        <Button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                            <div>
                                <Link to='/' onClick={ () => { signInOnClick()}} className='flex place-items-center mt-4 
                                lg:inline-block lg:mt-0 text-white'>
                                    Login
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                            <div>
                                <Link to='/' onClick={ () => { signOutOnClick()}} className='flex place-items-center mt-4 
                                lg:inline-block lg:mt-0 text-white'>
                                    Logout
                                </Link>
                            </div>
                        </Button>
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
