import Slider from 'react-slick'
import CardProduct from '../shared/Common/CardProduct'
import Heading from 'src/components/shared/Common/Heading'
import Product_Filter_PAGE_QUERY from 'src/graphql/queries/getFilterProductPageQuery'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import getImageUrl from 'src/utils/getImageUrl'
import { Product } from 'src/types'

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 750,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
}

const RelatedProducts = () => {
  const router = useRouter()

  const { loading, error, data } = useQuery<{ products: Product[] }>(Product_Filter_PAGE_QUERY, {
    variables: { id: router.query.id },
  })

  if (loading) return <h1>'Loading...'</h1>
  if (error) return <h1>`Error! ${error.message}`</h1>

  const { products } = data

  return (
    <div className="related-products mb-5">
      <Heading align="center" title="You May Also Like" />
      <div className="bg-white p-4 mt-4">
        <Slider {...settings}>
          {products.map(({ id, store, images, title, price }) => (
            <div key={id} className="p-3">
              <CardProduct
                storeName={store.businessInformation.name}
                storeImage={getImageUrl(store.profileImage.url)}
                productImage={getImageUrl(images[0].url)}
                productName={title}
                price={price}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default RelatedProducts
