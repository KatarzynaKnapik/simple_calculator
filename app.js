document.querySelector("#button-1").addEventListener('click', () => {
    let x = parseFloat(document.querySelector('#num-1').value);
    const y = parseFloat(document.querySelector('#num-2').value);
    let z = 0;
    const numbers = document.querySelector('#nums input');
   

    if (numbers.value == null ||  
        numbers.value == undefined || 
        numbers.value.length == 0) {

        document.querySelector("#show-result").innerText = 'Enter numbers first';  

    } else{
        if(document.querySelector("#plus").checked){
            z = x + y;
            res = `${x} + ${y} = ${z}`; 
            
        }else if(document.querySelector("#minus").checked){
            z = x-y;
            res = `${x} - ${y} = ${z}`;
            
        }else if(document.querySelector("#times").checked){
            z = x*y;
            res = `${x} * ${y} = ${z}`;
            
        }else{
            z = x / y;
            res = `${x} / ${y} = ${z}`;
        }
    
        document.querySelector("#show-result").innerText = res; 
    }

    
}); 




