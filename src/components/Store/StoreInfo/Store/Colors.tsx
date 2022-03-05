import { Checkbox } from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const Colors = () => {
    return (
        <div className="store-store-colors-wrapper store-card">
            <h4 className="store-card-title">Categories</h4>
            <ul className="store-checklist">
                <li>
                    <Checkbox onChange={onChange}>White</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={onChange}>Blue</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={onChange}>Black</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={onChange}>Pink</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={onChange}>Red</Checkbox>
                </li>
            </ul>
            <div className="text-right">
                <a href="#">Show more</a>
            </div>
        </div>
    )
}

export default Colors
