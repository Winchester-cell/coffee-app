import Slider from '@/components/Templates/Index/Slider'
import About from '@/components/Templates/Index/About'
import React from 'react'
import Services from '@/components/Templates/Index/Services'
import Offers from '@/components/Templates/Index/Offers'
import Menu from '@/components/Templates/Index/Menu'
import Reservation from '@/components/Templates/Index/Reservation'
import CommentsSection from '@/components/Templates/Index/CommentsSection'

export default function Home({data}) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offers />
      <Menu menu={data.menu} />
      <Reservation />
      <CommentsSection comments={data.comments} />
    </>
  )
}

export async function getStaticProps() {

  const servicesRes = await fetch(`http://localhost:4000/services`)
  const services = await servicesRes.json()

  const menuRes = await fetch(`http://localhost:4000/menu`)
  const menu = await menuRes.json()

  const commentRes = await fetch(`http://localhost:4000/comments`)
  const comments = await commentRes.json()

  return {

    props: {
      data: {
        services ,
        menu,
        comments
      }
    } , 
    revalidate : 60*60*12

  }
}
