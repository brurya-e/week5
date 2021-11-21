const countDownFor = (number) => {
    for (let i = number; i > 0; i--)
        console.log(i);
}

const countDownExplisive = (number) =>{
    if(number >0){
        console.log(number);     
        countDown(number-1);
    }       
}

const countDown = (number) =>{
    if(number ==0)
        return ;
    console.log(number);     
    countDown(number-1);      
}
countDownFor(5);
countDownExmplisive(5);
countDown(5);