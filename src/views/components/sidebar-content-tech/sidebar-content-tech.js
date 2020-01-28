import React from 'react'
import './style/sidebar-content-tech.sass'

export default function SidebarContentTech() {
  return (
    <div className="sidebar-content-tech">
      <div className="tech-design">
        Web Design
       
          <div>
            Photoshop range...<a href="/tech/photoshop/range">See range detail</a>
          </div>
          <div>
            Illustrator range...<a href="/tech/illustrator/range">See range detail</a>
          </div>
          <div>
            After Effect range...<a href="/tech/after/range">See range detail</a>
          </div>
      </div>
      <div>
        Web Programming Frontend
        <ul>
          <li>HTML range...</li>
          <li>CSS range...</li>
          <li>JQuery range...</li>
          <li>Animation range... <a href="/tech/animation/range">See range detail</a></li>
          <li>React range...</li>
          <li>Sass range...</li>
          <li>Bootstrap range...</li>
        </ul>
      </div>
      <div>
        Web Programming Backend
        <ul>
          <li>Node js range...</li>
          <li>AWS ec2 range...</li>
        </ul>
      </div>
    </div>
  )
}

