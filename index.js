"use strict";
let myVar = "Stefano";
let myFunc = () => {
    return "ciao";
};
console.log(myVar);
let myVar2 = 20;
myVar2 = 124;
let myVar3 = null;
let myVar4 = 50;
myVar4 = "Stefano"; // come si può notare: un qualsiasi valore può essere assegnato, rendendo di fatto inutile TS e i suoi controlli.
// il DATA TYPE in questo caso l'abbiamo forzato, anche se non era strettamente necessario. TS è già in grado di rilevare il tipo in arrivo come valore della variabile
// questa funzionalità è chiamata TYPE INFERENCE - la capacità di TS di assegnare automaticamente un tipo.
// TIPI PRIMITIVI
// string
// number
// boolean
// null
// undefined
// any !! DA USARE CON MOLTA CAUTELA !!
// unknown - per ogni tipo non ancora conosicuto, ma che magari si conoscerà in futuro
// TIPI STRUTTURALI
// array
// object
// function?
const sum = (num1, num2) => {
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
        return n1 + n2;
    }
    else {
        return "Devi passare valori numerici";
    }
};
console.log(sum(2, "akjnasd"));
const sumWithTypeScript = (num1, num2) => {
    return num1 + num2;
};
// sumWithTypeScript("3", "5").repeat(2);
sumWithTypeScript(3, 5).toFixed(2);
// Grazie alla "type inference" TS è in grado di rilevare in automatico anche il valore in uscita della funzione, capendolo dal contesto interno della funzione stessa
// se invece vogliamo essere sicuri che il tipo in uscita sia uno particolare (es forzare number) lo si potrà fare applicando i due punti dopo le parentesi (): number =>
// con l'operatore | si definisce UNION TYPE
const mixedAddition = (par1, par2) => {
    if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
        return par1 + par2;
    }
    else {
        return "MIXED ADDITION: Devi passare valori numerici";
    }
};
console.log(mixedAddition(2, "5"));
const mixedAddition2 = (par1, par2) => {
    if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
        return par1 + par2;
    }
    else {
        return "MIXED ADDITION: Devi passare valori numerici";
    }
};
console.log(mixedAddition2("2", 5));
const additionWithOptionalParams = (str1, str2) => {
    return str1.concat(str2 || "...");
};
console.log(additionWithOptionalParams("Epicode"));
// unknown Type
let maybe; // unknown è un tipo che in futuro potrebbe cambiare
if (maybe === true) {
    const myBoolean = maybe;
    // const myNewString: string = maybe // errore, boolean (maybe) non è assegnabile al tipo stringa
}
if (typeof maybe === "string") {
    const myNewString = maybe; // qui maybe ha acquisito grazie al contesto del condizionale il tipo "string", assegnabile alla variabile myNewString
}
// ARRAY
const _myArray = [];
_myArray.push(2);
_myArray.push("2");
_myArray.push(undefined);
const myArray = [1]; // il tipo di questo array è stato inferito a "number[]", cioè array di numeri
// myArray.push("2") // string non è assegnabile a number[]
myArray.push(2);
myArray.push(3);
myArray.push(4);
console.log(myArray);
// const myMixedArr: Array<(string | number)> = []
// const myMixedArr: Array<StringOrNumber> = []
// const myMixedArr: (string | number)[] = []
const myMixedArr = [];
myMixedArr.push(undefined);
myMixedArr.push(2);
myMixedArr.push("Stefano");
myMixedArr.forEach(el => console.log(el === null || el === void 0 ? void 0 : el.toString()));
// TUPLE
const myMixedTuple = ["", 0];
const myMixedTuple2 = ["", 0, null];
console.log(myMixedTuple2[2]);
// OGGETTI
const obj = {
    name: "Stefano",
    surname: "Miceli",
    country: "Italy",
    hairColor: "Brown",
    height: 180,
    age: 33
};
// l'oggetto dona alle proprietà un tipo semplicemente inferendolo in base al loro valore
// scrivere obj. ci darà suggerimenti validi e specifici sia su proprietà disponibili sia sui metodi disponibili per singolo tipo di proprietà
console.log(obj.hairColor.length);
const obj2 = {
    firstName: "Mario",
    lastName: "Rossi"
};
const obj3 = {
    name: "Stefano",
    surname: "Casasola",
    age: 35,
    country: "Italy",
    hairColor: "black",
    height: 180,
    isRemote: true
};
const studente1 = {
    name: "Simone",
    eyes: true,
    height: 185,
    hasWebcam: true,
    batch: "FS0123ITA"
};
const studente2 = {
    name: "Luqman",
    eyes: true,
    height: 189,
    hasWebcam: true,
    batch: "FS0123ITA",
    numOfLimbs: 2
};
const studente3 = {
    name: "Aniello",
    eyes: true,
    height: 180,
    hasWebcam: true,
    batch: "FS0123ITA"
};
// inserire in un array gli oggetti generati in maniera coerente dall'interfaccia
const arrayOfStudents = [];
arrayOfStudents.push(studente1);
arrayOfStudents.push(studente2);
arrayOfStudents.push(studente3);
arrayOfStudents.forEach(s => s.name.indexOf("a")); // il parametro s ha mantenuto il tipo di origine, ovvero EpicodeStudent
// forniamo i parametri all'invocazione dell'interfaccia
const U1 = {
    name: "Unit 1",
    assignedTeacher: "Michele",
    topics: "HTML, CSS, JS I, JS II"
};
// forniamo i parametri all'invocazione dell'interfaccia
const U2 = {
    name: "Unit 2",
    assignedTeacher: "Stefano",
    topics: ["UX", "UI", "Bootstrap", "SASS", "JS III", "AJAX", "Promises"]
};
// forniamo i parametri all'invocazione dell'interfaccia
// const U3: EpicodeUnit<{ topic: string[] }[]> = { // alternativa senza interfaccia dedicata per Topic
const U3 = {
    name: "Unit3",
    assignedTeacher: "Stefano",
    topics: [
        { topic: ["React", "State", "Props", "Redux intro"] },
        { topic: ["Redux adv", "Router", "Hooks"] },
        { topic: ["TypeScript intro", "TypeScript React"] }
    ]
};
