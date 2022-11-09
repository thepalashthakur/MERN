function emailFormat(email){ 
    try{
    if(email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
    console.log("Matching the email format!!") 
    return true;
    } else{
        throw new Error("Email invalid!!");
}

}catch(error){

console.log(error.message); 

}finally{

console.log("Into the finally block!!");
}
}
console.log(emailFormat("hello.123@example.com"))