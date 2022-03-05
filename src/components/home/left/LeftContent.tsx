import React from 'react'
import BasicWidget from 'src/components/shared/widgets/BasicWidget'
import LoggedInCard from 'src/components/shared/widgets/LoggedInCard'

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

const relatedGroups = [
  {
    imgLink:
      'https://images.unsplash.com/photo-1589935525759-6e7aa4b63d3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    text: "Women's Fashion",
    articleLink: '/',
    followers: '987654',
  },
  {
    imgLink:
      'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    text: "Men's Fashion",
    articleLink: '/',
    followers: '322987',
  },
  {
    imgLink:
      'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    text: "Women's Jewelry",
    articleLink: '/',
    followers: '210789',
  },
  {
    imgLink:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80',
    text: 'Makeup',
    articleLink: '/',
    followers: '200123',
  },
]

function LeftContent(props) {
  return (
    <div className="__home-card-left">
      <div className="__card">
        <LoggedInCard {...props} />
      </div>
      <BasicWidget type="photos" rows={photos} title="Related Activities" link="/" />
      <BasicWidget type="2-column-row-img" rows={relatedGroups} title="Related Groups" link="/groups" />
    </div>
  )
}

export default LeftContent
