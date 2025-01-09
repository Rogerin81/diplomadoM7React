import GitHubLogo from "../../assets/github.svg";
const Git = () =>{
    return(
        <div>
             <a href="https://github.com" target="_blank">
                <img src={GitHubLogo} className="logo" alt="GitHub logo"/>
            </a>
        </div>
    );
};
export default Git;