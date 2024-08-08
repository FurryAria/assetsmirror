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
    // 版本号不同，设置标志并刷新页面
    console.log("版本号不同，设置标志并刷新页面");
    localStorage.setItem('refreshFlag', 'true');
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

// 在页面加载完成后检查标志并清除
window.addEventListener('load', function() {
  var refreshFlag = localStorage.getItem('refreshFlag');
  if (refreshFlag === 'true') {
    // 清除标志
    localStorage.removeItem('refreshFlag');
    // 刷新页面
    location.reload();
  }
});
