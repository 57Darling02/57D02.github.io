// 音乐绑定事件
function musicBindEvent() {
  document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
    anzhiyu.musicTelescopic();
  });
  document.querySelector("#nav-music .aplayer-button").addEventListener("click", function () {
    anzhiyu.musicToggle(false);
  });
}
<script type="text&#x2F;javascript" src="https://unpkg.com/kity@2.0.4/dist/kity.min.js"></script><script type="text&#x2F;javascript" src="https://unpkg.com/kityminder-core@1.4.50/dist/kityminder.core.min.js"></script><script defer="true" type="text&#x2F;javascript" src="https://unpkg.com/hexo-simple-mindmap@0.8.0/dist/mindmap.min.js"></script><link rel="stylesheet" type="text&#x2F;css" href="https://unpkg.com/hexo-simple-mindmap@0.8.0/dist/mindmap.min.css">