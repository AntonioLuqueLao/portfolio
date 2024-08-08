import Tweet from "./Tweet";

const Contact = () => {

    const cursos = [
        {
            text: "Curso desarrollo fullStack - Programa tucarreradigital.com CoreNetworks Sevilla - SEPE impartido por Alejandro Talaminos. Curso presencial de 260 horas donde descubrí el maravillos mundo del desarrollo web. Desde entonces he estado estudiando durante más de dos años de forma autodidacta principalmente",
            images: "core_logo_2.png"
        },
        {
            text: "Curso preparación OCP Java SE 11 PUE Academy - SEPE impartido por Alfredo Usain. Aunque ya tenía una idea de cómo usar Java, en este curso pude profundizar en mis conocimientos y ponerlos en practica.",
            images: "core_logo_2.png"
        },
        {
            text: "Curso oficial PCAP y PCPP1TM Python PUE Academy - SEPE. Curso en el que aprendí las bases de Python.",
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