import EducationItem from "./EducationItem";

const Education = () => {

    const cursos = [
        {
            curso: "AntonioLuqueLao",
            centro: "Github",
            src: "/github-logo.png",
            url: "https://github.com/AntonioLuqueLao"
        },
        {
            curso: "Antonio Luque Lao",
            centro: "LinkdIn",
            src: "/logo-linkdin.webp",
            url: "https://www.linkedin.com/in/antonio-luque-lao-3b5b11221/"
        },
        {
            curso: "antonioluquelao",
            centro: "@gmail.com",
            src: "/gmail-new-icon5198.jpg",
            url: "mailto:antonioluquelao@gmail.com?Subject=Oferta%20de%empleo"
        },
    ]
    return (
        <div className="education-wrapper">
            <h3>Contacto</h3>
            <EducationItem props={cursos[0]}/>
            <EducationItem props={cursos[1]}/>
            <EducationItem props={cursos[2]}/>
        </div>
    )
}

export default Education