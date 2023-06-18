import React from 'react'
import { Link } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth';
import {Auth} from '../firebas-config'
import { signOut } from 'firebase/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Logo from'../logo.png'
const Navbar = () => {
  const [user] = useAuthState(Auth)
  const navigator = useNavigate()
  const logOut = async () => {
    await signOut(Auth)
    navigator("/")
  }
  return (
    <header>
      <img src={Logo} className='image' />
    

        <div className="menu">
            <Link className='link' to="/" >Home</Link>
            {user && <Link className='link' to={"/generate"}>Generate</Link>}
            {user? <div className='profile'><div className='d-flex'><img className='logo' src={user.photoURL} alt="" />  <button onClick={logOut}><LogoutIcon/></button></div></div>
            : <Link className='link' to={"/login"}>Login</Link>
            }
        </div>
    </header>
  )
}

export default Navbar