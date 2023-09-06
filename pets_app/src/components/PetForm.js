import { useState } from "react";

const PetForm = ({ postPet }) => {

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
        let clonedPet = { ...statePet };
        clonedPet[propertyName] = event.target.value;
        setStatePet(clonedPet);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postPet(statePet)
        setStatePet({
            name: "",
            type: "",
            breed: "",
            age: 0
        })
    }


    return (
        <form id="pet-form" onSubmit={handleFormSubmit}>
            <h3>Add a New Pet</h3>

            <label htmlFor="pet-name">Pet Name:</label>
            <input
                id="pet-name"
                name="name"
                type="text"
                placeholder="Enter Pet Name"
                onChange={handleChange}
                value={statePet.name}
            />

            <label htmlFor="pet-type">Pet Type:</label>
            <input
                id="pet-type"
                name="type"
                type="text"
                placeholder="Enter Pet Type"
                onChange={handleChange}
                value={statePet.type}
            />

            <label htmlFor="pet-breed">Pet Breed:</label>
            <input
                id="pet-breed"
                name="breed"
                type="text"
                placeholder="Enter Pet Breed"
                onChange={handleChange}
                value={statePet.breed}
            />


            <label htmlFor="age">Pet Age:</label>
            <input
                type="number"
                min={1}
                max={200}
                id="pet-age"
                name="age"
                value={statePet.age}
                onChange={handleChange}
                required
            />

            <input type="submit" value="Add Pet" />
        </form>
    )

}

export default PetForm;