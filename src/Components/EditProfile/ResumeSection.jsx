import ProfileSection from "./ProfileSection";
import QualificationSection from "./QualificationSection";
import ExperienceSection from "./ExperienceSection";
import DocumentSection from "./DocumentSection";

const ResumeSection = () => {
  return (
    <section className="edit-profile-section container-fluid">
      <div className="container edit-profile-container">
        <DocumentSection />
        <ProfileSection />
        <QualificationSection />
        <ExperienceSection />
      </div>
    </section>
  );
};

export default ResumeSection;
