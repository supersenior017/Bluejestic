import classNames from 'classnames'
import { Avatar, Button } from 'antd'

interface Props {
  storeName: string
  storeImage: string
  productName: string
  productImage: string
  price: string
}

const CardProduct = ({ storeName, storeImage, productName, productImage, price }: Props) => {
  return (
    <div className={classNames('card-product', 'bg-white', 'rounded-2xl', 'border', 'border-gray-50', 'p-4')}>
      <div className="flex items-center mb-4">
        <Avatar size={32} src={storeImage} />
        <div className="text-sm font-bold text-black ml-3">{storeName}</div>
      </div>
      <div className="flex justify-content-center mb-4">
        <img src={productImage} />
      </div>
      <div className="mb-2">
        <a href="#" className={classNames('text-black', 'text-sm')}>
          {productName}
        </a>
      </div>
      <div className={classNames('text-red-700', 'font-medium', 'mb-3')}>{price}</div>
      <div className="text-center">
        <Button type="primary" className="rounded-full text-base px-4 bg-purple border-purple text-12">
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default CardProduct
