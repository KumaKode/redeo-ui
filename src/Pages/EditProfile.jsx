import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header2 from "../Components/Header/Header2";
import Footer from '../Components/Footer/Footer';
import EditProfileSection from '../Components/EditProfile/EditProfileSection';
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";

const EditResume = () => {
  return (
    <>
        <SearchForm/>
        <SidePanel/>
        <Header2/>
        <Breadcrumb topic={'Edit Profile'} topicSpan={'Edit Profile'}/>
        <EditProfileSection/>
        <Footer/>
    </>
  )
}

export default EditResume