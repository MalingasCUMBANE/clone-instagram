import "./style.css"

export function Layout() {
    return (
        <>
            <div className="MainGrid">
                <div className="first-column" style={{ gridArea: "firstColumn" }}>
                    <div className="box">
                        Storys
                    </div>
                    <div className="post">
                        Post
                    </div>
                </div>
                <div className="suggestionbox" style={{ gridArea: "secondColumn" }}>
                    Sugestão
                </div>
            </div>

        </>
    )
}