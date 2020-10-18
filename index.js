var i =0;
var x = "안녕하세요 ! 프론트엔드 개발자 남유진의 포트폴리오입니다.";
function typewriter(){
    if (i< x.length){
        document.getElementById("introduce").innerHTML += x[i];
        i++;
        setTimeout(typewriter,77);
    }
}
typewriter();