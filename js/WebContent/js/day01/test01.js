// 2단 구구단을 출력해보자.
var wcolor = [
	'w3-yellow',//위치값 0
	'w3-amber',// 위치값 1
	'w3-orange',
	'w3-deep-orange',
	'w3-red',
	'w3-pink',
	'w3-purple',
	'w3-deep-purple',
	'w3-indigo',
	'w3-blue',
	'w3-cyan',
	'w3-teal',
	'w3-green',
	'w3-light-green',
	'w3-lime'
]; // 자바스크립트 배열

var dan = 2; //dan함수


for(i = 0; i < 9; i++){
   let gop = i+1; //gop 함수
   var result = dan * gop; //result
   console.log(dan + 'x' + gop + '=' + result);
}

var str = '';
/*for(i = 0; i < 5 ; i ++){
   for(j = 0 ; j < 3 ; j++){
      str += '<br>' + '우영씨가 코딩을 합니다.';
   }
   
   for(k = 0 ; k < 5 ; k++ ){
      str += '<br>' + '선생님이 숙제를 내줍니다.'
   }
   str += '<br>==============='
}
document.getElementById('board').innerHTML = str;*/
/* #board 태그에 태그 만들어 추가하기 */
for(dan = 2 ; dan < 10 ; dan++){
   let tmp = '<div class="inblock w150 w3-border w3-card-4 glbl">' +
               '<h2 class="w3-col '+ wcolor[dan -2] +'" style="margin: 0px!important;">' + dan + '단</h2>' +
               '<div class="w3-col w3-padding">';
   for(gop = 1 ; gop < 10 ; gop++ ){
               tmp = tmp + '<p>' + dan + ' x ' + gop + ' = ' + (dan * gop) +'</p>';
   }
                  
      tmp =tmp + '</div>' +
            '</div>' ;
      str = str + tmp;
}
document.getElementById('board').innerHTML = str;
console.log('---------------------------------------');
// 구구단을 출력하세요.