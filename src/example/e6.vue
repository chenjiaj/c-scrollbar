<template>

  <h1 style="margin-top:50px">仅横向滚动，纵向超出隐藏</h1>
  <c-scrollbar width="500px"
               height="100px"
               direction="x"
               :vBarStyle="{
               'background-color':'rgba(0,0,0,0.1)'
             }"
               :hBarStyle="{
               'background-color':'rgba(0,0,0,0.2)'
             }"
               :vThumbStyle="{
                'background-color':'rgba(0,0,0,0.3)'
             }"
               :hThumbStyle="{
                'background-color':'rgba(0,0,0,0.4)'
             }">
    <p style="white-space:nowrap">一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条</p>
    <ul>
      <li>一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条</li>
      <li>默认向上滚动100</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
    </ul>
  </c-scrollbar>
</template>
