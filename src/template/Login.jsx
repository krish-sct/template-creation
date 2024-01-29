import { MenuItem, Select, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Context } from '../Provider'

const Login = () => {
    let roleData = 'Select User Role'
    const { setIsLoged, role, setRole, templateName, setTemplateName, templateNames } = useContext(Context)
    const handleChange = (e) => {
        let name = e?.target?.value?.toLowerCase()
        setRole(name)
    }
    const handleLogin = () => {
        let isUser = false
        if (role === 'sam') {
            setRole('creator');
            isUser = true;
        }
        if (role === 'ram') {
            setRole('previewer');
            isUser = true;
        }
        if (role === 'som') {
            setRole('publisher');
            isUser = true;
        }
        if (role === 'kumar') {
            setRole('seo');
            isUser = true;
        }
        if (isUser) setIsLoged(true)
        else alert('Not a valid user')
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
                <br />
                <TextField className='pd mr'
                    size='small'
                    value={role === roleData ? '' : role}
                    label="User Name"
                    placeholder='User Name'
                    onChange={handleChange} />

                {/* <Select
                className='pd mr'
                    defaultValue={role}
                    size='small'
                    value={role}
                    label="Roles"
                    onChange={handleChange}
                >
                    <MenuItem value={'Select User Role'} selected disabled>Select User Role</MenuItem>
                    <MenuItem value={'creator'}>Sam</MenuItem>
                    <MenuItem value={'previewer'}>Ram</MenuItem>
                    <MenuItem value={'publisher'}>Som</MenuItem>
                    <MenuItem value={'seo'}>Kumar</MenuItem>
                </Select> */}
                <br />
                {/* <Select className='pd mr' label='Template Name' size='small' value={templateName} onChange={(e) => setTemplateName(e?.target?.value)}>
                    {templateNames?.map((e, i) => {
                        return <MenuItem key={i} disabled={i === 0} value={e}>{(i === 0 ? "Select " : '') + e}</MenuItem>
                })}
            </Select> */}
                <div>
                    <br />
                    <button className='login-btn pointer' disabled={role === "Select User Role"} onClick={handleLogin}>Login</button>
                </div>
            </main>
        </div>
    )
}

export default Login