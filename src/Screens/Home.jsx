import Body from "../Components/Home/Body"
import Footer from "../Components/Home/Footer"
//import Logo from "../Components/Home/Logo"
//import GitHub from "../Components/Home/Github";
import OpenLink from "../Components/Core/OpenLink";
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import GitHubLogo from "../assets/github.svg";

const Home = () =>{
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <OpenLink redirectURL="https://vite.dev" logoImage={viteLogo} altDescription="Vite"/>
                    </td>
                    <td>
                        <OpenLink redirectURL="https://react.dev" logoImage={reactLogo} altDescription="React"/>
                    </td>
                    <td>
                        <OpenLink redirectURL="https://github.com" logoImage={GitHubLogo} altDescription="Github"/>
                    </td>
                </tr>
            </table>
            <Body />
            <Footer />
        </div>
    )
}
export default Home;