function roll(){
    const noOfDice=document.getElementById("input").value;
    const diceresult=document.getElementById("textResult");
    const diceimg=document.getElementById("imgResult");
    const values=[];
    const images=[];
    
    for(i=0; i<noOfDice; i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="Images/${value}.png" alt="Dice ${value}">`);3
    }
    diceresult.textContent=`Dice: ${values.join(', ')}`;
    diceimg.innerHTML=images.join(' ');
}