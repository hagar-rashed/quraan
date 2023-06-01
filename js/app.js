let navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link)=>{
    link.addEventListener("click",function(){
        document.querySelectorAll(".active")?.classList.remove("active");
        this.classList.add("activeLink");
    })
    
    
})

// document.querySelectorAll(".nav-item").forEach((ele) =>
// ele.addEventListener("click", function (event) {
//   event.preventDefault();
//   document
//     .querySelectorAll(".nav-item")
//     .forEach((ele) => ele.classList.remove("active"));
//   this.classList.add("active")
// })
// );

/*.whats-btn{
    animation: glowing 1300ms infinite;
    border-radius: 40px;
    color: #eeeeee;
    cursor: pointer;
    display: inline-block;
    font-family: Arial;
    font-size: 20px;
    padding: 14px 45px;
    text-align: center;
    text-decoration: none;
    margin-left: 20px;
    font-weight:bold;

}*/