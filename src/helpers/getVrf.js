import axios from "axios"

export const getVrf = async() => {
    const url = 'http://10.0.5.106:3001/api/v1/unit/customer/2'
    const resp = await axios( url, {
      method : "GET",
      headers: {'apiKey' :"integrationVrf"}
    } )

    const {data} = resp;
    const datosVrf = data.body.map(i => ({
        id: i.unitId,
        name: i.name,
        serial : i.deviceSerial,
        modes: i.Modes
    }))
    
    return(datosVrf)
  }

 