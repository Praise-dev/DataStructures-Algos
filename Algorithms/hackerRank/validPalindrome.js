<<<<<<< HEAD
function isPalindrome(word) {
//This function checks for valid palindrome ignoring cases and checking only alphanumeric characters
//a man, a plan, a canal: Panama
let regex = /^[0-9a-zA-Z]+$/;
let start = 0;
let end = word.length-1;
 
while (start < end){
    if(!regex.test(word.charAt(start))) {
        start++;
    }
    else if(!regex.test(word.charAt(end))){
            end--;
    }
    else if(word.charAt(start).toLowerCase() !== word.charAt(end).toLowerCase()){
        return false;
    }
    else{
        start++;
        end--;
    }
}
        return true;

=======
function isPalindrome(word) {
//This function checks for valid palindrome ignoring cases and checking only alphanumeric characters
//a man, a plan, a canal: Panama
let regex = /^[0-9a-zA-Z]+$/;
let start = 0;
let end = word.length-1;
 
while (start < end){
    if(!regex.test(word.charAt(start))) {
        start++;
    }
    else if(!regex.test(word.charAt(end))){
            end--;
    }
    else if(word.charAt(start).toLowerCase() !== word.charAt(end).toLowerCase()){
        return false;
    }
    else{
        start++;
        end--;
    }
}
        return true;

>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
};