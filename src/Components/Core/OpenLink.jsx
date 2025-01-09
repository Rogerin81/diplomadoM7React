const OpenLink =({ redirectURL, logoImage,  altDescription}) =>{
    return(
        <div>
             <a href={redirectURL} target="_blank">
                <img src={logoImage} className="logo" alt={`${altDescription} logo`}/>
            </a>
        </div>
    );
};
export default OpenLink;