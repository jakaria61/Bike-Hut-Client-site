import React, { useContext, useEffect, useState } from 'react';
import ServiceList from '../ServiceList/ServiceList';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';
import useAuth from '../../Hooks/useAuth';

const Dashboard = () => {
    const [isAdmin, setIsAdmin] = useState('');
    const { user, setUser } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/admin/${user.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data[0] || 0))
    }, [])
    console.log(user, isAdmin);
    return (
        <section>
            {
                isAdmin ? <OrderList></OrderList> : <ServiceList></ServiceList>
            }
        </section>

    );
};

export default Dashboard;