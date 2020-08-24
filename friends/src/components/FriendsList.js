import React,{useState, useEffect} from "react"
import api from "../utils/api"

export default function FriendsList(){
    const [friends,setFriends] = useState(
        []
    ) 

    useEffect(()=>{
        api().get("/api/friends")
        .then( res =>{
            console.log(res)
            setFriends(res.data);
        })
        .catch(err =>{
            console.log(err);
        })
    },[])

    return(
        <>
            <div className="form">
            <h2 className = "form__title">My Friends</h2>
                {
                friends.map(friend => {
                    return(
                        <div>{friend.name + " " +friend.age + " " + friend.email} </div>
                    )
                })
                }
            </div>
        </>
    )
}