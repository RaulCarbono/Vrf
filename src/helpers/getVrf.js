import axios from "axios"

export const getVrf = async() => {
    const url = 'http://10.0.5.100:3001/api/v1/unit/customer/2'
    const resp = await axios( url, {
      method : "GET",
      headers: {'apiKey' :"integrationVrf"}
    } )

    const {data} = resp;
    console.log(data)
    const datosVrf = data.body.map(i => ({
        id: i.unitId,
        name: i.name,
        modes: i.modes,
        state: i.states,
    }))
    
    return(datosVrf)
  }

 