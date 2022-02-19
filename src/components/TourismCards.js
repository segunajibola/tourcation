import React from 'react'
import { Link } from "react-router-dom";

const TourismCards = ({ center }) => {
  return (
    <Link to={ `/states/${center.name}` } className='block'>
        <div className='flex items-center rounded-lg cursor-pointer bg-gray-200 dark:bg-gray-900 shadow-lg overflow-hidden hover:-translate-y-2.5 transform transition hover:scale-105'>
            <img src={center.imageUrl} alt={center.imageAlt} className='h-48 w-32 flex-shrink-0 object-cover'/>
            <div className="px-5 py-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{center.name}</h3>
                <p className="text-gray-600 dark:text-white overflow-hidden overflow-ellipsis w-60 mt-2">
                    Address: {center.address}
                </p>
                <div className="mt-2">
                    <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm dark:text-white">
                        Rating: {center.rating}
                    </a>
                </div>
            </div>
        </div>   
    </Link> 
  )
}

export default TourismCards