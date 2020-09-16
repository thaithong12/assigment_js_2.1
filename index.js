window.onload = function() {
    
    var listTagA = document.getElementsByTagName("a");
    var listNameImage = [];
    var listImage = [];

    demo();
    function demo() {
        for(let aTag of listTagA) {
                let img = new Image();
            
                img.src  = aTag.firstElementChild.src;
                let nameImage = aTag.firstElementChild.alt;


                listNameImage.push(nameImage);
                listImage.push(img);

                aTag.onclick = function(e) {
                    e.preventDefault()
                }
        }
    }

    var i = 0;
    var sleepy = setInterval(() => {
            let textVal = document.getElementById("text-value")
            let imgShow = document.getElementById("img-show");
                
            textVal.innerText = listNameImage[i];
            imgShow.src = listImage[i].src;
            imgShow.height = 300;
            i++
            if (i == 5) {
                clearInterval(sleepy);
            }
    }, 1000);
   
}