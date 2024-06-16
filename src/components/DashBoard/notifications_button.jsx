import React from "react";
import './notifications_button.css';
import Bell from '../assests/bell.png';

const NotificationsButton = () => {
    return (
        <div className="notifications_button">
            <img className="bell" src="https://www.freeiconspng.com/thumbs/bell-icons/bell-icon-16.png" />
        </div>
    );
};
export default NotificationsButton;