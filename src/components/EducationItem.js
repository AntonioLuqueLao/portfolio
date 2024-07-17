
const EducationItem = ({props}) => {
    return (
        <div className="education-item">
            <div className="education-item-profile-container">
                <div className="education-item-profile-wrapper">
                    <img className="education-item-profile-pic" src={props.src} alt={props.src}/>
                </div>
            </div>

            <div className="education-item-info-container">
            <span className="education-item-info">{props.curso} </span>
            <span style={{color: "gray"}}>{props.centro}</span>
            </div>
            <div className="education-item-contact-button-container">
                <a className="education-item-contact-button" href={props.url} target="_blank" rel="noopener noreferrer"><span>Contactar</span></a>
            </div>
        </div>
    )
}

export default EducationItem