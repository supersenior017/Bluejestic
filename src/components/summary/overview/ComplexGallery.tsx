import React from 'react'
import ComplexItem from './ComplexItem'

const ComplexGallery = () => {  
  return (
      <div className="SimpleGallery">
        <div className="grid grid-cols-2 gap-4">
          <ComplexItem url="../assets/img/summary/categories/clothing/1.jpg" title="Modern fashion dress for date night" comments="65" like="120K" share="231"/>
          <ComplexItem url="../assets/img/summary/categories/clothing/2.jpg" title="Nicely Priced Wedding Ring" comments="65" like="120K" share="231"/>
          <ComplexItem url="../assets/img/summary/categories/clothing/3.jpg" title="Enjoying the best salad of the day" comments="65" like="120K" share="231"/>
          <ComplexItem url="../assets/img/summary/categories/clothing/4.jpg" title="Best vacation in Miami Beach" comments="65" like="120K" share="231"/>
          <ComplexItem url="../assets/img/summary/categories/clothing/5.jpg" title="My next vacation stop" comments="65" like="120K" share="231"/>
          <ComplexItem url="../assets/img/summary/categories/clothing/6.jpg" title="Mother nature always have its way" comments="65" like="120K" share="231"/>
        </div>
      </div>
  )
}

export default ComplexGallery