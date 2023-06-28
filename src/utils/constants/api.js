import axios from 'axios';

export const fetchProvinsiData = async () => {
  try {
    const response = await axios.get(
      'https://covid-fe-2023.vercel.app/api/indonesia.json'
    );
    return response.data.indonesia;
  } catch (error) {
    console.log(error);
    return [];
  }
};
