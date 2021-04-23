const caesarcipher = (str, key) => {
    if (key === 0) return str;

    return str
      .toUpperCase()
      .replace(/[A-Z]/g, (char) =>
        String.fromCharCode(
          ((char.charCodeAt(0) - 65 + key) % 26) + 65
        ).toLowerCase()
      );
}

module.exports = caesarcipher;