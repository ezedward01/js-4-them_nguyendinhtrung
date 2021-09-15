// BT 1 : Viết chương trình nhập vào ngày, tháng, năm. Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày, tháng năm của ngày trước đó
/**
 * Phân tích:
 * 1. Xác định đầu vào: ngày, tháng năm
 * 2. Xử lí: 
 *      - Tao biến ngay, thang, nam
 *      - Tháng 3,5,7,8,10 :
 *      + Nếu (ngay==1) -> ngayTruocDo = 30 + (thang -1) + nam; ngay TiepTheo = (ngay + 1) + thang +nam
 *       ** (thang == 3) -> ngayTruocDo = 28 + (thang-1) + nam; ngayTiepTheo = 2 + thang + nam
 *      + Nếu (ngay == 31) -> ngayTruocDo = 30 + thang + nam; ngayTiepTheo = 1 + (thang + 1) + nam
 *      + Nếu (ngay > 1 && ngay < 31) -> ngayTruocDo = (ngay-1) + thang + nam; ngayTiepTheo = (ngay+1) + thang +nam
 *      + Nếu ngày k đúng -> "Nhập sai"
 *      - Tháng 4,6,8,10 : 
 *      + Nếu (ngay == 1 ) -> ngayTruocDo = 31 + (thang-1) + nam; ngayTiepTheo = 2 + thang + nam
 *      + Nếu (ngay == 30) -> ngayTruocDo = 29 + thang +nam, ngayTiepTheo = 1 + (thang+1) + nam
 *      + Nếu (ngay > 1 && ngay <30) -> ngayTruocDo = (ngay - 1) + thang + nam; ngayTiepTheo = (ngay + 1) + thang + nam
 *      + Nếu ngày không đúng -> "Nhập sai"
 *      - Tháng 1:
 *      + Nếu (ngay == 1) -> ngayTruocDo = 30 + 12 + (nam-1), ngayTiepTheo = 2 + thang + nam
 *      + Nếu (ngay == 31) -> ngayTruocDo = 30 + thang + nam,
 * ngayTiepTheo = 1 + (thang+1) + nam
 *      + Nếu (ngay >1 && ngay < 31) -> ngayTruocDo = (ngay + 1) + thang + nam; ngayTiepTheo = (ngay - 1) + thang + nam
 *      + Nếu ngày không đúng -> "Nhập sai"
 *      - Tháng 2: 
 *      + Nếu (ngay == 28) -> ngayTruocDo = 27 + thang + nam,
 * ngayTiepTheo = 1 + 3 +nam
 *      + Nếu (ngay == 1) -> ngayTruocDo = 31 + 1 + nam, ngayTiepTheo = 2 + thang + nam
 *      + Nếu (ngay > 1 && ngay < 28) -> ngayTruocDo = (ngay - 1) + thang + nam, ngayTiepTheo = (ngay + 1) + thang + nam
 *      + Nếu ngày không đúng -> "Nhập sai"
 *      - Tháng 12: 
 *      + Nếu (ngay == 1) -> ngayTruocDo = 30 + 11 + nam, ngayTiepTheo = 2 + thang + nam
 *      + Nếu (ngay == 31) -> ngayTruocDo = 30 + thang + nam,
 * ngayTiepTheo = 1 + 1 +(nam +1)
 *      + Nếu (ngay > 1 && ngay < 31) -> ngayTruocDo = (ngay -1) + thang + nam, ngayTiepTheo = (ngay + 1) + thang + nam
 *      + Nếu ngày không đúng -> nhập sai
 * 3. Xác định đầu ra: ngày tháng năm của ngày tiếp theo và ngày trước đó
 */
var btnSubmit = document.getElementById('btnSubmit')

