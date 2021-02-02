import React,{useState} from 'react'
const initialState={
    username: "",
    email: "",
    password: "",
}
export default function Login(){
    const [form, setform]=useState(initialState);
    const [user, setUser]=useState(null)
    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = event  => {
        event.preventDefault();
        setUser(form);
        setform(initialState);
    }

    return(
        <div style={{textAlign:'center'}}>
            <h2>Register</h2>
<form style={{
    display:"grid",
    alignItems:'center',
    justifyItems:'center'
}}>
    <input type="text" placeholder="Username" onChange={handleChange} name="username" value={form.username}/>

    <input type="email" placeholder="Email Address" onChange={handleChange} name="email" value={form.email}/>

    <input type="text" placeholder="Password" onChange={handleChange} name="password" value={form.password}/>

    <button type="submit"  onClick={handleSubmit}>Submit</button>
</form>
{user  && JSON.stringify(user)}
        </div>
    )
}