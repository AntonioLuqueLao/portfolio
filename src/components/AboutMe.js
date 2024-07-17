import Tweet from "./Tweet";

const aboutMeTweets = [
    {
        text: "¡Bienvenidos a mi Portfolio Web! Mi nombre es Antonio y soy un programador Full Stack centrado en JavaScript y sus diferentes Frameworks, como podéis leer en la descripción de arriba.",
        images: [],
        video: "",
    },
    {
        text: "A pesar de centrarme en JavasScript y su variante tipada(TypeScript), tengo una buena base en otros dos lenguajes: Python y Java.",
        images: [],
        video: "",
    },
    {
        text: "Ahora mismo me hallo en la misión de convertirme en un programador todoterreno, por lo que mis propósitos a medio y largo plazo son, además de profundizar en las tecnologías que ya sé, adentrarme en el desarrollo móvil con React Native y aprender Django y PostgreSQL para ser más polivalente en el backend.",
        images: [],
        video: "",
    }
]

const AboutMe = () => {
    return (
        <div className="tweets-wrapper">
            {aboutMeTweets.map(tweet => {
                return (
                    <Tweet tweet={tweet}/>
                )
            })}
        </div>
    )
}

export default AboutMe;