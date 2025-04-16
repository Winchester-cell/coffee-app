import ServiceItemCard from '@/components/Modules/ServiceItemCard/ServiceItemCard'
import React from 'react'

export default function ServicesDetails({services}) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Our Services</h4>
          <h1 className="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div className="row">
          {
            services.map(service => {
              return (

                <ServiceItemCard
                  key={service.id}
                  title={service.title}
                  des={service.des}
                  imgSrc={service.imgSrc}
                  icon={service.icon}
                />

              )
            })
          }
        </div>
      </div>
    </div>
  )
}
