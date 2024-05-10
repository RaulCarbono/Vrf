import style from './userregister.module.css';
import Register from "../../components/Register/Register"


const UserRegister = () => {
  return (
    <div className={style.container_userRegister}>
      <Register />
    </div>
  )
}

export default UserRegister
