let userRole="Admin"
let accessLevel
let userMessage
let isLoggedIn=true

if(isLoggedIn){
    if(userRole==="Admin"){
        accessLevel="Full Access"
        userMessage="Welcome ,Admin!"

    }
    else if(userRole==="Manager"){
        accessLevel="Limited Access"
        userMessage="Welcome , Manager!"
    }
    else{
        accessLevel="No Access"
          userMessage="Welcome ,User!"
    }
}else{
    userMessage="Please Log in.."
}
// Switch Case
let userType="subscriber"
let userCategory
let isAuthenticated=true
switch (userType){
    case "admin":
        userCategory="Administrator"
        break;
    case "manager":
        userCategory="Manager"
        break;
    case "subscriber":
        userCategory="Subscriber"
        break;
    default:
        userCategory="unKnown"
}
let authenticationStatus=isAuthenticated?"Authenticated":"Not Authenticated"


console.log("accessLevel",accessLevel)
console.log("userMessage",userMessage)
console.log("userCategory:",userCategory)
console.log("authenticationStatus",authenticationStatus)

