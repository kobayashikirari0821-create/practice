//100から150までの数を順番に処理。
for (let i = 100; i <= 150; i++){
  // 4の倍数かつ6の倍数（12の倍数）のとき
  if(i % 4 === 0 && i % 6 === 0){
    console.log("FizzBuzz"+String(i))
  }
}
