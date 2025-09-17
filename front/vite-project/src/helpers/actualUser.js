export function getUserIdFromLocalStorage() {
    try {
        const userData = localStorage.getItem("user");
        if(userData) {
        const user = JSON.parse(userData);
        console.log(user)
        return user.id;
    }
    } catch (error) {
        console.log("Error al parsear datos desde local storage");
    } 
}