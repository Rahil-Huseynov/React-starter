interface IPetlist{
    name:string,
    type:string,
    age:number
}

export const PetList = () => {
    const pets = [
        { name: 'Miss.Sofi', type: 'Cat', age: 1 },
        { name: 'Mr.Tobi', type: 'Dog', age: 4 },
        { name: 'Mr.Hamster', type: 'Hamster', age: 1 }
    ];
    
    const Pet: React.FC<IPetlist> = ({ name, type, age }) => {
        return (
            <div>
                <h2>{name}</h2>
                <h3>Tip: {type}</h3>
                <h3>Yaş: {age}</h3>
            </div>
        );
    };

    return (
        <div>
            <h1>Heyvan proqramı</h1>
            {pets.map((pet, index) => (
                <Pet key={index} name={pet.name} type={pet.type} age={pet.age} />
            ))}

        </div>
    );
};