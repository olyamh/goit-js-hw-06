class StringBuilder{
    #value;
    constructor (params){
        this.#value = params;
    }
    
    getValue(){
        return this.#value;
    }
    
    padStart(sign) {
        
        return this.#value = sign + this.#value;
        
    }
    padEnd (sign){
        return this.#value = this.#value + sign;
    }
    
    padBoth (sign) {
        return this.#value = sign + this.#value + sign;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
