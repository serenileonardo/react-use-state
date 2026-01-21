import { useState } from "react"
import languages from "./data/languages"
import Button from "./components/Button"
import './index.css';


function App() {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

    return (
        <div>
            <h1>Learn Web Development</h1>

            {/* Bottoni */}
            <div className="button-container">
                {languages.map((lang) => (
                    <button className="button" key={lang.id} onClick={() => setSelectedLanguage(lang)}>
                        {lang.title}
                    </button>
                ))}
            </div>


            <div className="card-container">
                <div className="card">
                    <h2>{selectedLanguage.title}</h2>
                    <p>{selectedLanguage.description}</p>
                </div>
            </div>
        </div>
    )
}




export default App