export async function fetchAddressSuggestions(query, limit = 5) {
    try {
        const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${query}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.features
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}