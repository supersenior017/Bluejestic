import React from 'react'
import BasicWidget from '../widgets/BasicWidget'

const photos = [
  {
    img: 'https://images.unsplash.com/photo-1546388612-69fc7322bd56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1278&q=80',
    link: '/',
  },
  {
    img: 'https://images.unsplash.com/photo-1551809727-fa6cc87641a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    link: '/',
  },
  {
    img: 'https://images.unsplash.com/photo-1596475380310-d8db2aa35b1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
    link: '/',
  },
  {
    img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    link: '/',
  },
  {
    img: 'https://images.unsplash.com/photo-1567705323043-d0e489de300d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1203&q=80',
    link: '/',
  },
  {
    img: 'https://images.unsplash.com/photo-1581299894341-367e6517569c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    link: '/',
  },
]

const RecentPost = () => {
  return (
    <div className="left-sidebar-recent-post">
      <BasicWidget type="recentpost" rows={photos} title="Related Activities" link="" />
    </div>
  )
}

export default RecentPost
