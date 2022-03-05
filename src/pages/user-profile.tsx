import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { Row, Col } from 'antd'
import Header from 'src/components/shared/headers/Header'
import UserMeta from 'src/components/UserProfile/UserMeta'
import UserInfo from 'src/components/UserProfile/UserInfo'
import ProtectedRoute from 'src/hoc/ProtectedRoute'
import GET_CURRENT_USER from 'src/graphql/queries/getCurrentUser'
import { useQuery } from '@apollo/client'
import { User } from 'src/types'

const UserProfile: NextPage = () => {
  const { loading, error, data } = useQuery<{ currentUser: User }>(GET_CURRENT_USER)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])

  if (loading) return <h1>'Loading...'</h1>
  if (error) return <h1>`Error! ${error.message}`</h1>

  const { currentUser } = data

  return (
    <div>
      <Header />
      <div className="stores-wrapper">
        <Row gutter={30}>
          <Col className="gutter-row" span={24}>
            <div className="user-profile-wrapper">
              <UserMeta currentUser={currentUser} />
              <UserInfo />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProtectedRoute(UserProfile)
