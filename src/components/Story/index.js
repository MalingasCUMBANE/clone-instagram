import { useEffect, useState } from "react";
import "./style.css"
export function Story() {

    const [story, setStoey] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/MalingasCUMBANE/followers').then((response) => {
            return response.json()
        }).then((result) => setStoey(result)).catch((error) => {
            throw new Error(error)
        })
    }, [])

    return (
        <div className="container">
            {story.map((item, key) => (

                <div className="user-elements" key={key}>
                    <div>
                        <img className="image-user-story" src={`https://github.com/${item.login}.png`} />
                    </div>
                    <span>{item.login}</span>
                </div>
            ))}
        </div>
    )
}
