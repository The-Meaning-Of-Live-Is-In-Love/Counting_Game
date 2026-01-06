var Number_1;
var Number_2;
var Number_3;
var Sign_Number;
Number_1 = Math.floor(Math.random() * 10) + 1;
Number_2 = Math.floor(Math.random() * 10) + 1;
Sign_Number = Math.floor(Math.random() * 3) + 1;
if (Sign_Number == 1)
{
    Number_3 = Number_1 + Number_2
}
if (Sign_Number == 2)
{
    Number_3 = Number_1 - Number_2
}
if (Sign_Number == 3)
{
    Number_3 = Number_1 * Number_2
}
document.write(Number_1);
document.write("&nbsp");
if (Sign_Number == 1)
{
    document.write("+");
}
if (Sign_Number == 2)
{
    document.write("-");
}
if (Sign_Number == 3)
{
    document.write("*");
}
document.write("&nbsp");
document.write(Number_2);
document.write("&nbsp");
document. write("=");
function getValue (id) {
    Number_4 = document.getElementById(id).value; //value of the text input
    //Number(Number_4) преобразует строку Number_4 в число
    // === строгое сравнение. Проверяет, что типы двух значений одинаковые
    //(в данном случае проверяется, что слева и справа мы сравниеваем число и число)
    if(Number(Number_4) === Number_3)
    {
        alert("Верно!");
    }
    else
    {
        alert("Неверно.");
    }
}