
function maca (quantidade) {
    let valor = 0;

    
    if (quantidade < Number(12) ) {
        valor=Number(1.30)
        
    } else if (quantidade >= Number(12)) {
        valor=Number(1)
        
    };
    return quantidade*valor
 };


console.log(maca(3))