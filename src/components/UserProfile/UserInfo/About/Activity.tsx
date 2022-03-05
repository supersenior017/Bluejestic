import Slider from 'react-slick';
import ActivitySingle from './ActivitySingle';
import { Row, Col } from 'antd';
import { Doughnut } from 'react-chartjs-2';

const Activity = () => {

    const carouselSetting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    const data = {
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              '#E84841',
              '#FF7D23',
              '#2C487F',
              '#B5BBC6',
              '#3B6AE3',
            ],
            borderColor: [
                '#E84841',
                '#FF7D23',
                '#2C487F',
                '#B5BBC6',
                '#3B6AE3',
            ],
            borderWidth: 1,
          },
        ],
      };


    return (
        <div className="user-profile-activity">
            <div className="user-profile-title-wrapper">
                <h5>General Information</h5>
                <p>All</p>
            </div>
            <div className="user-profile-activity-slider">
                <Slider {...carouselSetting}>
                    <div className="carousel-item">
                        <ActivitySingle
                            image="/assets/img/user-profile/activity-01.png"
                            name="Who’s into fashion like me?"
                            description="Check out these jean’s from
                            my favorite brand"
                            storeimage="/assets/img/user-profile/store-01.png"
                            storename="Edifier Store"
                            comments="12"
                            shares="2"
                        />
                    </div>
                    <div className="carousel-item">
                        <ActivitySingle
                            image="/assets/img/user-profile/activity-01.png"
                            name="Who’s into fashion like me?"
                            description="Check out these jean’s from
                            my favorite brand"
                            storeimage="/assets/img/user-profile/store-01.png"
                            storename="Edifier Store"
                            comments="12"
                            shares="2"
                        />
                    </div>
                    <div className="carousel-item">
                        <ActivitySingle
                            image="/assets/img/user-profile/activity-01.png"
                            name="Who’s into fashion like me?"
                            description="Check out these jean’s from
                            my favorite brand"
                            storeimage="/assets/img/user-profile/store-01.png"
                            storename="Edifier Store"
                            comments="12"
                            shares="2"
                        />
                    </div>
                    <div className="carousel-item">
                        <ActivitySingle
                            image="/assets/img/user-profile/activity-01.png"
                            name="Who’s into fashion like me?"
                            description="Check out these jean’s from
                            my favorite brand"
                            storeimage="/assets/img/user-profile/store-01.png"
                            storename="Edifier Store"
                            comments="12"
                            shares="2"
                        />
                    </div>
                </Slider>
            </div>
            <div className="user-profile-activity-data">
                <Row gutter={30}>
                    <Col span={18}>
                        <ul>
                            <li className="data-red">
                                <p>Post</p>
                                <span>238</span>
                            </li>
                            <li className="data-orange">
                                <p>Shares</p>
                                <span>28</span>
                            </li>
                            <li className="data-navy-blue">
                                <p>Cellphones</p>
                                <span>189</span>
                            </li>
                            <li className="data-gray">
                                <p>Chargers</p>
                                <span>462</span>
                            </li>
                            <li className="data-blue">
                                <p>Home Appliances</p>
                                <span>211</span>
                            </li>
                        </ul>
                    </Col>
                    <Col span={6}>
                        <Doughnut data={data} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Activity
