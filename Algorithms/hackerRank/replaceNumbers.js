function replaceNumbers (str){
let words = {
    '0': 'zero',
    '1': 'one', 
    '2': 'two', 
    '3': 'three', 
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven', 
    '8': 'eight', 
    '9': 'nine'

}
let strSplitted = str.split(' ')
 strSplitted.forEach((curr, index) => {
    if(words[curr]){
        console.log(curr)
        strSplitted[index] = words[curr];
        console.log(curr)
    }
})
    return strSplitted.join(' ');
    
}