btnSubmit.onclick = function(){
    var ngay =Number(document.getElementById('ngay').value);
    var thang =Number(document.getElementById('thang').value);   
    var nam =Number(document.getElementById('nam').value);

    switch(thang){
        case 1 :
            if(ngay==1 ){
                ngayTruocDo.innerHTML =('ngày truước đó là ngày: '+ 30+ '-'+12+'-'+(Number(nam)-1));
                ngayTiepTheo.innerHTML=('ngày tiếp theo là ngày: '+ 2+ '-'+thang+'-'+nam);
                break;
            } else if(ngay==31){
                ngayTruocDo.innerHTML =('ngày truước đó là ngày: '+ 30+ '-'+1+'-'+nam);
                ngayTiepTheo.innerHTML=('ngày tiếp theo là ngày: '+ 1+ '-'+(Number(thang) +1)+'-'+nam)
                break;
            } else if(ngay>1 && ngay<31) {
                ngayTruocDo.innerHTML =('ngày trước đó là:' + (Number(ngay)-1)+'-'+thang+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + (Number(ngay)+1)+'-'+thang+'-'+nam );
                break;
                
            } else{
                ngayTruocDo.innerHTML="nhập sai";
                break
            }
            break;
         case 3 : case 5 : case 7 : case 8 : case 10 :   
             if(ngay == 31) {          
            ngayTruocDo.innerHTML =('ngày truước đó là ngày: '+ 30+ '-'+thang+'-'+nam);
            ngayTiepTheo.innerHTML=('ngày tiếp theo là ngày: '+ 1+ '-'+(Number(thang) +1)+'-'+nam);  
            break;   
        } else if(ngay == 1){
                if(thang ==3){
                    ngayTruocDo.innerHTML =('ngày truước đó là ngày: '+ 28+ '-'+2+'-'+nam);
                    ngayTiepTheo.innerHTML=('ngày tiếp theo là ngày: '+ (Number(ngay)+1)+ '-'+thang+'-'+nam);    break; 
                }
                else{
                    ngayTruocDo.innerHTML =('ngày truước đó là ngày: '+ 30+ '-'+(Number(thang) -1)+'-'+nam);
                    ngayTiepTheo.innerHTML=('ngày tiếp theo là ngày: '+ (Number(ngay)+1)+ '-'+thang+'-'+nam);  
                    break;
                    0x77AA2cB0Eed53cf0237B5E82E45C2d497C58245b (Matic01)
                    
                }
        } else if(ngay>1 && ngay<31){
            ngayTruocDo.innerHTML =('ngày trước đó là:' + (Number(ngay)-1)+'-'+thang+'-'+nam );
            ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + (Number(ngay)+1)+'-'+thang+'-'+nam );
            break;
//             stage warfare galvanic ugly decade inmate prosper expect hamster true erupt violin
        } else{
            ngayTruocDo.innerHTML="nhập sai"
            break
        }
        
        
        break;
        case 4 : case 6 :case 9:case 11:
            if(ngay==30){
                ngayTruocDo.innerHTML =('ngày trước đó là:' + 29+'-'+thang+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + 1+'-'+(Number(thang)+1)+'-'+nam );
                 break;
            } else if(ngay==1){
                ngayTruocDo.innerHTML =('ngày trước đó là:' + 31+'-'+(Number(thang)-1)+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + 2+'-'+thang+'-'+nam );
                 break;
            } else if(ngay >1 && ngay<30){
                ngayTruocDo.innerHTML =('ngày trước đó là:' + (Number(ngay)-1)+'-'+thang+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + (Number(ngay)+1)+'-'+thang+'-'+nam );
                 break;
            } else{
                ngayTruocDo.innerHTML="nhập sai "
                 break;
            }
            break;
        case 2:
            if(ngay==28){
                ngayTruocDo.innerHTML =('ngày trước đó là:' +27+'-'+2+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + 1 +'-'+3+'-'+nam );
                break;
            } else if(ngay==1){
                ngayTruocDo.innerHTML =('ngày trước đó là:' +31+'-'+1+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + 2 +'-'+thang+'-'+nam );
                 break;
            } else  if(ngay >1 && ngay<28){
                ngayTruocDo.innerHTML =('ngày trước đó là:' + (Number(ngay)-1)+'-'+thang+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + (Number(ngay)+1)+'-'+thang+'-'+nam );
                break;
                0x26A7B16A46d1514c041443F0113d2395bD322a2f (Matic02)
            }else{
                ngayTruocDo.innerHTML=('nhap sai')
            }
        break;
        case 12: 
            if(ngay==31){
                ngayTruocDo.innerHTML =('ngày trước đó là:' +(Number(ngay)-1)+'-'+thang+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + 1 +'-'+ 1 +'-'+(Number(nam)+1) ); break;
            } else if(ngay >1 && ngay <31){
//                 inflict between drome original way negative similar clay kidney walk damp manage
                ngayTruocDo.innerHTML =('ngày trước đó là:' +(Number(ngay) -1)+'-'+thang+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + (Number(ngay) +1) +'-'+thang+'-'+nam ); break;
            } else if(ngay ==1){
                ngayTruocDo.innerHTML =('ngày trước đó là:' +30+'-'+11+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + 2 +'-'+2+'-'+nam );
                break;
            }
            else{
                ngayTruocDo.innerHTML="nhập sai ngày";
                break;
            }
    default: ngayTruocDo.innerHTML="nhập sai";
    }
}



// BT2: Viết chương trình nhập vào tháng năm. Cho biết tháng đó có bao nhiêu ngày
/**
 * Phân tích:
 * 1. Xác định đầu vào : tháng, năm
 * 2. Xử lí:
 *      - Tạo biến: thang_2, nam_2
 *      - Tháng 1, 3, 5, 7, 8, 10, 12 -> tháng có 31 ngày
 *      - Tháng 4, 6, 9, 11 -> tháng có 30 ngày
 *      - Tháng 2: Nếu (((nam % 4 == 0) && (nam % 100 != 0)) || (nam % 400 == 0)) -> tháng có 29 ngày, còn lại tháng có 28 ngày
 * 3. Xác định đầu ra: số ngày trong tháng        
 */

var btnSubmit1 = document.getElementById('btnSubmit1');

