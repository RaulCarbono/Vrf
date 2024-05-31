import axios from "axios"

export const getVrf = async() => {
    const url = 'http://10.0.5.101:3001/api/v1/unit/customer/123'
    const resp = await axios( url, {
      method : "GET",
      headers: {'apiKey' :"integrationVrf"}
    } )

    const {data} = resp;
    const datosVrf = data.body.map(i => ({
        id: i.unitId,
        name: i.name,
        modes: i.Modes,
        state: i.states,
    }))
    
    return(datosVrf)
  }

 