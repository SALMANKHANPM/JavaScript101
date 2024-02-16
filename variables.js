// Varibles and it's Types.
// let & var [Mutable], const [Immutable] are three different types of declaration. *Note: These are not Compulsory
// Why not to use Var, No control over Block Scope. Use "Let" .

const universityId = 2200080000 
const universityMail = `${universityId}@kluniversity.in`
var branch = "AIDS"
let currentYear = 2 
let currentSem = 4 
counsellorName = "XYZ" 

console.log("University ID: " + universityId + 
            "\nUniversity MailID: "+ universityMail +
            "\nBranch: " + branch +
            "\nYear: " + currentYear + 
            "\nSemester: " + currentSem +
            "\nCounsellor Name: " + counsellorName
            )


console.table([ universityId, 
                universityMail, 
                branch, 
                currentYear, 
                currentSem,
                counsellorName
            ])