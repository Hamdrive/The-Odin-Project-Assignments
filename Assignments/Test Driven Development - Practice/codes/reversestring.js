const reversestring = (str) => {
    if (!str.length) return -1;

    let newstr="";

    for( let i = str.length - 1; i>=0; i--){
        newstr += str[i]
    }
    return newstr;
}

module.exports = reversestring;