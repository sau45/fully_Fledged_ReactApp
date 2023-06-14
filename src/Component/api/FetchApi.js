

const BASE_URL = "https://api.themoviedb.org/3";


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTJmNTI1MjAwZDExY2I1ZDYxODk3ZDMzYmFmMjZlNiIsInN1YiI6IjYzZTdjY2ZkYTJlNjAyMDA5MzI5YTlhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VfyglZ4wl_CxSiTJGeoR3B63balIjxM9hvX4lCWTaXc'
    }
}

export const FetchApi = async (url) => {
    
        try {
       
            const data =  await fetch(BASE_URL+url,options);
            return data;
        } catch (err) {
            console.log(err);
           
            return err;
        }

   
  
};