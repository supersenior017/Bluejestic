import { Checkbox } from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}


const Brand = () => {
    return (
        <div className="store-store-brand-wrapper store-card">
            <h4 className="store-card-title">Categories</h4>
            <ul className="store-checklist">
                <li>
                    <Checkbox onChange={onChange}>Sony</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={onChange}>Samsung</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={onChange}>LG</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={onChange}>Panasonic</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={onChange}>Yamaha</Checkbox>
                </li>
            </ul>
            <div className="text-right">
                <a href="#">Show more</a>
            </div>
        </div>
    )
}

export default Brand
