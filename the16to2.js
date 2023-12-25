
// 16进制转2进制
function hexToBinary(hex) {
  // 将十六进制数转换为整数
  const decimal = parseInt(hex, 16);

  // 将整数转换为二进制字符串
  const binary = decimal.toString(2);

  return binary;
}

// 示例使用
const hexNumber = "A3"; // 要转换的十六进制数
const binaryNumber = hexToBinary(hexNumber);
console.log(binaryNumber); // 输出二进制数
