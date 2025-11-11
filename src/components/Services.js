import React from 'react'
import { Title } from '../Title'
import { Icons } from '../Data'

const Services = () => {
  return (
    <section className="section services" id="services">
        <div className="section-title">
         
         <Title title={'our'} text={'services'}/>
        </div>
        <div className="section-center services-center">
          {Icons.map((i)=>{
            const {id,icon,title,text}=i
            return  <article className="service" key={id}>
        <span className="service-icon">
        {icon}
        </span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">
          {text}
          </p>
        </div>
      </article>
          })}
     
        </div>
      </section>
  )
}

export default Services