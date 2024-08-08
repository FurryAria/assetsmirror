// 获取meta标签
var metaTag = document.querySelector('meta[name="version"]');
// 检查meta标签是否存在
if (metaTag) {
  // 输出版本号
  console.log("网页版本号: " + metaTag.content);
} else {
  // 如果meta标签不存在，输出错误信息
  console.log("未找到版本号信息");
}
