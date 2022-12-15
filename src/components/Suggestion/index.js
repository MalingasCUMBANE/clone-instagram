import { useEffect, useState } from "react"
import "./style.css"
export function Suggestion() {


    const [suggestion, setSuggestion] = useState([]);
    const [numberUsers, setNumberUser] = useState(5)

    const slice = suggestion.slice(0, numberUsers)

    useEffect(() => {
        fetch('https://api.github.com/users/MalingasCUMBANE/followers').then((response) => {
            return response.json()
        }).then((result) => setSuggestion(result)).catch((error) => {
            throw new Error(error)
        })
    }, [])

    var date = new Date();
    
    return (
        <div className="container-suggestion">
            
            <div className="header-suggestion">
                <img src="https://github.com/MalingasCUMBANE" />

                <div className="user-infos-suggestion">
                    <div className="infos">
                        <span>MalingasCUMBANE</span>
                        <p>Malingas Cumbane</p>
                    </div>

                    <button className="switch">Mudar</button>
                </div>

            </div>
            <div className="header-main-suggestion">
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>
            <div className="user-suggestion">
                {slice.map((suggestion, key) => (

                    <div className="infos-suggestion" key={key}>
                        <img src={`https://github.com/${suggestion.login}.png`} />

                        <div className="info-suggestion">
                            <span>{suggestion.login}</span>
                            <p>seguido por mac</p>
                        </div>
                        <button className="follow">Seguir</button>
                    </div>

                ))}

            </div>
            <footer className="footer-suggestion">
                <p> Sobre &bull; Ajuda &bull; Imprensa&bull; API&bull; Carreiras&bull; Privacidade&bull;Termos&bull;Principais contas&bull;Hastags&bull;Idioma</p>

                <p>&copy; {date.getFullYear()} INSTAGRAM FROM META</p>
            </footer>
        </div>
    )
}
