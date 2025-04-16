import ProductComments from '@/components/Templates/Product/ProductComments'
import ProductsDetail from '@/components/Templates/Product/ProductDetail'
import React from 'react'

export default function Product({ data }) {
  return (
    <>
      <ProductsDetail product={data.product} />
      <ProductComments comments={data.comments} />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/menu`)
  const data = await res.json()
  const paths = data.map(item => {
    return { params: { id: String(item.id) } }
  })

  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps(context) {
  const { params } = context

  const productRes = await fetch(`http://localhost:4000/menu/${params.id}`)
  const product = await productRes.json()

  const commentsRes = await fetch(`http://localhost:4000/comments`)
  const comments = await commentsRes.json()
  const productComments = comments.filter( comment => {
    return comment.productID === +params.id
  })

  return {
    props: {
      data: { product, comments:productComments }
    }
  }

}