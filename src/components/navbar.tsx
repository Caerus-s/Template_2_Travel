import { useEffect, useState } from 'react'
import LocalizationButton from './Localization'

const Navbar = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [location, setLocation] = useState("Loading...")

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
                        .then(response => response.json())
                        .then(data => {
                            setLocation(data.countryName || data.locality || "Unknown location");
                        })
                        .catch(() => setLocation("Unknown location"));
                },
                () => {
                    setLocation("Location access denied");
                }
            );
        } else {
            setLocation("Geolocation not supported");
        }
    }, []);

    return (
        <div className='fixed top-0 w-full p-4'>

            <div className='flex h-20 justify-between w-full bg-white rounded-full py-4 px-2 items-center'>
                {/* Left Part */}
                <div className='h-full flex w-[22.5%] px-4 justify-between items-center'>
                    <div className='font-semibold text-3xl'>
                        CAERUS
                    </div>
                    <div className='text-xl gap-4 flex'>
                        <div>
                            {time}
                        </div>
                        <div>
                            {location}
                        </div>
                    </div>
                </div>

                {/* Right Part */}
                <div className='h-full flex w-1/5 px-4 justify-between items-center'>
                    <div className='h-full flex items-center'>
                        <LocalizationButton />
                    </div>
                    <div className='h-full flex gap-4 items-center'>
                        <img src="bookmark.svg" alt="" className='h-8' />
                        <img src="cart.svg" alt="" className='h-8' />
                    </div>
                    <div className='h-full'>
                        <button className='h-full flex items-center gap-2 border-2 border-slate-300 px-2 rounded-full'>
                            <span className='h-full flex items-center'>

                                <img src="hamburger.svg" alt="" className='h-8' />
                            </span>
                            <span className='h-full flex items-center'>
                                <img src="profile.jpg" alt="" className='h-8 rounded-full' />

                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar