
function isDefined(o){
    if(o===undefined){
        return 'undefined value'
    }
    return o;
}

let o;
console.log(isDefined(o));
console.log(isDefined(t));