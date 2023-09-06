import { useEffect, useState } from "react";
import PetList from "../components/PetList";
import PetForm from "../components/PetForm";

const PetsContainer = () => {

    const [pets, setPets] = useState([]);

    const fetchPet = async () => {
        const response = await fetch("http://localhost:8080/pets");
        const data = await response.json();
        // you can format data here - filter, removing unneccessary values etc
        setPets(data);
    }

    
    useEffect( () => {
        fetchPet();
    }, [])

    const postPet = async (newPet) => {
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPet)
        })
        const savedPet = await response.json();
        setPets( [...pets, savedPet] );
    }

    const deletePet = async (id) => {
        await fetch("http://localhost:8080/pets/" + id, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        const keptPets = pets.filter((pet) => pet.id !== parseInt(id))
        setPets(keptPets);
    }
    
    return(
        <>
            <PetForm pets={pets} postPet={postPet}/>
            <PetList pets={pets} deletePet={deletePet}/>
        </>
    )

}

export default PetsContainer;