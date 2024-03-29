import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'







export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => { 
         fetch('https://api.github.com/users/Luiz-Fel/repos', {
            headers: {
                'Authorization': 'token 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',
            },
        })
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);


    return (
        

        <section className="repository-list">
        <h1>Lista de repositórios</h1>
        <ul>
            {repositories.map(repository => {
                return <RepositoryItem repository={repository} />
            })}
             
        </ul>
        </section>
    );
}