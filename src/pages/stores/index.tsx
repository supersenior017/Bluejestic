import React from 'react'
import { Row, Col } from 'antd'
import { useQuery } from '@apollo/client'
import STORES_PAGE_QUERY from 'src/graphql/queries/getStoresPageQuery'
import Header from 'src/components/shared/headers/Header'
import LeftSidebar from 'src/components/shared/LeftSidebar'
import HeroSlider from 'src/components/Stores/HeroSlider'
import SuggestedStores from 'src/components/Stores/SuggestedStores'
import StoreCategories from 'src/components/Stores/Categories'
import PopularStores from 'src/components/Stores/PopularStores'
import useSetScroll from 'src/hooks/useSetScroll'
import AllStores from 'src/components/Stores/AllStores'
import ProtectedRoute from 'src/hoc/ProtectedRoute'

const StoresPage = () => {
  const scroll = useSetScroll()
  const { loading, error, data } = useQuery(STORES_PAGE_QUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const { categories, stores } = data

  const popularStores = stores.filter((store) => store.isPopular)
  console.log('_p', popularStores)

  return (
    <div>
      <Header />
      <div className="stores-wrapper">
        <Row gutter={30}>
          <Col className="gutter-row" span={5}>
            <div className={scroll ? 'feed-left-sidebar sticky' : 'feed-left-sidebar'}>
              <LeftSidebar />
            </div>
          </Col>
          <Col className="gutter-row" span={19}>
            <div className="stores-main-wrapper">
              <HeroSlider />
              <SuggestedStores stores={stores} />
              <StoreCategories categories={categories} />
              <PopularStores stores={popularStores} />
              <AllStores stores={stores} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProtectedRoute(StoresPage)
