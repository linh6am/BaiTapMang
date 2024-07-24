//Cho một mảng [1,7,5,9,2,6]
// - In ra tổng các phần tử chẵn trong mảng
// - In ra tổng các phần tử >10 trong mảng
// - In ra tổng các phần tử chia 7 dư 2 trong mảng
// - In ra max của các phần tử chẵn mảng
// - In ra lớn nhất của mảng
// - In ra số lượng các phần tử chia hết cho 5 trong mảng
// - In ra trung bình các phần tử chia hết cho 5 trong mảng
// - * Tìm phần tử lớn thứ 2 trong mảng (nâng cao: 1 vòng lặp)


// - In ra tổng các phần tử chẵn trong mảng:
// let arr = [1, 7, 5, 9, 2, 6];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     if ([i] % 2 == 0) {
//         sum += arr[i];
//     }
// }
// console.log('Tổng các phần tử chẵn: ' + sum)

// - In ra tổng các phần tử >10 trong mảng
// let arr = [1, 7, 5, 9, 2, 6];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//         sum += arr[i];
//     }
// }
// console.log('Tổng các phần tử lớn hơn 10: ' + sum)

// - In ra tổng các phần tử chia 7 dư 2 trong mảng
/*let arr = [1, 7, 5, 9, 2, 6];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 7 == 2) {
        sum += arr[i];
    }
}
console.log('Tổng các phần tử chia 7 dư 2: ' + sum)*/

// - In ra max của các phần tử chẵn mảng:
// let arr = [1, 7, 5, 9, 2, 6];
// max = arr[0];
// for(let i = 0; i < arr.length; i++) {
//     if ([i] % 2 == 0 && arr[i] > max) {
//         max = arr[i];
//       }
// }
// console.log('Max của phần tử chẵn mảng là: ' + max)

//In ra số lượng các phần tử chia hết cho 5 trong mảng:
// let arr = [1, 7, 5, 9, 2, 6];
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//         console.log('Vị trí các phần tử chia hết cho 5 là: ' + [i] + ' - Với giá trị là: ' + arr[i])
//       }
// }

//Cho người dùng nhập vào 1 số và in ra số lần xuất hiện của số đó trong mảng:
// let arr = [1, 7, 5, 9, 2, 6, 1, 3, 5, 9];
// let count = 0;
// let inPut = +prompt('Nhập thêm giá trị cho mảng');
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] == inPut) {
//         count++;
//     }
// }
// console.log(`Số lần xuất hiện của ${arr[6]} là: ${count} lần`);

//Tìm phần tử lớn thứ 2 trong mảng (nâng cao: 1 vòng lặp):
// let arr = [1, 7, 5, 9, 2, 6];
// let max = arr[0];
// let max2 = arr[1]
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max2 = max;
//         max = arr[i];
//       } else if (arr[i] > max2 && arr[i] !== max) {
//         max2 = arr[i];
//       }
// }
// console.log(max2);

//LUYÊN TẬP MẢNG 1:
//Bài 1: Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10:
// let arr = [12, 10, 5, 4, 7, 9, 15, 19, 20, 46];
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10) {
//         console.log('Các số nguyên lớn hơn hoặc bằng 10 là: ' + arr[i])
//     }
// }

//Bài 2: Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau. Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó:
// let arr = [12, 10, 5, 4, 7, 9, 15, 19, 20, 46];
// let max = [0];
// let maxIndex = 0;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         maxIndex = i;
//     }
// }
// console.log('Phần tử có giá trị lớn nhất là: ' + max);
// console.log('Vị trí phần tử là: ' + maxIndex);

// //Bài 3: Viết chương trình khởi tạo mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó. In ra giá trị trung bình của các phần tử trong mảng:
// let arr = [12, 10, 5, 4, 7, 9, 15, 19, 20, 46];
// let max = [0];
// let tong = 0;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log('Phần tử có giá trị lớn nhất là: ' + max);

// function trungBinhCong () {
//     const sum = tong += arr[i];
//     return sum / arr.length;
// }
// const ketQua = trungBinhCong();
// console.log(`Giá trị trung bình là: ${ketQua}`)


//Bài 5- Viết chương trình đếm số nguyên âm trong một chuỗi:
// let arr = [12, 10, -5, 4, -7, -9, 15, -19, 20, 46];
// let a = 0;
// let sum = [0];
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] < a) {
//         a = [i];
//     console.log(`Phần tử có số nguyên âm ở vị trí số: ${[i]}, với giá trị là: ${arr[i]}`);
//     sum = a;
//     }
// }

