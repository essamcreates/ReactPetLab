import { useState } from "react";

const PetForm = ({postChocolate}) => {

    const [statePet, setStatePet] = useState(
        {
            name: "",
            type: "",
            breed: "",
            age: 0,
        }
    )

    const handleChange = (event) => {
        console.log(event);
        let propertyName = event.target.name;
        let clonedPet = {...statePet};
        clonedPet[propertyName] = event.target.value;
        setstatePet(clonedPet);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postChocolate(statePet)
        setstatePet({
            name: "",
            type: "",
            breed: "",
            age: 0
        })
    }


    return(
        <form id="pet-form" onSubmit={handleFormSubmit}>
            <h3>Add a new Pet</h3>

            <label htmlFor="pet-name">Pet Name:</label>
            <input
                id="pet-name"
                name="name"
                type="text"
                placeholder="enter pet name" 
                onChange={handleChange}
                value={statePet.name}
            />

            <label htmlFor="pet-type">Pet Type:</label>
            <input
                id="pet-type"
                name="petType"
                type="text"
                placeholder="enter pet type"
                onChange={handleChange}
                value={statePet.type}
            />

            <label htmlFor="pet-breed">Pet Breed:</label>
            <input
                id="pet-breed"
                name="petBreed"
                type="text"
                placeholder="enter pet breed"
                onChange={handleChange}
                value={statePet.type}
            />

            <label htmlFor="pet-age">Pet Age:</label>
            <input
                id="pet-age"
                name="petAge"
                type="number"
                min={1}
                max={100}
                placeholder="enter pet age"
                onChange={handleChange}
                value={statePet.age}
            />


            <input type="submit" value="Add Chocolate"/>          
        </form>
    )

}

export default ChocolateForm;