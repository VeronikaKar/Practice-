export function addDataLocalStorage(key, value) {
    try {
        const serializedData = JSON.stringify(value);
        localStorage.setItem(key, serializedData);
    } catch (err) {
        console.log(err.message);
    }
}


export function getDataFromLocalStorage(key) {
    try {
        const serializedData = JSON.parse(localStorage.getItem(key));
        return serializedData === null ? undefined:serializedData;
    } catch (error) {console.log(err.message);}
}
 addDataLocalStorage("s2", true);
console.log(getDataFromLocalStorage("s2"));

export function removeDataFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log(err.message);
    }

}
function removalAllData() {
    localStorage.clear();
}
// console.log(localStorage.length);
// console.log(Object.keys(localStorage));
// console.log(Object.values(localStorage));
// console.log(localStorage);
// localStorage.setItem("test", JSON.stringify({ name: "Bob" }));
// console.log(localStorage.getItem("test"));
// console.log(JSON.parse(localStorage.getItem("test")));
// console.log(localStorage.removeItem("s2"));
// console.log(removalAllData);