import React,{useState} from 'react'

export default function Login(){
    const [username, setUsername]=useState("");
    const [passsword, setPassword]= useState("");
    const [user, setUser]=useState(null)

    const handleSubmit = event  => {
        event.preventDefault();
        const userData = {username, passsword};
        setUser(userData);
        setUsername("");
        setPassword("")    
    }

    return(
        <div style={{textAlign:'center'}}>
            <h2>Login</h2>
<form style={{
    display:"grid",
    alignItems:'center',
    justifyItems:'center'
}}>
    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} value={username}/>

    <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)} value={passsword}/>

    <button type="submit"  onClick={handleSubmit}>Submit</button>
</form>
{user  && JSON.stringify(user)}
        </div>
    )
}