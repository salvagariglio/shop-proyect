import React from 'react';
import UserSettings from '../components/UserSettings';
import LoginRegisterForm from '../components/LoginRegisterForm';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'; // 👈 importar useLocation

const UserPage = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const location = useLocation();

    return (
        <div className="">
            {isLoggedIn ? <UserSettings initialTab={location.state?.tab} /> :
                <div className='min-h-screen flex items-center justify-center p-4'>
                    <LoginRegisterForm />
                </div>}
        </div>
    );
};

export default UserPage;

