class Modal {
    constructor(){
        this.modal = document.querySelector(".modal");
        this.modalBox = this.modal.querySelector(".modal__box") ;
        this.modalBtn = this.modal.querySelector(".btn")

        this.modal.addEventListener("click" , this.hideModal) ;
        this.modalBtn.addEventListener("click" , this.hideModal) ;
    }


 showModal = () => {
    this.modal.classList.add("modal--show") ;

}

 hideModal = () => { 
   this.modal.classList.remove("modal--show") ;
//    this.modal.classList.add("modal--hide") ;
    
}
    
}

const modal = new Modal ;