numbers = {
    '0' : 'zero',
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine',
    '10' : 'ten',
    '11' : 'eleven',
    '12' : 'twelve',
    '13' : 'thirteen',
    '14' : 'fourteen',
    '15' : 'fifteen',
    '16' : 'sixteen',
    '17' : 'seventeen',
    '18' : 'eighteen',
    '19' : 'nineteen',
    '20' : 'twenty',
    '30' : 'thirty',
    '40' : 'forty',
    '50' : 'fifty',
    '60' : 'sixty',
    '70' : 'seventy',
    '80' : 'eighty',
    '90' : 'ninety',
    '100' : 'hundread',
}

module.exports = function toReadable (number) {
    let result = '';
    let hundreds = 0;
    let ten = 0;
    if (number > 99) {
        hundreds = (number - number % 100) / 100;
        number -= hundreds*100;
        result += numbers[`${hundreds}`]+' '+'hundred'
    }
    if (number > 19) {
      if (hundreds) {
          result += ' ';
      }
      ten = (number - number % 10);
      number -= ten;
      result += numbers[`${ten}`];
    }
    if (number % 100 < 20 && number % 100 > 0) {
        if (ten || hundreds) {
            result += ' ';
        }
        result += numbers[`${number % 100}`];
    }
    return result || 'zero';
  }
