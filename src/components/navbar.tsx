import { useEffect, useState } from 'react'

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

        <div className='flex h-20 justify-between w-full bg-white rounded-full p-4 items-center'>
            {/* Left Part */}
        <div className='h-full flex w-1/3 bg-red-300 px-4 justify-between items-center'>
            <div className='font-semibold text-3xl'>
                trvvrat
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
        <div className='h-full flex w-1/3 bg-blue-300'>
            <div className='h-full'>
                <input type="text" placeholder="Search"  className='h-full' />           
            </div>
            <div className='h-full flex'>
                <img src="bookmark.svg" alt="" className='h-full'/>
                <img src="cart.svg" alt="" className='h-full'/>
            </div>
            <div className='h-full'>
                <button className='h-full flex'>
                    <span className='h-full'>

                <img src="hamburger.svg" alt="" className='h-full'/>
                    </span>
                    <span className='h-full'>
                <img src="profile.svg" alt="" className='h-full'/>

                    </span>
                </button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Navbar