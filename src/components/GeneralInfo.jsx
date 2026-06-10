import {useState} from 'react';
import '../styles/GeneralInfo.css';
function GeneralInfo(){
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[number,setNumber] = useState("");
    const[github,setGithub] = useState("");
    const[linkedIn,setLinkedIn] = useState("");
    const[isEditing,setIsEditing] = useState(true);
    if(isEditing){
        return(
            <div className="general-info">
                <h1>General Information</h1>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Full Name" />
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                <input type="number" value= {number} onChange ={(e)=>setNumber(e.target.value)}placeholder="Mobile Number"/>
                <input type="url" value={github} onChange={(e)=>setGithub(e.target.value)} placeholder="Github Url"/>
                <input type="url" value={linkedIn} onChange={(e)=> setLinkedIn(e.target.value)} placeholder="LinkedIn Url"/>
                <button onClick = {()=>setIsEditing(false)}>Submit</button>

            </div>
        );
    }
    return(
        <div className='general-info'>
            <h1>{name}</h1>
            <div className='contact'>
            <p> {email}</p>
            <p>{number}</p>
            <p>{github}</p> 
            <p>{linkedIn}</p>
            </div>
            <button onClick = {()=>setIsEditing(true)}>Edit</button>
        </div>
    );
}
export default GeneralInfo;

