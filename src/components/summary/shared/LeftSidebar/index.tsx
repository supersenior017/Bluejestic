import React, { useEffect, useState }  from 'react'
import CoverPhoto from './CoverPhoto'
import NavMenu from './NavMenu'


const LeftSidebar = ({index}) => {  
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    setScrolled((offset>70)?true:false);
  }    
  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
  })
  const LeftbarClasses = (scrolled)?'dashboard-left-sidebar sticky':'dashboard-left-sidebar';
  return (
    <>
      <div className='dashboard-left-sidebar-clone'></div>
      <div className={LeftbarClasses}>        
        <CoverPhoto />
        <NavMenu index={index}/>        
      </div>
    </>
  )
}

export default LeftSidebar
