import Slider from 'react-slick';
import CategorySingle from './CategorySingle';

const Categories = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 750,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <div className="books-category-wrapper ">
            <div className="books-title-wrapper">
                <h2>Browse by Category</h2>
            </div>
            <Slider {...settings}>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="Romance"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#DFAFAF'}}
                        />
                    </div>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="Fiction"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#C16172'}}
                        />
                    </div>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="Non-Fiction"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#7799B9'}}
                        />
                    </div>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="Children"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#BED3F2'}}
                        />
                    </div>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="History"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#6C7CCD'}}
                        />
                    </div>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="Photography"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#CE804A'}}
                        />
                    </div>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="Mystery"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#F7B874'}}
                        />
                    </div>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="Business"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#CE9C52'}}
                        />
                    </div>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="History"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#965AC8'}}
                        />
                    </div>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="Photography"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#803DB8'}}
                        />
                    </div>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="Mystery"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#B3B3FF'}}
                        />
                    </div>
                    <div className="carousel-item">
                        <CategorySingle 
                            name="Business"
                            image="/assets/img/books/category.png"
                            categorystyle={{backgroundColor:'#8280FF'}}
                        />
                    </div>
                </Slider>
        </div>
    )
}

export default Categories
