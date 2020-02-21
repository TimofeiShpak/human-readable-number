//cd C:\human-readable-number
module.exports = function toReadable (number) {
  let values = {
  	1 : 'one',
  	2 : 'two',
  	3 : 'three',
  	4 : 'four',
  	5 : 'five',
  	6 : 'six',
  	7 : 'seven',
  	8 : 'eight',
  	9 : 'nine',
  	10 : 'ten',
  	11 : 'eleven',
  	12 : 'twelve',
  	13 : 'thirteen',
  	14 : 'fourteen',
  	15 : 'fifteen',
  	16 : 'sixteen',
  	17 : 'seventeen',
  	18 : 'eighteen',
  	19 : 'nineteen',
  	20 : 'twenty',
  	30 : 'thirty',
  	40 : 'forty',
  	50 : 'fifty',
  	60 : 'sixty',
  	70 : 'seventy',
  	80 : 'eighty',
  	90 : 'ninety',
  	0 : ''
  }
  let str = '';
  let units = 0;
  let tens = 0;
  let hundreds = 0;
  if(number==0)return 'zero';
  if(number<=20) str = values[number];
  if(number>20 && number<=100) {
	units = number%10;
  	tens = number-units;
  	if(number%10!=0)str = values[tens]+' '+values[units];
  	else str = values[tens];
  }
  if(number==100)return 'one hundred';
  if(number>100){
	units = number%10; 
  	hundreds = number-number%100;
  	tens = number - hundreds - units;
  	hundreds/=100;
  	if(tens==0 && units ==0){str = values[hundreds]+' hundred';return str;}
  	if(tens==10){units=number%100;str = values[hundreds]+' hundred '+values[units];return str;}
  	if(tens==0){str = values[hundreds]+' hundred '+values[units];return str;}
  	if(number%10==0 && tens!=10){str = values[hundreds]+' hundred '+values[tens];return str;}
  	if(number%10!=0 && tens!=10){str = values[hundreds]+' hundred '+values[tens]+' '+values[units];return str;}
  }
  return str;
}

