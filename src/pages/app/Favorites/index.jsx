import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../../services/api";

import { Container } from "./styles";

import {Header} from "../../../components/Header";
import {Footer} from "../../../components/Footer";
import { FavoriteResume } from "../../../components/FavoriteResume";

export function Favorites(){
    const navigate = useNavigate();

    const [favorites, setFavorites] = useState([])
    const [image, setImage] = useState([])

    async function handleRemoveFavorite(favorite_id){
        const newFavorites = favorites.filter(favorite => favorite.id !== favorite_id)
        setFavorites(newFavorites)

        await api.delete(`/favorites/${favorite_id}`);
    }

    function handleFavoriteDetails(favorite_id){
        navigate(`/meal/${favorite_id}`)
    }

    useEffect(() => {
        async function fetchFavorites(){
            const response = await api.get(`/favorites`);
            setFavorites(response.data);
            const images = response.data.map(favorite => `${api.defaults.baseURL}/files/${favorite.image}`)
            setImage(images)
        }
        fetchFavorites();
    },[favorites])

    return (
        <Container>
            <Header />
            <main>
                <h1>Meus Favoritos</h1>
                <div className="favorites">
                    {favorites && favorites.map((favorite, index) => (
                        <FavoriteResume key={String(favorite.id)} title={favorite.title} image={image[index]} onTitleClick={() => handleFavoriteDetails(favorite.id)} onRemoveClick={() => handleRemoveFavorite(favorite.id)} />
                    ))}
                </div>
            </main>
            <Footer />
        </Container>
    )
}