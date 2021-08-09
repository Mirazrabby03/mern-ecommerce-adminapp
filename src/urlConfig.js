//export const api = 'http://localhost:2000/api';
export const api = 'https://ecommerce-rest-server-f.herokuapp.com/api';
export const generatePublicUrl =(fileName) =>{
    return `https://ecommerce-rest-server-f.herokuapp.com/public/${fileName}`;
}