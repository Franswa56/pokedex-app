import axios from 'axios';


// Fonction pour récupérer les données de l'API
const fetchData = async () => {
  try {
    const response = await axios.get('https://tyradex.vercel.app/api/v1/pokemon'); 
    const data = response.data;
    return data; 
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}

export { fetchData };

// fonction pour recup les données d'un seul pokémon 
const fetchPoke = async (id) => {
  try {
    // Correction ici: Utilisez des template literals pour injecter l'id
    const response = await axios.get(`https://tyradex.vercel.app/api/v1/pokemon/${id}`); 
    const data = response.data;
    return data; 
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}

export { fetchPoke };

const fetchRegionalData = async (gen) => {
  try {
    const response = await axios.get(`https://tyradex.vercel.app/api/v1/gen/${gen}`); 
    const data = response.data;
    return data; 
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}

export { fetchRegionalData };