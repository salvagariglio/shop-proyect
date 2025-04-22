import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaLock, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login } from '../redux/authSlice';

const UserSettings = ({ initialTab = 'profile' }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        if (user) {
            setUsername(user.username || '');
            setEmail(user.email || '');
        }
    }, [user]);

    const handleSave = () => {
        if (activeTab === 'password') {
            if (!currentPassword || !newPassword || !confirmNewPassword) {
                alert('Please complete all password fields.');
                return;
            }

            if (currentPassword !== user.password) {
                alert('The current password is incorrect.');
                return;
            }

            if (newPassword !== confirmNewPassword) {
                alert('The new passwords do not match.');
                return;
            }

            const updatedUser = {
                ...user,
                password: newPassword,
            };

            localStorage.setItem('user', JSON.stringify(updatedUser));
            dispatch(login(updatedUser));
            alert('Password updated successfully.');

            setCurrentPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
        } else {
            if (!username || !email) {
                alert('Username and email cannot be empty.');
                return;
            }

            const updatedUser = {
                ...user,
                username,
                email,
            };

            localStorage.setItem('user', JSON.stringify(updatedUser));
            dispatch(login(updatedUser));
            alert('Profile updated successfully.');
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="flex flex-col md:flex-row pt-6 pb-14 p-6 gap-6">
            <div className="md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-lg">
                <ul className="space-y-4">
                    <li className="flex items-center text-lg text-gray-700 hover:text-yellow-600 cursor-pointer">
                        <button onClick={() => setActiveTab('profile')} className="flex items-center">
                            <FaUser className="mr-2" /> Profile
                        </button>
                    </li>
                    <li className="flex items-center text-lg text-gray-700 hover:text-yellow-600 cursor-pointer">
                        <button onClick={() => setActiveTab('email')} className="flex items-center">
                            <FaEnvelope className="mr-2" /> Email
                        </button>
                    </li>
                    <li className="flex items-center text-lg text-gray-700 hover:text-yellow-600 cursor-pointer">
                        <button onClick={() => setActiveTab('password')} className="flex items-center">
                            <FaLock className="mr-2" /> Password
                        </button>
                    </li>
                    <li className="pt-4 border-t">
                        <button onClick={handleLogout} className="flex items-center text-lg text-red-500 hover:text-red-700">
                            <FaSignOutAlt className="mr-2" /> Log out
                        </button>
                    </li>
                </ul>
            </div>

            <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>

                {activeTab === 'profile' && (
                    <div className="space-y-6 py-5">
                        <div className="py-5">
                            <label className="block text-sm font-medium text-gray-700 py-2">Current Username</label>
                            <label className="block text-sm text-blue-600 pl-5 font-semibold">{user?.username || 'user'}</label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">New Username</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                )}

                {activeTab === 'email' && (
                    <div className="space-y-6 py-5">
                        <div className="py-5">
                            <label className="block text-sm font-medium text-gray-700 py-2">Current Email</label>
                            <label className="block text-sm text-blue-600 pl-5 font-semibold">{user?.email || 'email@example.com'}</label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">New Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                )}

                {activeTab === 'password' && (
                    <div className="space-y-6 py-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Current Password</label>
                            <input
                                type="password"
                                name="currentPassword"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">New Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                            <input
                                type="password"
                                name="confirmNewPassword"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                )}

                <div className="mt-6">
                    <button
                        onClick={handleSave}
                        className="w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserSettings;
