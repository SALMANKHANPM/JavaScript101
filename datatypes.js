// Data Types

/// ######## PRIMITIVE DATA TYPES  ###########
// String 
let name = "JS101"

// Number -> Range : 2 to power of 53 [Basically Available Memory Addresses]
let level = 1
let stage = 1.2222

// BigInt -> Uses BigInt() Constructor
let id = BigInt(1000000000001)

// Boolean -> True / False
let completed = false
let available = true

// Null -> Standalone Value
let status = null

// Undefined -> Not Defined and Not a Null
let defined = undefined

// Symbol -> Unique in Nature and uses Symbol() Constructor
// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false

/// ######## USER-DEFINED DATA TYPES  ###########
class HelloWorld{
    name = "JS101"
    level = 1
}


// Type Checker
// typeof -> Returns the Data type of the parameter 
console.log(typeof name)