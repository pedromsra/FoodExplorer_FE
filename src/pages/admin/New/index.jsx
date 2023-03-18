import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { api } from "../../../services/api";

import { Container, Form } from "./styles";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { MealIngredient } from "../../../components/MealIngredient";
import { TextArea } from "../../../components/TextArea";

import {FiUpload} from "react-icons/fi"
import {RiArrowLeftSLine, RiArrowDownSLine} from "react-icons/ri"

export function New() {

    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");

    const [newIngredient, setNewIngredient] = useState("");
    const [newImage, setNewImage] = useState()

    async function handleCreateMeal(){

        if(!title){
            return alert("O título é obrigatórios")
        }
        if(!description){
            return alert("A descrição é obrigatória")
        }
        if(!ingredients){
            return alert("Os ingredientes são")
        }
        if(!price){
            return alert("O preço é obrigatório")
        }
        if(!type){
            return alert("A categoria é obrigatória")
        }
        if(!newImage){
            return alert("A imagem é obrigatória")
        }

        const newMeal = {
            title,
            description,
            type,
            price,
            ingredients: ingredients
        }

        const response = await api.post(`/meals`, newMeal);

        const fileUploadForm = new FormData();
        fileUploadForm.append("image", newImage);
        await api.patch(`/meals/${response.data}/image`, fileUploadForm)

        navigate("/")
    }

    function handleNewIngredient(){
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleDeleteIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    function handleChangeImage(event){
        const file = event.target.files[0];

        setNewImage(file);
    }

    function handleBack(){
        navigate(-1)
    }

    return(
        <Container>
            <Header admin />
            <main>
                <ButtonText onClick={() => handleBack()} className="back" title="voltar" icon={RiArrowLeftSLine} />
                <h1>Adicionar prato</h1>
                <Form>
                    <div className="infos">
                        <div className="image info">
                            <p>Imagem do prato</p>
                            <label htmlFor="mealImage">
                                <FiUpload size={24} />
                                <div className="uploadLabel">Selecione imagem</div>
                                <input onChange={e=> handleChangeImage(e)} type="file" id="mealImage" />
                            </label>
                        </div>
                        <div className="name info">
                            <p>Nome</p>
                            <Input placeholder="Ex.: Salada Ceasar" onChange={e=>setTitle(e.target.value)} />
                        </div>
                        <div className="type info">
                            <p>Categoria</p>
                            <select onChange={e => setType(e.target.value)}>
                                <option value="">Selecione...</option>
                                <option value="meal">Refeição</option>
                                <option value="dessert">Sobremesa</option>
                                <option value="drink">Bebida</option>
                            </select>
                        </div>
                        <div className="ingredients info">
                            <p>Ingredientes</p>
                            <div className="ingredientsContainer">
                                {ingredients && ingredients.map(ingredient => (
                                    <MealIngredient key={String(ingredient)} isNew={false} value={ingredient} onClick={() => handleDeleteIngredient(ingredient)}/>
                                ))}
                                <MealIngredient isNew={true} placeholder="Adicionar" value={newIngredient} onChange={e => setNewIngredient(e.target.value)} onClick={() => handleNewIngredient()} />
                            </div>
                        </div>
                        <div className="price info">
                            <p>Preço</p>
                            <Input placeholder="R$ 25,99" onChange={e=>setPrice(e.target.value)} />
                        </div>
                        <div className="description info">
                            <p>Descrição</p>
                            <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"  onChange={e=>setDescription(e.target.value)}/>
                        </div>
                    </div>
                    <Button onClick={() => handleCreateMeal()} className="saveButton" title="Salvar alterações" />
                </Form>
            </main>
            <Footer />
        </Container>
    )
}