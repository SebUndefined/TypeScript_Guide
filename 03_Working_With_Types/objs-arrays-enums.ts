enum Gender {
    MALE = 10,
    FEMALE = 20,
    NON_BINARY = 30
};

const person : 
{
    name: string;
    age: number;
    hobbies: string[],
    // Tuples
    roles: [number, string],
    gender: Gender
} = { 
        name: 'Sébastien',
        age: 31,
        hobbies:['Sport', 'Chess'],
        roles: [1, "author"],
        gender: Gender.MALE
    };


console.log(person.name);
for(const hobby of person.hobbies)
{
    console.log(hobby.toUpperCase());
}