btnSubmit1.onclick = function(){
    var thang_2 = document.getElementById('thang_2').value;
    var nam_2 = document.getElementById('nam_2').value;
    switch(thang_2){
        case '1' :   case '3' :   case '5' :  case '7' :  case '8' :  case '10' :  case '12' : 
        show.innerHTML = 'tháng ' + thang_2 + " có 31 ngày ";
        break;
        case '2' : 
        if(((nam_2 % 4 == 0) && (nam_2 % 100 != 0)) || (nam_2 % 400 == 0)){
            show.innerHTML = 'tháng ' + 2 + " có 29 ngày ";
        } else{
            show.innerHTML = 'tháng ' + 2 + " có 28 ngày ";
        }
        break;
        case '4' :   case '6' :   case '9' :  case '11':
            show.innerHTML = 'tháng ' + thang_2 + " có 30 ngày ";
            break;
        default: 
        show.innerHTML = 'nhap sai';
    }
}



// BT3: Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó
/**
 * Phân tích:
 * 1. Xác định đầu vào : số nguyên có 3 chữ số
 * 2. Xử lí:
 *      - Tạo biến: soHangTram, soHangChuc, soHangDonVi, soNguyen
 *      - soHangDonVi = soNguyen % 10, soNguyen /= 10, soHangChuc = soNguyen % 10, soHangTram = soNguyen / 10
 *      - Nếu (soHangChuc == 0)-> soHangTram + " trăm lẻ" + soHangDonVi
 *      - Nếu (soHangDonVi == 0)-> soHangTram + " trăm" + soHangChuc + "mươi"
 *      - Nếu (soHangDonVi == 0 && soHangChuc == 0) -> soHangTram + " trăm"
 *      - còn lại -> soHangTram + " trăm " + soHangChuc + " mươi " + soHangDonVi
 * 3. Xác định đầu ra: cách đọc số nguyên có 3 chữ số 
 */

var btnSubmit2 = document.getElementById('btnSubmit2');

btnSubmit2.onclick = function(){
    var soNguyen =document.getElementById('soNguyen').value;  
    var soHangDonVi =Number(soNguyen)%10;
    soNguyen /=10;    
    soHangChuc =soNguyen%10;
    soHangTram =soNguyen/10;
    if ((soHangDonVi == 0) && (soHangChuc ==0)){
       show1.innerHTML = Math.trunc(soHangTram) + " trăm";
   } else if (soHangDonVi == 0){
       show1.innerHTML = Math.trunc(soHangTram)+"  trăm "+Math.trunc(soHangChuc)+" mươi";
   } else if(Math.trunc(soHangChuc) == 0){
       show1.innerHTML = Math.trunc(soHangTram)+" trăm lẻ "+soHangDonVi;
   } else {
       show1.innerHTML = Math.trunc(soHangTram) + " trăm " + Math.trunc(soHangChuc) + " mươi " + soHangDonVi
   }
}




// BT4:Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương trình in ra tên sinh viên xa trường nhất
/**
 * Phân tích
 * 1. Xác định đầu vào: tên và tọa độ nhà của 3 sinh viên
 * 2. Xử lí: 
 *      - Tạo biến: x1, y1, x2, y2, x3, y3, a, b
 *      - khoangCachSV1 = Math.sqrt( (x1-a)^2 +(y1-b)^2)
sinh viên thứ 2 và thứ 3 tương tự
        - So sánh khoangCachSV1, khoangCachSV2, khoangCachSV3 -> sinh viên có khoảng cách lớn nhất thì xa trường nhất.
 * 3. Xác định đầu ra: tên sinh viên xa trường nhất
 */

var btnSubmit3 = document.getElementById('btnSubmit3');

btnSubmit3.onclick = function(){
    var x1 = document.getElementById('x1').value ;
    var y1 =document.getElementById('y1').value ;
    var x2 = document.getElementById('x2').value ;
    var y2 =document.getElementById('y2').value ;
    var x3 = document.getElementById('x3').value ;
    var y3 =document.getElementById('y3').value ;
    var a = document.getElementById('a').value ;
    var b =document.getElementById('b').value ;

    var KhoangCachA =Math.sqrt( (x1-a)*(x1-a)+(y1-b)*(y1-b) );
    console.log( KhoangCachA);
   
    var KhoangCachB =Math.sqrt( (x2-a)*(x2-a)+(y2-b)*(y2-b) );
    console.log(KhoangCachB );

    var KhoangCachC =Math.sqrt( (x3-a)*(x3-a)+(y3-b)*(y3-b) );
    console.log(KhoangCachC);
    var max = KhoangCachA;
    if(KhoangCachB-KhoangCachC>0){
        if(KhoangCachB-max >0){
            max =KhoangCachB;
            console.log('B la max');
            show2.innerHTML = "sinh viên B xa Trường Nhất";
        } else{
         console.log("A la max");
         show2.innerHTML = "sinh viên A xa Trường Nhất";
        }
    } else{
        if(KhoangCachC-max >0){
            max =KhoangCachC;
            console.log('C la max');
            show2.innerHTML = "sinh viên C xa Trường Nhất";
        } else{
         console.log("A la max");
         show2.innerHTML = "sinh viên A xa Trường Nhất";  
        }
    }
}

