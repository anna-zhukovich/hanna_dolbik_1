const users: string[] = [
    'Darya',
    'Masha',
    'Denis',
    'Vitaliy',
    'Polina',
    'Anton',
];

function getNewUsers(user: string, index: number): string {
    return `member ${index + 1}: ${user}`;
}
console.log(users.map(getNewUsers));

const getNewArrayUsers: string[] = users.map((member: string, index: number) => `member ${index + 1}: ${member}`);
console.log(getNewArrayUsers);