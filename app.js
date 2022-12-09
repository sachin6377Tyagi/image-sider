(function(){
   const pic=[
    "1a",
    "3a",
    "2a",
    "4a",
    "5a",
    "6a",
    "7a",
    "8a"

   ];
   const buttons=document.querySelectorAll(".btn");
   const imgDiv=document.querySelector(".img-container");
   const tl = gsap.timeline({ default: { ease: 'power2.out' } });

   tl.to(".slider", { y: "-100%", duration: 1.2 });
   tl.to(".img-container", { y: "0%", duration: 2.2 }, "-=1");

   let count=0;
   buttons.forEach(function(button){
    button.addEventListener("click",function(e){
    
        if(button.classList.contains('btn-left')){
            count--;
            if(count<0){
                count=pic.length-1;
            }
            imgDiv.style.background=`url('rel images/${pic[count]}.jpg')`;
        }
        if(button.classList.contains('btn-right')){
            count++;
            if(count==pic.length){
                count=0;
            }
            imgDiv.style.background=`url('rel images/${pic[count]}.jpg')`
        }
    })
   })

})();