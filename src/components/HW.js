import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
// import PersonSP from "./person/ShowProfile";
import List from "./list/List";
function HW(props) {

    return (
        <div>
            <HeaderComponent />
            <List />
            {/* <PersonSP name="Gabriel" age="23" email="gsiqueira@josoftware.com.br" job="DevOps" /> */}
            <FooterComponent />
        </div>
    )

}

export default HW;