window.onload = function() {
    
    var listTagA = document.getElementsByTagName("a");

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    demo();
    async function demo() {
        for(let aTag of listTagA) {
                let img = new Image();
            
                img.src  = aTag.firstElementChild.src;
                let nameImage = aTag.firstElementChild.alt;
        
                aTag.onclick = function(e) {
                    e.preventDefault()
                }
                let textVal = document.getElementById("text-value")
                let imgShow = document.getElementById("img-show");
                
                textVal.innerText = nameImage;
                imgShow.src = img.src;
                imgShow.height = 300;

                await sleep(2000);
        }
    }
   
}