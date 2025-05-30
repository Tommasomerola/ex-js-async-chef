/* In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id).
 Questa funzione accetta un id di una ricetta e deve:
Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
Restituire la data di nascita dello chef


Note del docente:
Scrivi la funzione getChefBirthday(id), che deve:
Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch
Esempio di utilizzo

getChefBirthday(1)
  .then(birthday => console.log("Data di nascita dello chef:", birthday))
  .catch(error => console.error("Errore:", error.message));
Esempio di output atteso

Data di nascita dello chef: 1990-06-15 */


/* EX SVOLTO CON L AIUTO DI fetchJson */


/* async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj
}

const getChefBirthday = async(id) => {
    let recipe;
    try{
        recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    }catch(error){
        throw new Error(`non posso recuperare la ricetta di id:${id}`)
    }

    const user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`)
    return user.birthDate;
} */


    
    async function getChefBirthday(id) {
       
        
        const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
        const recipe = await recipeResponse.json()
        const chefResponse= await fetch(`https://dummyjson.com/users/${recipe.userId}`)
        const chef = await chefResponse.json();
        return chef.birthDate;
    }


(async() => {
    try{
        const birthday = await getChefBirthday(1)
        console.log(`data di nascita:`,birthday);
        }catch(error){
            console.error(`Errore`, error.message); 
        }
})();



