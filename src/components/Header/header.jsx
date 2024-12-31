import styles from './header.module.css'
import { Link } from 'react-router-dom';
function Header(){
    return <div className={styles.header}>
       <div className={styles.headerDiv}>
        <div className={styles.logodiv}>
            <img className={styles.logo} src="https://flowbite.com/docs/images/logo.svg" alt="" />
            <h1 className={styles.logoName}>GeekFood</h1>
        </div>
        <ul className={styles.list}>
            <li><Link to={"/"} style={{textDecoration:"none" , color:"#fff"}}> Home</Link></li>
            <li>
                <Link to={"/quote"}  style={{textDecoration:"none" , color:"#fff"}}>Quote</Link>
                
                </li>
           <li>
            <Link to={"/resturants"}  style={{textDecoration:"none" , color:"#fff"}}>Resturants</Link>
           </li> 
           <li>Foods</li>
           <li>Contact</li>
        </ul>
        <button className={styles.btn}>Get started</button>
        <div className={styles.bar}>
        <i className="fa-solid fa-bars"></i>
        </div>
       </div>
    </div>
}
export default Header;