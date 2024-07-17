import Tweet from "./Tweet";

const Projects = () => {

    const ProjectsTweets = [
        {
            text: `AVISO: los proyectos con backend están subidos a la capa grauita de Render. Si no responden inmediatamente es porque el servidor se está iniciando. Ruego paciencia.`,
            link:  "",
            images: [],
            video: "",
        },
        {
            text: `Mi “proyecto de fin de grado autoimpuesto”. Un clon de instagram en el que te puedes registrar(con confirmación), logear, subir fotos y comentarios, dar like y seguir a otros usuarios…etc. Cada botón es interactivo, todo hace algo. No solo es una prueba de mis capacidades, sino de mi ambición y mi resiliencia.`,
            link:  "https://frontend-red-social.vercel.app/",
            images: [],
            video: "/react-app-google-chrome-2024-07-17-16-12-57_tGQdknZu.mp4",
        },
        {
            text: "Pasarela de pago realizada con Stripe. Proyecto relativamente sencillo pero muy práctico cuya máxima dificultad radica en leer y comprender una documentación no muy amistosa con el principiante.",
            images: [],
            video: "/video-pasarela.mp4",
        },
        {
            text: "Chat en tiempo real realizado con websockets. Aunque empezó como un proyecto individual, al final lo acabé incorporando a mi red social. Tiene check y doble check, se pueden borrar mensajes, se pueden responder mensajes específicos, y puedes saber tanto la hora como el día en el que cada uno de los mensajes fueron enviados. ",
            images: [],
            video: "/video-chat.mp4",
        },
        {
            text: "En mi github podéis encontrar múltiples repositorios con otros proyectos, que aunque menos vistosos, sirven para demostrar mi habilidad en otros campos. Tenéis formularios realizados con TypeScript, pequeños proyectos con APIs ajenas, landing pages y carruseles, entre otras cosas.",
            images: [],
            video: "",
        },
    ]

    return (
        <div className="tweets-wrapper">
            {ProjectsTweets.map(tweet => {
                return (
                    <Tweet tweet={tweet}/>
                )
            })}
        </div>
    )
}

export default Projects;