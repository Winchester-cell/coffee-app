import Header from '@/components/Modules/Header/Header'
import Comments from '@/components/Templates/Testimonial/Comments'
import React from 'react'

export default function Testimonial({data}) {
  return (
    <>
      <Header route={'Testimonial'} />
      <Comments comments={data.comments}/>
    </>
  )
}

export async function getStaticProps() {

  const commentRes = await fetch(`http://localhost:4000/comments`)
  const comments = await commentRes.json()

  return {

    props: {
      data: {
        comments
      }
    } , 
    revalidate : 60*60*12

  }
}