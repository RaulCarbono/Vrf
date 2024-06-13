import React from 'react'

const Register = () => {
  return (
    <div className={styles.container_form}>
        <form action="" className={styles.form_container_options}>
            <h2>Registro</h2>
           
            <label htmlFor="">Email
            <input type="text" placeholder='prueba@gmail.com'/>
            </label>
            <label htmlFor="">Password
            <input type="text" placeholder='*********' />
            </label>
            
            <div className={styles.container_buttons}>
            <button type='submit' className={styles.accept}>Aceptar</button>
            <button type='submit'>Cancelar</button>
            </div>
        </form>
    </div>
  )
}

export default Register
