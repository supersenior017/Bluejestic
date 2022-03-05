import React  from 'react';
import Slider from 'react-slick';
import GiftImageItem from './GiftImageItem';

const SendGiftCard = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="SendGiftCard" style={{width:'100%', marginTop:'30px', marginBottom:'40px'}}>
      <div className="bg-white rounded-xl px-6 pt-8 pb-2">
        <div className="flex justify-between items-center px-10">
          <div className='text-lg font-medium'>Birthday gift Cards</div>
          <p className="text-purple-500">All</p>
        </div>
        <div className='w-full pt-2 px-4'>
          <Slider {...settings}>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/birthdayher.svg" content="Birthday for Her"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/birthdayhim.svg" content="Birthday for Him"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/birthday.svg" content="Birthday"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/kids.svg" content="Kids Birthday"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/birthdayher.svg" content="Birthday for Her"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/birthdayhim.svg" content="Birthday for Him"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/birthday.svg" content="Birthday"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/kids.svg" content="Kids Birthday"/>
            </div>
          </Slider>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 pb-2 mt-16">
        <div className="flex justify-between items-center px-10">
          <div className='text-lg font-medium'>Spectial occassions</div>
          <p className="text-purple-500">All</p>
        </div>
        <div className='w-full pt-2 px-4'>
          <Slider {...settings}>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/wedding.svg" content="Wedding & Engagement"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/thank&application.svg" content="Thank you & Appreciation"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/easter.svg" content="Easter Gifts"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/christmas.svg" content="Christmas"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/wedding.svg" content="Wedding & Engagement"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/thank&application.svg" content="Thank you & Appreciation"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/easter.svg" content="Easter Gifts"/>
            </div>
            <div className="carousel-item">
              <GiftImageItem url="../assets/img/summary/giftpage/christmas.svg" content="Christmas"/>
            </div>
          </Slider>
        </div>
      </div>         
    </div>
  )
}

export default SendGiftCard;
