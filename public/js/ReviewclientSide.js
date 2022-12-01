(function () {
    const reviewForm = document.getElementById("formForComment");
    let reviewText_input = document.getElementById("reviewText");
    let rating_input = document.getElementById("rating");
    let err = document.getElementById('errorcheck');
    if (reviewForm) {
        reviewForm.addEventListener("submit", (event) => {
        valid = true
        if(!reviewText_input.value){
            event.preventDefault();
            valid = false
            reviewText_input.value = ''
            err.hidden = false;
            err.innerHTML = 'Review Text must be provided'
            return
        }
        else{
            valid = true
            err.hidden = true
        }
        if(!rating_input.value){
            event.preventDefault();
            valid = false
            rating_input.value = ''
            err.hidden = false
            err.innerHTML = 'Rating must be provided'
            return
        }else{
            valid = true
            err.hidden = true
        }
        if(reviewText_input.value.trim(' ').length===0){
            event.preventDefault();
            valid=false
            reviewText_input.value=''
            err.hidden=false
            err.innerHTML='Review Text cannot only contain white spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(rating_input.value.trim(' ').length===0){
            event.preventDefault();
            valid=false
            rating_input.value=''
            err.hidden=false
            err.innerHTML='Rating cannot only contain white spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        // if(rating_input.value > 1 || rating_input.value < 6){
        //     event.preventDefault();
        //     valid=false
        //     rating_input.value=''
        //     err.hidden=false
        //     err.innerHTML='Rating Should be in range 1-5'
        //     return
        // }else{
        //     valid=true
        //     err.hidden=true
        // }
    });
    }
})();