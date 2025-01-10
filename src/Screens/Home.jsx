import Valor from "../Components/Counter/Valor"
import Body from "../Components/Home/Body"
import Footer from "../Components/Home/Footer"
//import Logo from "../Components/Home/Logo"
//import GitHub from "../Components/Home/Github";
import OpenLink from "../Components/Core/OpenLink";
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import GitHubLogo from "../assets/github.svg";
import { useSelector } from "react-redux";
const Home = () =>{
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            <span>{count}</span>
            <div>
            <OpenLink redirectURL="https://vite.dev" logoImage={viteLogo} altDescription="Vite"/>
            <OpenLink redirectURL="https://react.dev" logoImage={reactLogo} altDescription="React"/>
            <OpenLink redirectURL="https://github.com" logoImage={GitHubLogo} altDescription="Github"/>
            </div>
            <Body />
            <Footer />
        </div>
    )
}
export default Home;