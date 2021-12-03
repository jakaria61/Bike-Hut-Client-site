import React, { useEffect, useState } from 'react';
import './AllService.css';
import ServiceCard from '../../Home/ServiceCard/ServiceCard';


const AllService = () => {
    const [serviceData, setServiceData] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])

    //console.log(serviceData);
    return (
        <section className='container'>
            <div className="text-center my-5 service-title">
                <h1>Choose your<span> Bike</span> </h1>

            </div>
            <div className="service-container">
                {
                    serviceData.length && serviceData.map(item => <ServiceCard key={item._id} item={item}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default AllService;