import { Row, Col } from 'antd'
import { User } from 'src/types'

const GeneralInformation: React.FC<{ currentUser: User }> = ({
  currentUser: { hobbies, education, workExperience, otherInterests },
}) => {
  return (
    <div className="user-profile-general-information">
      <div className="user-profile-title-wrapper">
        <h5>General Information</h5>
        <img src="/assets/img/user-profile/edit-icon.svg" />
      </div>
      <div className="content-wrapper">
        <Row gutter={30}>
          <Col span={12}>
            <div className="general-info">
              <div className="icon">
                <img src="/assets/img/user-profile/general-01.svg" />
              </div>
              <div className="content-wrapper">
                <h5>Hobbies</h5>
                <p>{hobbies}</p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="general-info">
              <div className="icon">
                <img src="/assets/img/user-profile/general-02.svg" />
              </div>
              <div className="content-wrapper">
                <h5>Education</h5>
                <p>{education}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col span={12}>
            <div className="general-info">
              <div className="icon">
                <img src="/assets/img/user-profile/general-03.svg" />
              </div>
              <div className="content-wrapper">
                <h5>Other Interests</h5>
                <p>{otherInterests}</p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="general-info">
              <div className="icon">
                <img src="/assets/img/user-profile/general-04.svg" />
              </div>
              <div className="content-wrapper">
                <h5>Work and experience</h5>
                <p>{workExperience}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default GeneralInformation
