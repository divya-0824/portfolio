async function fetchUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        users.map(user => console.log(user.address.street));
    } catch (error) {
        console.log("Error fetching users:", error);
    }
}

fetchUsers();