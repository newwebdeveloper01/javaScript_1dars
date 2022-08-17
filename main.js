// console.log("Hello World!!");
var savol={};

 savol.bir=prompt("Jadvalning orqa fon rangini qanday o'zgartirasiz?" ,"color bilan");
 savol.ikki=prompt("HTML faylimga nima nom berishim kerak?" ,"index.html");
 savol.uch=prompt("HTML ning necgta versiyasi bor?" ,"3 ta");
 savol.tort=prompt("Teglar necha turga bo'linadi?" ,"5 ta");
 savol.besh=prompt("CSS ni HTML ga ulashni necha turi  bor?" ,"2 ta");
 savol.olti=prompt("colum-gap vazifasi nima?" ,"bilmayman");
 savol.yetti=prompt("Bootstrap nima?" ,"ayttimku bilmayman deb");
 savol.sakkiz=prompt("Grid tizimi ekranni necha bo'lakka bo'ladi?" ," 4 ta");
 savol.toqqiz=prompt(" Github nima " ,"ibbi  ayttimku man bilmayman deb");
 savol.on=prompt("Git  nima uchun kerak?" ," shu  github borligi uchun dir da");
alert(`Javoblaringiz, ${savol.bir} \n ${savol.ikki}    \n ${savol.uch} \n ${savol.tort} \n ${savol.besh}  \n ${savol.olti} \n ${savol.yetti} \n ${savol.sakkiz}  \n ${savol.toqqiz} \n ${savol.on}     `);
var b=prompt("son kiriting", "123456789");
var a=b-0;
// console.log(a);
var w=" ";

for(var i=0; i<b.length; i++){
    var c = (a%10);
    a=(a-c)/10;
    w += c;
    
}
console.log(w);
