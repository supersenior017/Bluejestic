import Header from 'src/components/summary/shared/Header'
import LeftSidebar from 'src/components/summary/shared/LeftSidebar'

const Layout = ({children, index}) => {
   
  return (
    <div className="dashboard-page-wrapper">
      <Header />
      <div className="dashboard-wrapper">        
        <LeftSidebar index={index} />
        <div className="dashboard-right-wrapper" > 
          {children}
        </div>
      </div>     

    </div>
  )
}

export default Layout;