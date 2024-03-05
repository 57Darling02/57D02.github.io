//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '燕子，我不能没有你😢';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '就知道你还会回来😎';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});
<script type="text&#x2F;javascript" src="https://unpkg.com/kity@2.0.4/dist/kity.min.js"></script><script type="text&#x2F;javascript" src="https://unpkg.com/kityminder-core@1.4.50/dist/kityminder.core.min.js"></script><script defer="true" type="text&#x2F;javascript" src="https://unpkg.com/hexo-simple-mindmap@0.8.0/dist/mindmap.min.js"></script><link rel="stylesheet" type="text&#x2F;css" href="https://unpkg.com/hexo-simple-mindmap@0.8.0/dist/mindmap.min.css">