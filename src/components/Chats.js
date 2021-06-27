import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import {ChatEngine} from 'react-chat-engine';
import {auth} from '../firebase';
import { useAuth } from './AuthContext';
import axios from 'axios';



const Chats = () =>
{
    const history = useHistory();
    const[loading, setLoading] = useState(true);
    const {user} = useAuth();
    console.log(user);
    const handleLogout =  async () =>
    {
        await auth.signOut();
        history.push('/');
        
    }
    const getFile = async (url) =>
    {
        const response = await fetch(url);
        const data = await response.blob();
        ///////blob contains images
        return new File([data], 'userPhoto.jpg',{type : 'image/jpeg'})
    }

    useEffect(()=>
    {
        if(!user)
        {
            history.push('/');
            return;
        }
        axios.get('https://api.chatengine.io/users/me',{
            headers :{
                'project-id' : '445e9cac-6b63-498b-ba65-e63e60d86a7f',
                'user-name' : user.email,
                'user-secret' : user.uid,
            }
        })
        .then(()=>
        {
            setLoading(false);
        }).catch(()=>{
            let formData = new FormData();
            formData.append('email', user.email);
            formData.append('username', user.email);
            formData.append('secret', user.uid);

            getFile(user.photoURL)
            .then((avatar) =>
            {
                formData.append('avatar', avatar, avatar.name)
            
                axios.post('https://api.chatengine.io/users',
                    formData,
                    {headers: {'private-key': '835ecc9e-fbf4-4038-9f13-c31e6b7a7461'}}
                )
                .then(()=>  setLoading(false))
                .catch((error) => console.log(error));
            })
        })
    },[user,history]);
    if(!user || loading){
        return '...loading';
    }
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Candy Chat

                </div>
                <div className="logout-tab" onClick={handleLogout}>
                    Logout

                </div>


            </div>
            <ChatEngine 
                height = "calc(100vh - 66px)"
                userName={user.email}
                userSecret={user.uid}
                projectID='445e9cac-6b63-498b-ba65-e63e60d86a7f'

            />

        </div>

    );
}

export default Chats;