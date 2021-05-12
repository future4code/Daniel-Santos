
const maca = (quantidade) => {
    let valor = 0;
    if (quantidade < Number(12) ) {
        valor= Number(1,30)
    } else if (quantidade >= 12) {
        valor= Number(1)
    };

    return quantidade * valor
 };


 maca(10)