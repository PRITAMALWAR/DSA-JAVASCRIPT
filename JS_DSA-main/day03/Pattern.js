function binarySquarePattern(N){
    //write code here
     
    for(let i=0;i<N; i++){
        let bag = ''
         for(j=0; j<N; j++){
             
             if(i%2 === 0){
                 if(j%2 === 0){
                     bag += "1 "
                 } else{
                     bag += "0 "
                 }
             }else{
                 if(j%2 === 0){
                     bag += "0 "
                 }else{
                     bag += "1 "
                 }
             }
         }
          console.log(bag)
    }
}



// ==================================



function binaryTriangle(N) {
    // Write code here
    
    for (let i = 1; i <= N; i++) {
        let bag = '';
        for (let j = 0; j < i; j++) {
            
            if(j%2 == 0){
                bag = bag + "1"
            }else{
                bag = bag + "0"
            }
         
        }
        console.log(bag);
    }
    
}

// pattern += j % 2 === 0 ? '1' : '0';



// =============================================================