import React from 'react';
import axios from 'axios';

export const Form = props => {
    const handleLocationChange = e => {
        const value = e.target.value;
        axios({
            method: 'get',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=b747504d35c2c18115f8d1b1d4389f02`
        })
        .then(resp => {
            console.log(resp);
            console.log(value);
        })
        .catch(error => {
            alert(error);
        })
    }

    return (
        <div>
            <input type='text' onChange={handleLocationChange} />
            <input type='button' value='+' />
        </div>
    );
}