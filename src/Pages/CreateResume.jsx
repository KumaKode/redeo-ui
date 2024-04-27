import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header2 from "../Components/Header/Header2";
import Footer from '../Components/Footer/Footer';
import ResumeSection from '../Components/EditProfile/ResumeSection';
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";

const CreateResume = () => {
  return (
    <>
        <SearchForm/>
        <SidePanel/>
        <Header2/>
        <Breadcrumb topic={'Resume'} topicSpan={'Resume'}/>
        <ResumeSection/>
        <Footer/>
    </>
  )
}

export default CreateResume