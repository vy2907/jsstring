
abbreviateName = (str1) => {
    var names = str1.split(" ");
    if (names.length > 1) {
        return (names[0] + " " + names[1].charAt(0));
    }
    return names[0];
};
console.log(abbreviateName("Robin Singh"));


