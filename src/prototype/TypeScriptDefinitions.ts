export type User = {
    name: string;
    address: {
        city: string;
        uf: string;
    }
}

function showWelcomeMessage(user: User){
    return `Welcome ${user.name} (${user.address.city}, ${user.address.uf})`
}