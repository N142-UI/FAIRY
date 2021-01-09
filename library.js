
function newFunction(star1) {

    function isTouching(fairy,star){

        if ( fairy.y - star.y < star.height/2 + fairy.height/2 
          &&  star.y - fairy.y < fairy.height/2 + star.height/2) {
         
            star.velocityY = 0; 
            
        }
    }
}

