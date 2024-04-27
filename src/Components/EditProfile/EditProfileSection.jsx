import {useRef, useEffect, useState} from 'react';
import CONSTANTS from "../../Constants/Constants";
import ProfileSection from "./ProfileSection";
import QualificationSection from "./QualificationSection";
import ExperienceSection from "./ExperienceSection";

const SECTIONS_ARRAY   = [
  <ProfileSection key="profile" />,
  <QualificationSection key="qualification" />,
  <ExperienceSection key="experience" />,
  // <SocialSection key="social" />,
  // <SkillsSection key="skills" />
];
const EditProfileSection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabRefs = useRef([]);


  const handleTab = (index) => {
    tabRefs.current.forEach((element) => {
      element.classList.remove("active-tab");
    });
    tabRefs.current[index].classList.add("active-tab");
    setActiveTabIndex(index);
  }

  useEffect(() => {
    tabRefs.current[0].classList.add("active-tab");
  }, [])
  return (
    <div className="container-fluid edit-profile-fluid-container">
      <div className="row p-0">
        <div className="col-lg-3 col-xl-3 p-0">
          <div className="edit-profile-tabs">
            <ul className="edit-nav-tabs" id="profileTabs" role="tablist">
              {
                CONSTANTS.SETTING_TABS.map((element, index) => (
                  <li className="side-tab" key={index} ref={(ref) => tabRefs.current[index] = ref} onClick={() => handleTab(index)}>
                  <div className='tab-content'>
                  <span><i className={`${CONSTANTS.SETTING_TABS_ICOS[index]}`}></i></span>
                    <span>{element}</span>
                  </div><span><i className="far fa-chevron-right"></i></span></li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className='col-lg-9 col-xl-9 p-0'>{SECTIONS_ARRAY[activeTabIndex]}</div>
      </div>
    </div>
  )
}

export default EditProfileSection;