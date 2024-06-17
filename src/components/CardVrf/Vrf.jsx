import { useState, useEffect } from "react";
import { getVrf } from "../../helpers/getVrf";

const newSocket = new WebSocket('ws://10.0.5.100:3001/ws?apiKey=integrationVrf')

const Vrf = () => {
  const [data, setData] = useState([]);
  const [setPoint, setSetPoint] = useState({})

  const getData = async() => {
    const newData = await getVrf();
    setData(newData)
  }
  
  useEffect(() => {
    getData()
}, [])


console.log(data)
 
  newSocket.onopen =async  () => {
    console.log('Conexion Establecidad.');
  }

  newSocket.onmessage = async (e) => {
    console.log(typeof(e.data) , e.data);
    setSetPoint(JSON.parse(String(e?.data)))
  }
  

  newSocket.onclose = async () => {
    console.log('Conexion cerrada')
  }

  

  

const send = () => {
  newSocket.send(
    JSON.stringify({
      eventname:"setpoint",
      unitId:"65a0444165a3207a29eb353c",
      value:22,
      projectId:2
    })
  )
}
  return (
    <>
    <div className={"container_dispositivos"}>
      
    {data.map((i) => <div className={"card_vrf"}>
      <div className={'container_title_status'}>
        <div className="title_color">{i.name}</div> 
        </div>
      <div className={"container_temperature"}>
        <div className={"temperature"}><span className={"temperature_style"}>°{i?.state?.activeSetpoint}</span>
        <span className={"temperature_ambient"}> °{i?.state.ambientTemperature}</span></div>
        <div>fan</div>
        </div>
        <div className="container_options_airs">
        <div className={"container_up_down"}>
            <button className={""} onClick={send}>up</button>
            <button className={""}>down</button>
        </div>
       
      
      <div className={""}>
        <div className={""}> <button className={""} >Cool</button><button className={""}>Heat</button></div>
         <div className={""}> <button className={""}>Fan</button><button className={""}>Off</button></div> 
        </div>
        </div>
    </div>)}
    </div>
    </>
    
  )
}



export default Vrf
