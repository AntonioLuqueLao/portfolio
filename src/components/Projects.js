import Tweet from "./Tweet";

const Projects = () => {

    const ProjectsTweets = [
        {
            text: "ddassadsd",
            images: [],
            video: "/react-app-google-chrome-2024-07-17-16-12-57_tGQdknZu.mp4",
        },
        {
            text: "ddassadsd",
            images: [],
            video: "/video-pasarela.mp4",
        },
        {
            text: "ddassadsd",
            images: [],
            video: "/video-chat.mp4",
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