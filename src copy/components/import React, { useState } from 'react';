import React, { useState } from 'react';
import styles from '../styles/style.module.css';
import Link from 'next/link'; 
import Image from 'next/image';
import styles from '../styles/TrainingLog.module.css';
import connectDB from '../../server/mongodb/index';
import User from '../../server/mongodb/models/User';

export default async function TrainingLog(props) {

    //const [userData, setUserData] = useState(null);

    /**
    useEffect(() => {
        const fetchUserData = async () => {
        try {
            // Fetch user data from the backend
            const response = await fetch(`/api/user/${userId}`);
            const data = await response.json();

            // Set the user data in state
            setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
        };

        // Call the fetchUserData function
        fetchUserData();
    }, [userId]);

    */

    const user = await User.findById(userId);
    const name = user.fullname;

    function formatDateComponents(dateString) {
        // Create a Date object from the string
        const date = new Date(dateString);
      
        // Extract day, month, and year
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
      
        return { day, month, year };
      }
      

    const { userId, animal, title, date, description, hours } = props;

    // works for Format: YYYY-MM-DD
    const components = formatDateComponents(date);

    return (
        <div className="all">
            <div id="threeSides">
                <div id="leftSide">
                    <p id="date">{components.day}</p>
                    <p id="monthYear">{components.month} - {components.year}</p>
                </div>
                <div id="allInfo">
                    <div id="info">
                        <p id="heading">{title} • {hours}</p>
                        <p id="bottomInfo">{name} - {animal}</p>
                    </div>
                    <p id="desc">{description}</p>
                </div>
                <button id="edit" alt="edit" onClick={(e) => {}} ></button>
            </div>
        </div>
    );
}