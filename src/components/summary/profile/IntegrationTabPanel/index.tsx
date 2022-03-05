import SocialCard from "./SocialCard";
const IntegrationTabPanel = () => {
  return (
    <div style={{backgroundColor:'#ECEEF4'}}>
      <div className="py-16 px-32 mb-12 -mt-8 rounded-2xl bg-white">
        <p className="text-gray-700 font-medium text-base">Social Integration</p>
        <p className="text-gray-400 font-medium text-sm">Connect your profile to other social networks</p>
        
        <div className="mt-24 ml-40 grid grid-flow grid-cols-3 gap-8 ...">
          <SocialCard url="../assets/img/summary/profile/text-meta.png" state={true} text="Extend your store social present on Meta social platform"/>
          <SocialCard url="../assets/img/summary/profile/text-instagram.png" state={true} text="Reach more customers by connecting to millions more on Instagram"/>
          <SocialCard url="../assets/img/summary/profile/text-pinterest.png" state={false} text="Import product catalogs, customers, orders from your Shopify store"/>
          <SocialCard url="../assets/img/summary/profile/text-twitter.png" state={true} text="Extend your store social present on Meta social platform"/>
          <SocialCard url="../assets/img/summary/profile/text-linkedin.png" state={false} text="Reach more customers by connecting to millions more on Instagram"/>
          <SocialCard url="../assets/img/summary/profile/text-whatsapp.png" state={true} text="Import product catalogs, customers, orders from your Shopify store"/>          
        </div>
      </div>

    </div>
  )
}

export default IntegrationTabPanel;