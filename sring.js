function AnalyzeWords (sentence , blockedKey){
    for(let bk of blockedKey){
        if(sentence.lowerCase().startsWith(bk))    
        return "WE have found on start";
        else if(sentence.lowerCase().endsWith(bk))
        return "WE have found on end";
        else if(sentence.lowerCase().includes(bk))
        return "there is blocked keyword";
    }
};
let arr =["spam","virus","sss"]
let s = " This message is spam";
console.log(AnalyzeWords(s,arr));

let x = "sss message asasa";
console.log(AnalyzeWords(x,arr));

let t = " This virus is here";
console.log(AnalyzeWords(t,arr));

//matchAll() and search() and match()
//HTML Templates and string interpolation
let text = `Welcome ${firstName}, ${lastName}!`;
// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.


