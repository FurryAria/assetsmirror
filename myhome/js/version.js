// 获取meta标签
var metaTag = document.querySelector('meta[name="version"]');
// 检查meta标签是否存在
if (metaTag) {
  // 输出版本号
  console.log("网页版本号: " + metaTag.content);
  
  // 获取之前存储的版本号
  var previousVersion = localStorage.getItem('previousVersion');
  
  // 比较当前版本号和之前存储的版本号
  if (previousVersion !== metaTag.content) {
    // 版本号不同，删除缓存并刷新页面
    console.log("版本号不同，删除缓存并刷新页面");
    localStorage.removeItem('previousVersion');
    localStorage.clear(); // 清除所有缓存
    location.reload(); // 刷新页面
  } else {
    // 版本号相同，更新存储的版本号
    console.log("版本号相同，更新存储的版本号");
    localStorage.setItem('previousVersion', metaTag.content);
  }
} else {
  // 如果meta标签不存在，输出错误信息
  console.log("未找到版本号信息");
}
