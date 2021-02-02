import React, {useState,useEffect} from 'react'

const App = () => {
    const [count, setCount]=useState(0);
    const [isOn,setisOn]=useState(false);
    const [mousePosition,setMousePosition]= useState({x:null, y:null})
    const [status, setStatus] =useState(navigator.onLine)
    useEffect(() => {
        document.title=`You hsve clicked ${count} times`;
        window.addEventListener('mousemove',handleMouseMove);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offine', handleOffline);
        return () => {
            window.removeEventListener('mousemove',handleMouseMove)
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offine', handleOffline)
        }
    }, [count]);
    const handleOnline = () => 
    {
        setStatus(true)
    }

    const handleOffline = () => 
    {
        setStatus(false)
    }

    const handleMouseMove = (event) => 
    {
        setMousePosition({
             x: event.pageX,
             y: event.pageY
        })
    }
    const incrementCount = () =>
    {
        setCount(prevcount => prevcount+1);
    }
    const toggleLight = () =>
    {
        setisOn(previsOn => !previsOn)
    }

    return (
        <>
        <h2>Counter</h2>
        <button onClick={incrementCount}>I was clicked {count} times</button> 
        <h2>Toggle Light</h2>
        <div style={{
            height: "50px",
            width: "50px",
            backgroundColor: isOn ? "grey" : "yellow"

        }} onClick={toggleLight}/>

        <h2>Mouse Positions</h2>
        {JSON.stringify(mousePosition)}
        <h2>Network connection</h2>
        <p>You are {status ? "online":"offline"}</p>
        </> 
    )
}
export default App;