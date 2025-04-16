import Header from '@/components/Modules/Header/Header'
import Result from '@/components/Templates/Search/Result'
import React from 'react'

export default function Search({searchResult}) {

  

  return (
    <>
      <Header route={'Search'} />
      <Result searchResult={searchResult} />
    </>
  )
}


export async function getServerSideProps ( context ){
  const {query} = context

  const res = await fetch(`http://localhost:4000/menu`)
  const data = await res.json()



  const searchResult = data.filter( (item) => {
    return(
      item.title.toLowerCase().includes(query.q.toLowerCase()) || 
      item.type.toLowerCase().includes(query.q.toLowerCase())
    )
  })



  return {
    props: { searchResult }
  }

}
