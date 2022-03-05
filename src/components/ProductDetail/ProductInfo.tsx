import { Avatar, Select, Button } from 'antd'
import { Product } from 'src/types'
import getImageUrl from 'src/utils/getImageUrl'

const { Option } = Select

const ProductInfo: React.FC<{ product: Product }> = ({ product: { title, price, store } }) => {
  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  return (
    <div className="product-detail-right-column">
      <div className="flex items-center mb-4">
        <Avatar size={40} src={getImageUrl(store.profileImage.url)} />
        <div className="text-sm font-bold text-black ml-3">{store.businessInformation.name}</div>
      </div>
      <div className="mb-5">
        <div className="text-xl font-bold text-black">{title}</div>
        <div className="text-sm font-extrabold text-gray underline">Shop all Apple</div>
      </div>
      <div className="mb-5">
        <div className="text-32 font-bold text-black">${price}</div>
        <div className="flex items-center">
          <div className="flex">
            <img src="/assets/img/product-detail/yellow-star.png" />
            <img src="/assets/img/product-detail/yellow-star.png" />
            <img src="/assets/img/product-detail/yellow-star.png" />
            <img src="/assets/img/product-detail/gray-star.png" />
            <img src="/assets/img/product-detail/gray-star.png" />
          </div>
          <div className="text-sm text-gray underline ml-3">327</div>
        </div>
      </div>
      <div className="mb-5">
        <ul>
          <li>
            <span className="font-bold">Style:</span> 1st Generation
          </li>
          <li>
            <span className="font-bold">Size:</span> 11”
          </li>
          <li>
            <span className="font-bold">Color:</span> White
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <div className="text-base font-bold text-black mb-2">Quantity</div>
        <Select defaultValue="1" style={{ width: 80 }} onChange={handleChange}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
      </div>
      <div className="mb-5">
        <Button type="primary" className="rounded-full text-base py-2 px-5 bg-purple border-purple" size="large">
          Add to Basket
        </Button>
      </div>
      <div className="mb-5 flex">
        <div className="flex items-center mr-4">
          <img src="/assets/img/product-detail/like.svg" />
          <div className="text-base ml-3">3k Likes</div>
        </div>
        <div className="flex items-center mr-4">
          <img src="/assets/img/product-detail/share.svg" />
          <div className="text-base ml-3">2k Shares</div>
        </div>
        <div className="flex items-center">
          <img src="/assets/img/product-detail/comment.svg" />
          <div className="text-base ml-3">1k Comments</div>
        </div>
      </div>
      <div className="mb-5">
        <div className="text-base mb-2">Payments:</div>
        <img src="/assets/img/product-detail/credit-cards.png" />
      </div>
      <div className="mb-5">
        <div className="text-base mb-2">Delivery:</div>
        <div className="text-base">Estimated between Mon. Feb. 25 and Wed. Jan. 27</div>
      </div>
    </div>
  )
}

export default ProductInfo
