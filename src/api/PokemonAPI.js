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

const fetchRegionalData = async () => {
  try {
    const response = await axios.get('https://tyradex.vercel.app/api/v1/gen/6'); 
    const data = response.data;
    return data; 
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}

export { fetchRegionalData };