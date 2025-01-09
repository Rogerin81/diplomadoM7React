const OpenLink =({ redirectURL, logoImage,  altDescription}) =>{
    return(
        <>
             <a href={redirectURL} target="_blank">
                <img src={logoImage} className="logo" alt={`${altDescription} logo`}/>
            </a>
        </>
    );
};
export default OpenLink;