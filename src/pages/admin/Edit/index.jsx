import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
import {RiArrowLeftSLine} from "react-icons/ri"

export function Edit() {

    const params = useParams();
    

    const navigate = useNavigate()

    
    const [imageFile, setImageFile] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [ingredients, setIngredients] = useState();
    const [price, setPrice] = useState();
    const [type, setType] = useState();

    const [newIngredient, setNewIngredient] = useState();
    const [newImage, setNewImage] = useState()
    
    
    async function handleUpdateMeal(editImageFile){

        
        if(editImageFile){
            const fileUploadForm = new FormData();
            fileUploadForm.append("image", editImageFile);
            const response = await api.patch(`/meals/${params.id}/image`, fileUploadForm)
        }
        const editMeal = {
            title,
            description,
            type,
            price,
            ingredients: ingredients
        }
        await api.put(`/meals/${params.id}`, editMeal);

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

    useEffect(()=>{
        async function fetchMeal(){
            const response = await api.get(`/meals/${params.id}`)

            setTitle(response.data.title);
            setDescription(response.data.description);
            setType(response.data.type);
            setPrice(response.data.price);
            setImageFile(response.data.image);
            const ingredientsMeal = response.data.ingredients.map(ingredient => ingredient.name)
            setIngredients(ingredientsMeal)
        }
        fetchMeal()
    },[])
    
    

    return(
        <Container>
            <Header admin />
            <main>
                <ButtonText onClick={() => handleBack()} className="back" title="voltar" icon={RiArrowLeftSLine} />
                <h1>Editar prato</h1>
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
                            <Input placeholder="Ex.: Salada Ceasar" value={title} onChange={e=>setTitle(e.target.value)}/>
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
                            <Input placeholder="R$ 25,99" value={price} onChange={e=>setPrice(e.target.value)} />
                        </div>
                        <div className="description info">
                            <p>Descrição</p>
                            <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" value={description} onChange={e=>setDescription(e.target.value)} />
                        </div>
                    </div>
                    <div className="buttons">
                        <Button onClick={() => handleExcludeMeal()} className="deleteButton" title="Excluir prato" />
                        <Button onClick={() => handleUpdateMeal(newImage)} className="saveButton" title="Salvar alterações" />
                    </div>
                </Form>
            </main>
            <Footer />
        </Container>
    )
}