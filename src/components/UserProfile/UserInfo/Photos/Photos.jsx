import Gallery from 'react-grid-gallery';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item key="1">
            Videos
        </Menu.Item>
        <Menu.Item key="2">
            Photos
        </Menu.Item>
    </Menu>
);

const menu1 = (
    <Menu>
        <Menu.Item key="1">
            Latest
        </Menu.Item>
        <Menu.Item key="2">
            Oldest
        </Menu.Item>
    </Menu>
);

const Photos = () => {
    const IMAGES =
        [{
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 183,
            caption: "37H (gratispgraphy.com)"
        },
        {
            src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
            thumbnailWidth: 271,
            thumbnailHeight: 320,
            caption: "Orange Macro (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "201H (gratisography.com)"
        },
        {
            src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
            thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
            thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Man on BMX (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
            thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
            thumbnailWidth: 257,
            thumbnailHeight: 320,
            caption: "A photo by 贝莉儿 NG. (unsplash.com)"
        }]

    return (
        <div>
            <div className="user-profile-photos-actions">
                <h5>Photos/Videos</h5>
                <div className="action-wrapper">
                    <div className="media-type">
                        <p>Media Type</p>
                        <Dropdown overlay={menu}>
                            <Button>
                                Videos <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                    <div className="sorting">
                        <p>Sort:</p>
                        <Dropdown overlay={menu1}>
                            <Button>
                                Latest <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                    <div className="gallery-view">
                        <p>View:</p>
                        <img src="/assets/img/user-profile/list-view.svg" />
                        <img src="/assets/img/user-profile/grid-view.svg" />
                    </div>
                </div>
            </div>
            <div className="gallery-images-wrapper">
                <Gallery images={IMAGES} />
            </div>
        </div>
    )
}

export default Photos
