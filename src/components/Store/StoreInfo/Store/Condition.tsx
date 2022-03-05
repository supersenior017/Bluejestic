import { Checkbox } from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}


const Condition = () => {
    return (
        <div className="store-store-condition-wrapper store-card">
            <h4 className="store-card-title">Condition</h4>
            <ul className="store-checklist">
                <li>
                    <Checkbox onChange={onChange}>New</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={onChange}>Used</Checkbox>
                </li>
            </ul>
            <div className="text-right">
                <a href="#">Show more</a>
            </div>
        </div>
    )
}

export default Condition
