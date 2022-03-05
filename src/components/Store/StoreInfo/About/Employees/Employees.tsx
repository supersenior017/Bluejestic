import { Row, Col } from 'antd';
import EmployeeSingle from './EmployeeSingle';

const Employees = () => {
    return (
        <div className="store-about-employees-wrapper store-card">
            <h4 className="store-card-title">Employees</h4>
            <Row>
                <Col span={6}>
                    <EmployeeSingle
                        image="/assets/img/store/about/emp-01.png"
                        name="James Bond"
                        position="Product Designer"
                    />
                </Col>
                <Col span={6}>
                    <EmployeeSingle
                        image="/assets/img/store/about/emp-02.png"
                        name="James Bond"
                        position="Marketing"
                    />
                </Col>
                <Col span={6}>
                    <EmployeeSingle
                        image="/assets/img/store/about/emp-03.png"
                        name="James Bond"
                        position="Founder/Owner"
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Employees
