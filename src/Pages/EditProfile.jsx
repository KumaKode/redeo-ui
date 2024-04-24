import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header2 from "../Components/Header/Header2";
import Footer from '../Components/Footer/Footer';
import Profile from '../Components/EditProfile/Profile';
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";

const EditProfile = () => {
  return (
    <>
        <SearchForm/>
        <SidePanel/>
        <Header2/>
        <Breadcrumb topic={'My Profile'} topicSpan={'My Profile'}/>
        <Profile/>
        <Footer/>
    </>
  )
}

export default EditProfile