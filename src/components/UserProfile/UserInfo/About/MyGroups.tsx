import Slider from 'react-slick';
import GroupSingle from './GroupSingle';

const MyGroups = () => {

    const carouselSetting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };


    return (
        <div className="user-profile-mygroups">
            <div className="user-profile-title-wrapper">
                <h5>My Groups</h5>
                <p>All</p>
            </div>
            <div className="user-profile-mygroups-slider">
                <Slider {...carouselSetting}>
                    <div className="carousel-item">
                        <GroupSingle
                            cover="/assets/img/user-profile/storecover-01.png"
                            groupname="Jane’s Store"
                        />
                    </div>
                    <div className="carousel-item">
                        <GroupSingle
                            cover="/assets/img/user-profile/storecover-02.png"
                            groupname="Nu Star Fashion"
                        />
                    </div>
                    <div className="carousel-item">
                        <GroupSingle
                            cover="/assets/img/user-profile/storecover-03.png"
                            groupname="Up Town Pastry"
                        />
                    </div>
                    <div className="carousel-item">
                        <GroupSingle
                            cover="/assets/img/user-profile/storecover-04.png"
                            groupname="City Art"
                        />
                    </div>
                    <div className="carousel-item">
                        <GroupSingle
                            cover="/assets/img/user-profile/storecover-01.png"
                            groupname="Jane’s Store"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default MyGroups
