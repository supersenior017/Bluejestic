import { Menu, Dropdown } from 'antd';

const menu = (
    <Menu>
      <div className="menu-item">
          <img src="/assets/img/store/about/bookmark.svg" />
          <div>
              <h4>Bookmark</h4>
              <p>Add this product to your bookmarks</p>
          </div>
      </div>
      <div className="menu-item">
          <img src="/assets/img/store/about/share-feed.svg" />
          <div>
              <h4>Share on my feed</h4>
              <p>Post this product on my feed</p>
          </div>
      </div>
      <div className="menu-item">
          <img src="/assets/img/store/about/share-friend.svg" />
          <div>
              <h4>Share with Friends</h4>
              <p>Share this product with friends</p>
          </div>
      </div>
      <div className="social-profiles">
          <h4>Social Share</h4>
          <ul>
              <li>
                  <a href="#">
                      <img src="/assets/img/store/about/social-fb.svg" />
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="/assets/img/store/about/social-tw.svg" />
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="/assets/img/store/about/social-pin.svg" />
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="/assets/img/store/about/social-tum.svg" />
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="/assets/img/store/about/social-email.svg" />
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="/assets/img/store/about/social-link.svg" />
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src="/assets/img/store/about/social-whatsapp.svg" />
                  </a>
              </li>
          </ul>
      </div>
    </Menu>
  );

const ProductGridView = ({image, productname, price, discountprice, comments, likes, shares}) => {
    return (
        <div className="store-store-all-products-product-grid-view-wrapper">
            <div className="product-header">
                <img src="/assets/img/store/about/fav.svg" />
                <div className="product-action">
                    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}  overlayClassName="product-action-dropdown">
                        <img src="/assets/img/store/about/product-options.svg" />
                    </Dropdown>
                </div>
            </div>
            <div className="product-image">
                <img src={image} />
            </div>
            <div className="product-info">
                <h4><a href="#">{productname}</a></h4>
                <div className="product-prices">
                    <div className="prices">
                    <p className="discprice">{discountprice}</p>
                    <p className="price">{price}</p>
                    </div>
                </div>
                <div className="product-meta">
                <ul>
                    <li>
                        <img src="/assets/img/store/about/product-like.svg" />
                        <p>{likes}</p>
                    </li>
                    <li>
                        <img src="/assets/img/store/about/product-comment.svg" />
                        <p>{comments}</p>
                    </li>
                    <li>
                        <img src="/assets/img/store/about/product-share.svg" />
                        <p>{shares}</p>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default ProductGridView
