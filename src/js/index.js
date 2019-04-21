import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '83cd87cd6a96be9be45079b605581dff'; 
    try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        console.log(res);    
    } catch (error) {
        console.log(error);
    }
   
}

getResults('pizza');
