import React from 'react'
import { NextPage } from 'next'
import Header from 'src/components/shared/headers/Header'
import ProductInfo from 'src/components/ProductDetail/ProductInfo'
import { Tabs } from 'antd'
import Description from 'src/components/ProductDetail/Description'
import RelatedProducts from 'src/components/ProductDetail/RelatedProducts'
import ProductSlider from 'src/components/ProductDetail/ProductSlider'
import PRODUCT_QUERY from 'src/graphql/queries/getProductQuery'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { Product } from 'src/types'

const { TabPane } = Tabs

const ProductDetail: NextPage = () => {
  const router = useRouter()

  const { loading, error, data } = useQuery<{ product: Product }>(PRODUCT_QUERY, { variables: { id: router.query.id } })

  if (loading) return <h1> Loading...</h1>
  if (error) return <h1>Error! {error.message}</h1>
  const { product } = data

  return (
    <div>
      <Header />
      <div className="product-detail-wrapper pt-20">
        <div className="max-w-screen-xl  mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7">
              <div className="flex mb-3">
                <img src="/assets/img/product-detail/left-arrow.svg" />
                <p className="text-black underline ml-2">Back to result</p>
              </div>
              <ProductSlider product={product} />
            </div>
            <div className="col-span-5 pl-20 mt-30">
              <ProductInfo product={product} />
            </div>
          </div>
          <div className="product-info mb-20">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Description" key="1">
                <Description description={product.description} features={product.features} />
              </TabPane>
              <TabPane tab="Comments(1006)" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Shipping & Return" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
          <RelatedProducts />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
