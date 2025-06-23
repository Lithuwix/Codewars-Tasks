// function noSpace(str){
//     str = str.replace(/\s+/g, '');
//     return str;
// }

function noSpacee(x){
    return x.replace(/\s/g, '');
}

function noSpace(x){return x.split(' ').join('')}

console.log(noSpacee('       fdjsio iodfsj           di 212 21 2'));
console.log(noSpace('       fdjsio iodfsj           di 212 21 2'));