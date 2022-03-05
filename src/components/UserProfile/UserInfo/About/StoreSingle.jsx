const StoreSingle = ({ cover, storename, storeimage, followers, products }) => {
    return (
        <div className="user-profile-store-single">
            <div className="store-wrapper">
                <div className="store-cover">
                    <div className="cover" style={{backgroundImage: `url(${cover})`}}></div>
                    <div className="store-info">
                        <img src={storeimage} alt="" />
                        <h5><a href="#">{storename}</a></h5>
                    </div>
                </div>
                <div className="store-meta">
                    <div className="store-meta-info">
                        <h5>{followers}k</h5>
                        <p>Followers</p>
                    </div>
                    <div className="store-meta-info">
                        <h5>{products}k</h5>
                        <p>Products</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StoreSingle
