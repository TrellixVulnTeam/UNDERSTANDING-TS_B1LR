// const person: {
//    name: string;
//    age:  number;
// } = {
const person: {
    name: string, 
    age: number,
    hobbies:  string[],
    role: [number, string]
} = {
    name: 'Lionel',
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']    
};

//person.role.push('admin');
//person.role[1] = 10;

//person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby);
    //console.log(hobby.map()); !!! ERROR map does not exist in type string!
}