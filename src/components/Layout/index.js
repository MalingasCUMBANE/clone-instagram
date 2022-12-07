import { Post } from "../Post"
import { Story } from "../Story"
import "./style.css"

export function Layout() {
    return (
        <>
            <div className="MainGrid">
                <div className="first-column" style={{ gridArea: "firstColumn" }}>
                    <div className="box">
                        <Story />
                    </div>
                    <div className="box">
                        <Post />
                    </div>
                </div>
                <div className="suggestionbox" style={{ gridArea: "secondColumn" }}>
                    Sugestão
                </div>
            </div>

        </>
    )
}
// starting marathon    