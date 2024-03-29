import React from 'react'
import './Navbar.scss';
import { images } from '../../Constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';


const Navbar = () => {

   const [toggle, settoggle] = useState(false)
  return (
    <nav className='app__navbar'>
        <div className='app_navbar-logo'>
            <img src={images.logo} alt="Logo" />
        </div>
        <ul className='app__navbar-links'>
            { ['home', 'about', 'contact', 'work', 'skills', 'contact'].map((item) => (
                <li className='app__flex p-text' key={`link=${item}`}>
                    <div></div>
                    <a href={`#${item}`}>{item}</a>
                </li>
            )) }
        </ul>
        <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            { toggle && (
                <motion.div whileInView={{x: [300, 0]}} transition={{ duration: 0.85, ease:'easeOut' }}>

                </motion.div>
            ) }
        </div>
    </nav>
  )
}

export default Navbar