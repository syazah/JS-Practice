//functions inside functions
function one(){
    const userName = "Azaan"
    function two(){
        const website = "Youtube";
        console.log(userName);
    }
    two();
    console.log(website);//this will not work as website is declared inside two
}

one();