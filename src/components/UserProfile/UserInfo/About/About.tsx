import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import AboutMe from './AboutMe'
import GeneralInformation from './GeneralInformation'
import Activity from './Activity'
import FavouriteBooks from './FavouriteBooks'
import MyStores from './MyStores'
import MyGroups from './MyGroups'
import MyRecommendation from './MyRecommendation'
import { User } from 'src/types'
import GET_CURRENT_USER from 'src/graphql/queries/getCurrentUser'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

const About: NextPage = () => {
  const router = useRouter()

  const { loading, error, data } = useQuery<{ currentUser: User }>(GET_CURRENT_USER)

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 400)
    })
  }, [])
  if (loading) return <h1>'Loading...'</h1>
  if (error) return <h1>`Error! ${error.message}`</h1>

  const { currentUser } = data

  return (
    <div className="user-about-wrapper">
      <Row gutter={30}>
        <Col span={8}>
          <div className={scroll ? 'about-me-wrapper sticky' : 'about-me-wrapper'}>
            <AboutMe currentUser={currentUser} />
          </div>
        </Col>
        <Col span={16}>
          <GeneralInformation currentUser={currentUser} />
          <Activity />
          <FavouriteBooks />
          <MyStores />
          <MyGroups />
          <MyRecommendation />
        </Col>
      </Row>
    </div>
  )
}

export default About
