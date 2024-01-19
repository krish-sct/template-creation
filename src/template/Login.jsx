import { MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Login = ({ setIsLoged, role, setRole }) => {
    const handleChange = (e) => {
        setRole(e?.target?.value)
    }
    const handleDate = async () => {
        const apiKey = "95112ae8dd285b";

        const apiUrl = `https://ipinfo.io/?token=${apiKey}`;

        await fetch(apiUrl)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error fetching IP address:', error));
    }
    useEffect(() => {
        //handleDate()
    }, [])
    return (
        <div className='flex center'>
            <main className='login-main'>
                <div>
                    <h3>Admin Panel</h3>
                </div>
                <Select
                    defaultValue={role}
                    size='small'
                    value={role}
                    label="Roles"
                    onChange={handleChange}
                >
                    <MenuItem value={'Select User Role'} selected disabled>Select User Role</MenuItem>
                    <MenuItem value={'creator'}>Creator</MenuItem>
                    <MenuItem value={'previewer'}>Previewer</MenuItem>
                    <MenuItem value={'publisher'}>Publisher</MenuItem>
                    <MenuItem value={'seo'}>SEO</MenuItem>
                </Select>

                <div>
                    <br />
                    <button className='login-btn pointer' disabled={role === "Select User Role"} onClick={() => setIsLoged(true)}>Login</button>
                </div>
            </main>
        </div>
    )
}

export default Login