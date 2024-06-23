class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        document.onkeydown=(e) =>{
            switch(e.key){
                case "ArrowLeft":
                    this.left=true
                    break
                case "ArrowRight":
                    this.right= true
                    break
            }
        }
    }
} 