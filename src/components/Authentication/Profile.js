import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const navigate = useNavigate();
    
    useEffect(()=>{
        const getProfileData = () => {
            const token = JSON.parse(localStorage.getItem("token"));
            if (!token) {
                navigate("/login");
                return;
            }
            const header = {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }
            axios.get("https://api.escuelajs.co/api/v1/auth/profile", header)
                .then((res) => {
                    console.log("Profile Data", res);
                    setProfileData(res.data);
                    console.log("checking profile data ", profileData);
    
                }).catch((error) => {
                    console.log('Errod Found', error)
                })
        }
        getProfileData();
    },[]);
    useEffect(()=>{
        if(profileData){
            console.log("Profile Data" , profileData)
        }
    },[profileData]);
    return (
        <div style={{paddingTop: '5rem'}}>
            <h2>Profile Page</h2>
            {/* <button onClick={getProfileData}>Get profile data</button> */}
            {profileData ? (
                <div key={profileData.id}>
                    <p>Profle : {profileData.avatar}</p>
                    <p>Name : {profileData.name}</p>
                    <p>Role : {profileData.role}</p>
                    <p>Email: {profileData.email}</p>

                </div>
            ):(
          <p>Error Found</p>
            )
        }
        </div>
               

          

    )}

export default Profile;