<template>
  <h1 style="margin-top:50px">横纵滚动条不重叠(通过设置轨道宽高控制)</h1>
  <c-scrollbar max-width="120px"
               max-height="110px"
               direction="all"
               :vBarStyle="{
               'background-color':'rgba(0,0,0,0.1)',
             }"
               :hBarStyle="{
               'background-color':'rgba(0,0,0,0.2)',
                'width':'calc(100% - 6px)'
             }"
               :vThumbStyle="{
                'background-color':'rgba(0,0,0,0.3)'
             }"
               :hThumbStyle="{
                'background-color':'rgba(0,0,0,0.4)'
             }">
    <p style="white-space:nowrap">最大高度，最大宽度设置</p>
    <ul>
      <li>一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条一直显示滚动条</li>
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
