import { useEffect, useState } from "react"
import './friends.css';
import Friend from "./Friend";
function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setFriends(data))
    },[])

    return(
        <div className="friends">
            <h3>friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend ={friend}></Friend>)
            }
        </div>
    )
}

export default Friends