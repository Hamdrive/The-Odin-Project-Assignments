const capitalize = (str) =>{
    if (!str.length) return -1;

    return str[0].toUpperCase() + str.slice(1);
}

module.exports = capitalize;