import styles from "../Header/header.module.css";
import Register from "../Register/Register";

const Header = () => {
  return (
    <>
    <div className={styles.container_header}> 
      <h1>Vrf</h1>
    </div>
    <Register />
    </>
  )
}

export default Header
