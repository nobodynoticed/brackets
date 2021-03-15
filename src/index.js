module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        let conf = bracketsConfig[i].join("");
        if (str.includes(conf) == true) {
            str = str.replace(conf, "");
            i = -1;
        }
    }

    if (str == "") return true;
    else return false;
};
