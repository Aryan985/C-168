AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            this.markerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            this.markerLost()
        })
    },
    markerFound:function(){
        var buttons = document.getElementById("button-div")
        buttons.style.display="flex"
        var rating = document.getElementById("rating-button")
        rating.addEventListener("click",()=>{
            swal({
             icon:"warning",
             title:"Please rate the dish..."   
            })
        })
        var order = document.getElementById("order-button")
        order.addEventListener("click",()=>{
            swal({
             icon:"success",
             title:"Your order is Confirmed"   
            })
        })
    },
    markerLost:function(){
        var buttons = document.getElementById("button-div")
        buttons.style.display="none"
    }
})