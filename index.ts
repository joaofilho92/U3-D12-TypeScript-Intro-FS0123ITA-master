let myVar = "Stefano";

let myFunc = () => {
  return "ciao";
};

console.log(myVar);

let myVar2: number = 20;
myVar2 = 124;

let myVar3: null = null;

let myVar4: any = 50;
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

const sum = (num1: any, num2: any) => {
  const n1 = parseInt(num1);
  const n2 = parseInt(num2);

  if (!isNaN(n1) && !isNaN(n2)) {
    return n1 + n2;
  } else {
    return "Devi passare valori numerici";
  }
};

console.log(sum(2, "akjnasd"));

const sumWithTypeScript = (num1: number, num2: number) => {
  return num1 + num2;
};

// sumWithTypeScript("3", "5").repeat(2);
sumWithTypeScript(3, 5).toFixed(2);

// Grazie alla "type inference" TS è in grado di rilevare in automatico anche il valore in uscita della funzione, capendolo dal contesto interno della funzione stessa
// se invece vogliamo essere sicuri che il tipo in uscita sia uno particolare (es forzare number) lo si potrà fare applicando i due punti dopo le parentesi (): number =>

// con l'operatore | si definisce UNION TYPE

const mixedAddition = (par1: number | string, par2: number | string) => {
  if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
    return par1 + par2;
  } else {
    return "MIXED ADDITION: Devi passare valori numerici";
  }
};
console.log(mixedAddition(2, "5"));

// CUSTOM TYPE (o Alias) - va definito in PascalCase, ed è un contenitore di tipi composti
type StringOrNumber = string | number;

const mixedAddition2 = (par1: StringOrNumber, par2: StringOrNumber) => {
  if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
    return par1 + par2;
  } else {
    return "MIXED ADDITION: Devi passare valori numerici";
  }
};

console.log(mixedAddition2("2", 5));

const additionWithOptionalParams = (str1: string, str2?: string) => {
  return str1.concat(str2 || "...");
};

console.log(additionWithOptionalParams("Epicode"));

// unknown Type

let maybe: unknown; // unknown è un tipo che in futuro potrebbe cambiare

if (maybe === true) {
  const myBoolean: boolean = maybe;
  // const myNewString: string = maybe // errore, boolean (maybe) non è assegnabile al tipo stringa
}

if (typeof maybe === "string") {
  const myNewString: string = maybe; // qui maybe ha acquisito grazie al contesto del condizionale il tipo "string", assegnabile alla variabile myNewString
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
const myMixedArr: (StringOrNumber | undefined)[] = [];
myMixedArr.push(undefined);
myMixedArr.push(2);
myMixedArr.push("Stefano");

myMixedArr.forEach(el => console.log(el?.toString()));

// TUPLE
const myMixedTuple: [string, number] = ["", 0];
const myMixedTuple2: [string, number, null] = ["", 0, null];
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

// come fare a mantenere coerenza tra oggetti simili? (stesse proprietà e stesso TIPO di valori)
// esempio con Custom Type o Alias
type EpicodeTeacher = {
  name: string;
  surname: string;
  age: number;
  country: string;
  hairColor: string;
  height: number;
};

type RemoteTeacher = { isRemote: boolean };

const obj3: EpicodeTeacher & RemoteTeacher = {
  name: "Stefano",
  surname: "Casasola",
  age: 35,
  country: "Italy",
  hairColor: "black",
  height: 180,
  isRemote: true
};

interface HumanBeign {
  name: string;
  eyes: boolean;
  height: number;
  numOfLimbs?: number;
}

interface EpicodeStudent extends HumanBeign {
  hasWebcam: boolean;
  batch: string;
}

const studente1: EpicodeStudent = {
  name: "Simone",
  eyes: true,
  height: 185,
  hasWebcam: true,
  batch: "FS0123ITA"
};

const studente2: EpicodeStudent = {
  name: "Luqman",
  eyes: true,
  height: 189,
  hasWebcam: true,
  batch: "FS0123ITA",
  numOfLimbs: 2
};

const studente3: EpicodeStudent = {
  name: "Aniello",
  eyes: true,
  height: 180,
  hasWebcam: true,
  batch: "FS0123ITA"
};

// inserire in un array gli oggetti generati in maniera coerente dall'interfaccia
const arrayOfStudents: EpicodeStudent[] = [];
arrayOfStudents.push(studente1);
arrayOfStudents.push(studente2);
arrayOfStudents.push(studente3);

arrayOfStudents.forEach(s => s.name.indexOf("a")); // il parametro s ha mantenuto il tipo di origine, ovvero EpicodeStudent
// TS ci suggerisce i metodi consoni anche per le proprietà di un oggetto che ci arriva dal parametro del forEach!
// prova a scrivere s. e noterai che conosce perfettamente le proprietà disponibili su quell'oggetto, tutto grazie alla struttura dei tipi che abbiamo creato in precedenza

//GENERICS
// un generic è un "parametro di tipo" per un'interfaccia

// T rappresenta il futuro tipo in ingresso, fornito all'invocazione dell'interfaccia
interface EpicodeUnit<T> {
  name: string;
  assignedTeacher: string;
  //   topics: string | string[] | { topic: string[] }[];
  topics: T; // topics acquisirà un qualsiasi tipo passato all'invocazione dell'interfaccia
}

// forniamo i parametri all'invocazione dell'interfaccia
const U1: EpicodeUnit<string> = {
  name: "Unit 1",
  assignedTeacher: "Michele",
  topics: "HTML, CSS, JS I, JS II"
};

// forniamo i parametri all'invocazione dell'interfaccia
const U2: EpicodeUnit<string[]> = {
  name: "Unit 2",
  assignedTeacher: "Stefano",
  topics: ["UX", "UI", "Bootstrap", "SASS", "JS III", "AJAX", "Promises"]
};

interface Topic {
  topic: string[];
}

// forniamo i parametri all'invocazione dell'interfaccia

// const U3: EpicodeUnit<{ topic: string[] }[]> = { // alternativa senza interfaccia dedicata per Topic
const U3: EpicodeUnit<Topic[]> = {
  name: "Unit3",
  assignedTeacher: "Stefano",
  topics: [
    { topic: ["React", "State", "Props", "Redux intro"] },
    { topic: ["Redux adv", "Router", "Hooks"] },
    { topic: ["TypeScript intro", "TypeScript React"] }
  ]
};
