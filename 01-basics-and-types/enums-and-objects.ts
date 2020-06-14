/*
 * Enums
 */
enum Role { ADMIN = 'Administrator', READ_ONLY = 'Read only', AUTHOR = 'Author' }
console.log(Role.ADMIN.toString());

/*
 * Object Types
 */
const person = {
    name: "John Doe",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ_ONLY
}

let favoritesActivities: string[];
favoritesActivities = ['Sports'];

let anyTypes: any[];
anyTypes = ['Sports', 123, false];
