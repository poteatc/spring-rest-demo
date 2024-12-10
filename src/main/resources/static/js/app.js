const apiUrl = '/api/users';

// Fetch and display all users
async function fetchUsers() {
    const response = await fetch(apiUrl);
    const users = await response.json();

    const userList = document.getElementById('user-list');
    userList.innerHTML = users.map(user => `
        <div>
            <span>${user.name} (${user.email})</span>
            <button onclick="deleteUser(${user.id})">Delete</button>
        </div>
    `).join('');
}

// Add a new user
document.getElementById('user-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    if (response.ok) {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        fetchUsers();
    }
});

// Delete a user
async function deleteUser(id) {
    const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    if (response.ok) {
        fetchUsers();
    }
}

// Initialize
fetchUsers();
