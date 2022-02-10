import React from 'react';
import DestinationCards from './DestinationCards';
import popularDestinations from '../data/popularDestinations';
import { Link } from 'react-router-dom';

const StatesCards = () => {
  return (
    <div className="max-w-full lg:max-w-full mx-auto px-8 lg:px-8 py-4 dark:bg-gray-900"> 
            <h2 className="text-xl text-gray-900 dark:text-white text-center">Explore all states</h2>
            <p className="mt-2 text-gray-600 dark:text-white text-center">Collecton of great places in each states.</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 dark:bg-gray-900">
                {popularDestinations.map((eachDestination) => (
                    <>
                        <DestinationCards destination={eachDestination} key={eachDestination.city} />
                    </>
                ))}
            </div>
    </div>  
  );
};

export default StatesCards;
