import Tweet from "./Tweet";

const aboutMeTweets = [
    {
        text: "¡Bienvenidos a mi Portfolio Web! Mi nombre es Antonio y soy un programador Full Stack centrado en JavaScript/TypeScript y Python y sus respectivos frameworks.",
        images: [],
        video: "",
    },
    {
        text: "A pesar de centrarme en estos lenguajes, tengo una buena base en Java",
        images: [],
        video: "",
    },
    {
        text: "Ahora mismo me hallo en la misión de convertirme en un programador todoterreno, por lo que mis propósitos a medio y largo plazo son, además de profundizar en las tecnologías que ya sé, adentrarme en el desarrollo móvil con React Native.",
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