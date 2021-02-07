// MOST OCCURANCES
let mostOccuranceCheck = (str) => { 
    let startPosition = 0;
    let space = str.indexOf(' '); //WE'LL USE THIS TO GET INDEX OF ALL SPACES SO WE STORE EACH WORD SEPARATELY
    let allWords = [];
    let comparisonArray = [];
    
    while(space != -1){                  //LOOP TRIGGERED TO FIND ALL WHITESPACE INDEXES
        let word = str.slice(startPosition,space);
        allWords.push(word);
        str = str.slice(space+1 , str.length);
        space = str.indexOf(' ');
    
        if (str.indexOf(' ') == -1) {    // IF NO MORE WHITESPACE LEFT, STORE THE LAST WORD AND BREAK THE LOOP
            word = str.slice(startPosition,str.length);
            allWords.push(word);
            break;
        }
    }                                   // ALL THE WORDS NOW STORED IN 'allWords' ARRAY SEPARATELY
    
    allWords.forEach((entry) =>{
        entry = entry.split("").sort().join("");     // ARRANGES LETTERS OF EACH WORD ALPHABETICALLY 
        let count = 1;                              // SINCE ALL CHARACTERS APPEAR ATLEAST ONCE
        let maxCount = [];                         // WILL STORE AMOUNT OF MOST REPEATED LETTER(S) IN EACH WORD
        for(let i =0 ; i < entry.length ; i++){   // CHECKS MATCHING CHARACTERS AND UPDATE COUNT
            if(entry[i] === entry[i+1]){         // CHECKS IF CURRENT LETTER MATCHES NEXT LETTER AND ADDS TO COUNT
                count +=1;
            }
            else{
                maxCount.push(count);
                count = 1;
            }
        }
        
        maxCount = maxCount.sort(function(a,b){return a-b;}).reverse().slice(0,1);  //TAKES GREATEST REPEATED CHARACTERS AMOUNT
        comparisonArray.push(parseInt(maxCount));                                   //ADDS THIS TO A NEW ARRAY
    });  
    // NOW YOU HAVE 2 ARRAYS IN ORDER 'allWords' AND 'comparisonArray'
    
    let checker = [...comparisonArray];                 // DUPLICATE SO 'comparisonArray' ISN'T ALTERED AFTER NEXT LINE EXECUTES       
    checker = checker.sort(function(a,b){return a-b}).reverse();    // SORTS SO LARGEST NUMBER IS AT 0 INDEX

    let maxRepetition = checker[0];     //STORED THE AMOUNT OF MOST OCCURED INSTANCE
    if (maxRepetition != checker[1]){  // CHECKS IF 'checker' DOESN'T HAVE 2 SAME VALUES
        console.log(allWords[comparisonArray.indexOf(maxRepetition)]);
    }else{
        console.log(-1); //IF 2 WORDS HAVE SAME AMOUNT OF MOST REPEATED LETTERS THEN WE RETURN -1
    }
}

mostOccuranceCheck('Hello World');
mostOccuranceCheck('Peach Tree Too');
mostOccuranceCheck('YOOOOO CHECK THIS OUT BUDDY');