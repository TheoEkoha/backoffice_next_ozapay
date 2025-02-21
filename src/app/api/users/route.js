// src/app/api/users/route.js

export async function GET(request) {
    try {
        const response = await fetch('http://localhost:4000/users'); // Appel à l'API Nest.js
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        }); // Renvoie les données au client
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        }); // Gestion des erreurs
    }
}