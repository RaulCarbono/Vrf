import style from "./cardVrf.module.css";


const Vrf = () => {

  const getVrf = async() => {
    const url = 'http://10.0.5.106:3001/api/v1/unit/customer/2'
    const resp = await fetch( url, {
      method:'get',
      headers: {'apiKey' :"integrationVrf"}
    } )

    console.log(resp);
  }

  getVrf()

  return (
    <div className={style.card_container}>
      <div className={style.title_card}> soy el primer termostato</div>
      <div className={style.display_card_container}>
        <div className={style.display}></div>
        <div className={style.buttons}>
            <button className={style.button_up_down}>up</button>
            <button className={style.button_up_down}>down</button>
        </div>
       
      </div>
      <div className={style.container_options}>
        <div className={style.buttons_options}> <button className={style.button_option}>Cool</button><button className={style.button_option}>Heat</button></div>
         <div className={style.buttons_options}> <button className={style.button_option}>Fan</button><button className={style.button_option}>Off</button></div> 
        </div>
    </div>
  )
}



export default Vrf
