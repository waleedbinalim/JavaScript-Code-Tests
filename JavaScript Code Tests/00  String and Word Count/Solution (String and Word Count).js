// STRING COUNTER
let stringCounter = (str) => {
    let newStr = str.split("").reverse().join(""); //REVERSING THE STRING TO ELIMINATE THE WHITE SPACE PROBLEM
    let count = 0;
    let flag = 0; //TO COUNTER THE WHITE SPACE PROBLEM
    let countArray = [];

    for (let i = 0 ; i < newStr.length ; i++){
        if(newStr[i] == '='){
            countArray.push(count);
            count = 0;
            flag = 0;
        }
        if(newStr[i] == ' ' && flag == 0){  //DETECTS THE FIRST WHITE SPACE & FLAGS SO IT CAN IGNORE THE OTHER WHITE SPACES
            flag = 1;
            countArray.push(count-1);
            count=0;
        }
        else{ count += 1; }
    }

    countArray.push(count-1); //PUSHES LAST WORDS NO. OF LETTERS
    countArray= countArray.reverse(); //REVERSES THE COUNT ARRAY SINCE OUR STRING WAS REVERSED INITIALLY

    let finalArray = []; 

    for(let j =0 ; j< countArray.length ; j++){
        finalArray.push(countArray[j]);

        if(j%2 == 0){finalArray.push('=');}
    }
    console.log(finalArray.join(" "));
    
}


stringCounter('abcd=efgh ijk=lmnop');
stringCounter('Name=Dr. John Doe Number=555-Doc');
stringCounter('a=b b=c c=d d=e');