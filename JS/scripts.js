let anteba = () =>{
    document.getElementById("natura").src="img/lampon.png";
    


}

let chaqroba = () =>{
    document.getElementById("natura").src="img/lampoff.png";
    
}

let naturismushaoba = () =>{
    let antebuli = document.getElementById("natura").src;
    console.log(antebuli);
    

    if (antebuli.includes("off")) {
        document.getElementById("natura").src='img/lampon.png';
    }
    else {
        document.getElementById("natura").src='img/lampoff.png';
    }
    
}
document.getElementById("universalbtn").addEventListener("click",naturismushaoba);














