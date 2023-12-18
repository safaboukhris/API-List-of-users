import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './listOfUsers.css'
import './App.css'

const ListOfUsers = () => {
        // useState to store data from the API and store the comming error
    const[users,setUsers] = useState([]);
    const[error,setError] = useState(null);
    // Fetching data from the server using axios
        useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((response)=>{
                    setUsers(response.data);
                })
                .catch(err => setError(err))
        })

            //showing data in a card 
    return (
        <div>
            {users.map((user)=>(
                <div className="container">
                    <div className="card">
                        <div className="face back">
                            <div className="content">
                                <span className="stars"></span>
                                <p className="desc"><span>ID :</span> {user.id}</p>
                                <p className="desc"><span>USER NAME :</span> {user.username}</p>
                                <p className="desc"><span>EMAIL :</span> {user.email}</p>
                                <p className="desc"><span>CITY :</span> {user.address.city}</p>
                                <p className="desc"><span>ADDRESS :</span> {user.address.street}</p>
                                <p className="desc"><span>SUITE :</span> {user.address.suite}</p>
                                <p className="desc"><span>ZIP CODE :</span> {user.address.zipcode}</p>
                                <p className="desc"><span>PHONE :</span> {user.phone}</p>
                                <p className="desc"><span>Website : </span>{user.website}</p>
                                <p className="desc"><span>COMPANY : </span>{user.company.name}</p>
                                <p className="desc"><span>CATCHPHRASE:</span> {user.company.catchPhrase}</p>
                                <p className="desc"><span> BS: </span>{user.company.bs}</p>
                            </div>
                        </div>
                        <div className="face front">
                            <p>{user.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListOfUsers
