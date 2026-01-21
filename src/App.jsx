import { useState } from "react"
import languages from "./data/languages"
import Button from "./components/Button"

function App() {

    const user = "Leonardo";

    const prettyLog = (text) => {
        console.log(`${user} ha cliccato il pulsante ${text}`);
    }

    return (
        <div>
            <h1>Learn Web Development</h1>
            {
                languages.map(lang => {
                    return <Button text={lang.title} onSelect={() => prettyLog(lang.title)} />
                })
            }
        </div>

    )
}

export default App