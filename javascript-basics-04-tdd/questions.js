
const stringSize = (text) => {
return text.length
}
const replaceCharacterE = (text) => {
return text.replace("e"," ")
}
const concatString = (text1, text2) => {
return text1.concat(text2)
}
const showChar5 = (text) => {
return text.charAt(4)
}
const showChar9 = (text) => {
return text.slice(0,9)
}
const toCapitals = (text) => {
return text.toUpperCase()
}
const toLowerCase = (text) => {
return text.toLowerCase()
}
const removeSpaces = (text) => {
return text.trim()
}
const IsString = (text) => {
return typeof(text)=== 'string' 
}

const getExtension = (text) => {
return text.split(".").pop()}
// .pop will remove the last element from array 
// .shift will remove the first element of array

// let imge= "image.jpg"
// console.log(imge.split("."))   // 0:image 1:jpg
// console.log(imge.split("")) // ['i', 'm', 'a', 'g', 'e', '.', 'j', 'p', 'g']
// console.log(imge.split(".").pop()) // jpg delete and  give you the last index of array and admit the previous

const countSpaces = (text) => {
 return text.split(" ").length-1 //teake the nb of spaces -1 from the index of array
}
const InverseString = (text) => {
    return text.split('').reverse().join('');
}

const power = (x, y) => {
return Math.pow(x,y) // calcule 2^3 a la puissance
}
const absoluteValue = (num) => {
return Math.abs(num)
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs) // map return a new array which is implement on it the function that we need (call back fumction give a new array)
    
}
const circleSurface = (radius) => {
    const pi = Math.PI;
    const surface = pi * radius * radius;
    return Math.round(surface);
}
const hypothenuse = (ab, ac) => {
return Math.sqrt(ab*ab + ac*ac)  // c^2 =a^2 + b^2
}
const BMI = (weight, height) => {
    // const bmi = weight / (height * height);
    // return parseFloat(bmi.toFixed(2));
    return parseFloat((weight/(height * height)).toFixed(2))  // parsefloat: will transform the output from string to a float nb & the toFixed(2) : will give you just 2 nb after column 
}

const createLanguagesArray = () => {
return  [ 'Html', 'CSS', 'Java', 'PHP' ]
}

const createNumbersArray = () => {
return [ 0, 1, 2, 3, 4, 5 ]
}

const replaceElement = (languages) => {
return languages[2]="javascript"
}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}