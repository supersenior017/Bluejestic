import { Progress } from 'antd';

const Review = () => {
    return (
        <div className="store-about-review-wrapper store-card">
             <h4 className="store-card-title">Reviews</h4>
             <h4 className="ratings">Based On 22 Ratings</h4>
             <div className="star-rating">
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-o"></i>
             </div>
             <div className="ratings-wrapper">
                 <ul>
                     <li>
                         <span>5 Stars</span>
                         <Progress percent={70} className="rating-bar" />
                     </li>
                     <li>
                         <span>4 Stars</span>
                         <Progress percent={50} className="rating-bar" />
                     </li>
                     <li>
                         <span>3 Stars</span>
                         <Progress percent={40} className="rating-bar" />
                     </li>
                     <li>
                         <span>2 Stars</span>
                         <Progress percent={30} className="rating-bar" />
                     </li>
                     <li>
                         <span>1 Star</span>
                         <Progress percent={10} className="rating-bar" />
                     </li>
                 </ul>
             </div>
        </div>
    )
}

export default Review
