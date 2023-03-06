let amount = parseInt(prompt('Nhập số tiền gửi:'));
let rate = parseInt(prompt('Nhập số lãi suất (%/năm):'));
let time = parseInt(prompt('Nhập thời gian gửi (năm):'));
let receiveAmount = amount * rate * time / 100 + amount;

document.write('Số tiền gửi: ' + amount);
document.write('<br>')
document.write('Lãi suất (%/năm): ' + rate + '%');
document.write('<br>')
document.write('Thời gian gửi: ' + time + ' năm');
document.write('<br>')
document.write('Số tiền nhận được sau ' + time + ' năm là: ' + receiveAmount);
