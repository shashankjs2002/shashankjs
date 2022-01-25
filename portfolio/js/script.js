console.log("Working.....")

// document.querySelector('.dropped').style.display = 'block';
document.querySelector(".menu-icon").addEventListener("click",()=>{

    document.querySelector('.drop').classList.toggle('dropped')
    if(document.querySelector('.drop').classList.contains('dropped'))
    {
        document.querySelector('.cross').style.display= 'block';
        document.querySelector('.ham').style.display= 'none';
        // icon = document.querySelector(".cross");
    }
    else{
        document.querySelector('.ham').style.display= 'block';
        document.querySelector('.cross').style.display= 'none';
        
    }
    
    
})