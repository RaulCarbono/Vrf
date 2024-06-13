import React from 'react'
import logo from '../../assets/logo.svg'
import project from '../../assets/project.svg'
import configure from '../../assets/configure.svg'

function Sidebar() {
  return (
    <div className='container_sidebar'>
    <div className='container_header_sidebar'>
      <img  className='container_header_sidebar_logo'src={logo} alt="no estan los datos" />
    </div>
    <div className='sidebar_menu'>
      <div className='menu'>
        <span>Menú</span>
      <div className='container_options_menu'>
        <div className='container_option_project'><img className='project_img' src={project} alt="dañado" /> <span>Proyectos</span></div>
       <div className='container_option_configure'><img className='project_img_configure' src={configure}/> <span>Configuración</span></div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar