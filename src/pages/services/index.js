import Header from '@/components/Modules/Header/Header'
import ServicesDetails from '@/components/Templates/Services/ServicesDetails'
import React from 'react'

export default function Services({data}) {
  return (
    <>
      <Header route={'Services'} />
      <ServicesDetails services={data.services} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:4000/services`)
  const services = await res.json()

  return {
    props: {
      data: {
        services
      }
    }
  }

}