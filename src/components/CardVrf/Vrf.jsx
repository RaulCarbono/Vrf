import { useState, useEffect } from "react";
import { getVrf } from "../../helpers/getVrf";


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

console.log(setPoint?.Setpoint)

console.log(setPoint)
const newSocket = new WebSocket('ws://10.0.5.101:3001/ws?apiKey=integrationVrf')

useEffect(() => {

  newSocket.onopen = () => {
    console.log('Conexion Establecidad.');
  }

  newSocket.onmessage = (e) => {
    console.log(typeof(e.data) , e.data);
    setSetPoint(JSON.parse(String(e?.data)))
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
      value:22,
      projectId:123
    })
  )
}
  return (
    <>
    <div className={""}>
    {data.map((i) => <div className={""}>
      <div className={''}> {i.name}</div>
      <div className={""}>
        <div className={""}><span className={""}>°{String(setPoint?.Setpoint)}</span>
        <span className={""}> °{setPoint?.AmbientTemperature}</span></div>
        <div className={""}>
            <button className={""} onClick={send}>up</button>
            <button className={""}>down</button>
        </div>
       
      </div>
      <div className={""}>
        <div className={""}> <button className={""} >Cool</button><button className={""}>Heat</button></div>
         <div className={""}> <button className={""}>Fan</button><button className={""}>Off</button></div> 
        </div>
    </div>)}
    </div>
    </>
    
  )
}



export default Vrf
