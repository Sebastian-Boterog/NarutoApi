import { useState, useEffect } from "react";
import { Character } from "../interfaces/Character";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL ;

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(`${API_URL}/characters`);
                console.log(response.data.characters);
                setCharacters(response.data.characters);
                setLoading(false);
            } catch (error) {
                console.error(`Error obteniendo characters:`, error);
            }
        };
        fetchCharacters();
    }, []);
    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="characters-container">
            {characters.map((character) => (
                <div key={character.id} className="characters-card">
                    <h3>{character.name}</h3>

                    {character.images && character.images[0] && (
                        <img src={character.images[0]} alt={character.name} />
                    )}

                    <p>
                        Clan: {character.personal?.clan ? character.personal.clan : "Desconocido"}
                    </p>

                    {Array.isArray(character.personal.team) && character.personal.team.length>0 
                    && (<p>Team : {character.personal.team.join(`,`)}</p>)
                    }
                </div>
            ))}
        </div>
    );

};

export default Characters;