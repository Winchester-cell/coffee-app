import Header from '@/components/Modules/Header/Header'
import Pricing from '@/components/Templates/Menu/Pricing'
import React from 'react'

export default function Menu({data}) {
  return (
    <>
      <Header route={'Menu'}/>
      <Pricing menu={data.menu}/>
    </>
  )
}


export async function getStaticProps() {
  const res = await fetch(`http://localhost:4000/menu`)
  const menu = await res.json()

  return {
    props: {
      data: {
        menu
      }
    }
  }

}