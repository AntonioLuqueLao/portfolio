import Tweet from "./Tweet";

const Contact = () => {

    const cursos = [
        {
            text: "Curso desarrollo fullStack - Programa tucarreradigital.com CoreNetworks Sevilla - SEPE",
            images: "core_logo_2.png"
        },
        {
            text: "Curso preparación OCP Java SE 11 PUE Academy - SEPE",
            images: "core_logo_2.png"
        },
        {
            text: "Curso oficial PCAP y PCPP1TM Python PUE Academy - SEPE",
            images: "pue_logo.png"
        },
    ]

    return (
        <div className="tweets-wrapper">
            {cursos.map(tweet => {
                return (
                    <Tweet tweet={tweet}/>
                )
            })}
        </div>
    )
}

export default Contact;