module.exports = class MessageParser {
    constructor(prefix){
        this.__config__ = {
            prefix: (prefix != null) ? prefix : "!"
        };
    }
    setPrefix(prefix) {
        if(typeof(prefix) == "string"){
            this["__config__"].prefix = prefix;
        } else {
            throw new Error("MessageParser:   setPrefix(prefix)   :   prefix should be a string.");
        }
    }
    parse(string){
        let res = {
            command: null,
            arguments: [],
            parsed: false
        };
        if(string.startsWith(this['__config__'].prefix)){
            let _main_ = (string.slice(this['__config__'].prefix.length)).split(' ');
            res.command = _main_.shift();
            res.arguments = _main_;
            res.parsed = true;
            return res;
        } else {
            return res;
        }
    }
}