import { useState, useEffect } from "react";
import { getVrf } from "../../helpers/getVrf";
import style from "./cardVrf.module.css";

const Vrf = () => {
  const [data, setData] = useState([]);

  const getData = async() => {
    const newData = await getVrf();
    setData(newData)
  }
  
  useEffect(() => {
    getData()
}, [])

console.log(data)
const newSocket = new WebSocket('ws://10.0.5.101:3001/ws?apiKey=integrationVrf')

useEffect(() => {

  newSocket.onopen = () => {
    console.log('Conexion Establecidad.');
  }

  newSocket.onmessage = (e) => {
    console.log(e.data);
  }
  

  newSocket.onclose = () => {
    console.log('Conexion cerrada')
  }

  
}, [])
  

const send = () => {
  newSocket.send(
    JSON.stringify({
      eventname:"setpoint",
      unitId:"65a0444165a3207a29eb353c",
      value:26,
      projectId:123
    })
  )
}
  return (
    <>
    <div className={style.container}>
    {data.map((i) => <div className={style.card_container}>
      <div className={style.title_card}> {i.name}</div>
      <div className={style.display_card_container}>
        <div className={style.display}><span className={style.displaySetpoint}>°{i.state.activeSetpoint}</span>
        <span className={style.displayTemperatureAmb}> °{i.state.ambientTemperature}</span></div>
        <div className={style.buttons}>
            <button className={style.button_up_down} onClick={send}>up</button>
            <button className={style.button_up_down}>down</button>
        </div>
       
      </div>
      <div className={style.container_options}>
        <div className={style.buttons_options}> <button className={style.button_option} >Cool</button><button className={style.button_option}>Heat</button></div>
         <div className={style.buttons_options}> <button className={style.button_option}>Fan</button><button className={style.button_option}>Off</button></div> 
        </div>
    </div>)}
    </div>
    </>
    
  )
}



export default Vrf
