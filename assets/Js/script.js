//First Task
function Devide(num1,num2){
return num1/num2;
};
console.log(Devide(28,2));

//second task
function Repeat(word,count)
{
    let result="";
    for (let i = 0; i < count; i++) {
       result+=word;
    }
    return result;
}
console.log("Daxil edilmis sözün təkrarı"+Repeat("Ha!",5));

//third Task

function SumArray()
{
    let arr=Array.from(arguments);

    let result=0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        result+=element;
    }
    return result;
}
console.log("Göndərilən n sayda ədələrin cəmi="+SumArray(1,2,3,4,5,6,8));

//fourth task

function CircleArea(r){
    const p=3;
     let result=p*r*r;
     return result;
}
 console.log("Dairənin sahəsi="+CircleArea(5));


 function RectangleArea(a,b)
 {
return a*b;
 }
 console.log("Düzbucaqlının sahəsi="+RectangleArea(3,5));


 function TriangelCArea(a,b,c,r)
 {
     return ((a+b+c)/2)*r;
 }
 console.log("uçbucaq daxilinə çəkilmiş çevrənin sahəsi="+TriangelCArea(3,2,1,1));
