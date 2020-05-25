exports.elementUp = function(string) {
    const stringlets =  string.split(' ');
    let rstring = '';
    for (let index = 0; index < stringlets.length; index++) {
        rstring+= "<span>"+stringlets[index]+"</span> ";
    }
    return rstring;
}