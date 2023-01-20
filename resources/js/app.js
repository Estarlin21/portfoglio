
//check load status
function loadPage(){
    if(document.readyState == 'complete'){
        main();
    }else{
        setTimeout(loadPage, 200);
    }
}
loadPage();

//main function
function main(){
    let next = true;
    document.addEventListener('keydown', page);
    document.addEventListener('wheel', page);



    function page(who){
        if(who.key == 'ArrowDown' || who.key == 's' || who.deltaY > 0){
            if(next){
                window.scrollBy(0, window.innerHeight);
                next = false;
                setTimeout(() => {
                    next = true;
                }, 250);
            }
        }else if(who.key == 'ArrowUp' || who.key == 'w' || who.deltaY < 0){
            if(next){
                window.scrollBy(0, -window.innerHeight);
                next = false;
                setTimeout(() => {
                    next = true;
                }, 250);
            }
        }
        console.log(who.deltaY);
    }
}
