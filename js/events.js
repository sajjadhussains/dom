//option-1:directly set on the html element

//option-2
function makeRed(){
    document.body.style.backgroundColor="red";
}
//option-3
const make_green=document.getElementById("make-green");
        make_green.onclick=makeGreen;
        
        function makeGreen(){
            document.body.style.backgroundColor="green";
        }
//option-3:another
const make_purple=document.getElementById("make-purple");
        make_purple.onclick=function makePurple(){
            document.body.style.backgroundColor='purple';
        }

//option-4:
document.getElementById("make-gray").addEventListener('click',makeGray)
        function makeGray(){
            document.body.style.backgroundColor="gray";
        }