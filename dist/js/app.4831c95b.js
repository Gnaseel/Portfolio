(function(t){function l(l){for(var e,a,o=l[0],r=l[1],c=l[2],C=0,m=[];C<o.length;C++)a=o[C],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);u&&u(l);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,l=0;l<s.length;l++){for(var n=s[l],e=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(e=!1)}e&&(s.splice(l--,1),t=a(a.s=n[0]))}return t}var e={},i={app:0},s=[];function a(l){if(e[l])return e[l].exports;var n=e[l]={i:l,l:!1,exports:{}};return t[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,l,n){a.o(t,l)||Object.defineProperty(t,l,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,l){if(1&l&&(t=a(t)),8&l)return t;if(4&l&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&l&&"string"!=typeof t)for(var e in t)a.d(n,e,function(l){return t[l]}.bind(null,e));return n},a.n=function(t){var l=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(l,"a",l),l},a.o=function(t,l){return Object.prototype.hasOwnProperty.call(t,l)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=l,o=o.slice();for(var c=0;c<o.length;c++)l(o[c]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,l,n){t.exports=n("56d7")},"0fce":function(t,l){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAADAFBMVEUAAADlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCDlHCD////8/Pz9/f3+/v7////swFvaAAAA+nRSTlMAAAIJFy9GWGVqaWBROyQPBgEMMJGyzN/q8vf59e/l2cKmfk0eNXy39vzt0KJdHQQUXLDi+s06BxJMrPH93YMsCEGr8Nh3Ix+C5vvFUgtC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"},"1fe4":function(t,l,n){t.exports=n.p+"img/pjt_2.dceb7393.png"},"222a":function(t,l,n){"use strict";var e=n("c9e2"),i=n.n(e);i.a},"23eb":function(t,l,n){"use strict";var e=n("9906"),i=n.n(e);i.a},3042:function(t,l){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAIAAACx0UUtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAASjSURBVHhe7d3rtao6FAbQUxcFWY/V2IzF3JtAwkMJStQtyJy/zkZWcKx8BkXP4B8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8StOczpfr9b/e9Xo5n5r0aMn6quY82nvO5ZT2rHS6xFGu50dP/Qk/05P9a06Xco+upf7UVX1+ProDvDzKT/Vk7/oGhR42/as9LAZ9u+fWpLqqIBW+ZZ2b9Y6M/lpP9i42KDY1/Tk2NP2ue3VVQXcq/uB8dId/PaO/1JO9C++eyvOZe3vXvrqq4BPz0YXjnN70xSN0w6d3hiE3cfsKP9CTA8mtXTfN5aq68ZblMcveebR99ORIcv/WvcbLVZ+ajyY4BWHdbMeP62r8O25Pu7zNXnpyFHX9K1d9+LTWHbi78POxKd9ZT35e6t/K+ShXfXQ+usHj2N2/PpTSXfXk9717OvqHxuKnmvB559UZ6oZOM51WrU/M+5568vv65q2ajqWqfMKb90Ki7s+kH0rpjnry+5qq2XhYdfcZprtAlIpemJJ4qXx6zHbDW2d4bz35acNre02D6qo6/Zcxm50RPdmOuCB1rVnTm7qqsX4216xRf0RPtqMZTjErzpN1VffyOXFbE6In2zGcldbNRU3VvDzWduZDTzZkdFZa0dW6qqI8Hxt5+6UnG9J/7lzVibqqJVtaM/RkS/q+rnrZ11Ut2tCSoSdbkpuw7oVaV7Usz/D3p0NPNqXudVpXteThde4/pCfbktuwrgt1VbEufQ09msbJdyrhY0ba/EV6sin9+emxUafqqoJ+YZgTZupdK9BL9GRb/ng+QmlcIMb/sTfMQ7eOpB2+T08AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgf/KdBfNtA5sm3nq13dRaulXgzc1db0qfuslgd3fCVBGEolN3z9c0+KHvlU1rnNGYsfaPO/N3XB1ntFS6cC/h4tHaYMooyZDRLhT9Oha1K2P7cHAftj6j53aQWJoeievjQmGQa0tHvFxklM7kLsKjkA1CavqH06ZkyNlsaT/0fc6KQ7aGI8oo44wupCFn5maXIUqFE3qhLh/ziSPKKENGCzHr5L2mOxUiOJL2mO4wP9iNJ3LMQTyZhdmw5YyWwza3xytH5IieWtQKu9Vl9HFVS0ZJvpbRR+GTUZInMzobRxnlLzyX0bzXNDEvZbTqiBzRU1ko7FSX0TzYckhzpYzSJ+aJpN3mpS6jz4R0eFYyeiTdl4y3358PaYiZmctDztl9pCozOhpyPoH9w4GMHscoi5PA5O3p+/Hi1/W32Y6qMzqO4eTXUcPX9ennAzJ6IA8zeposqVOFoLyQ0XDg0c9VprrfpsjoAS2f69PmmJwhOtfl34C+lNHo5henk5+cyijJTUY3Iz8vGWWrGX28RnMUG82oiNLbZEbzkxJRgg1mtP/A770o0VcyGg56vYSP8KdmuBgbhI/55+GClITS+VZG24MWdZdIIfrSub5dMi/X8cXRIF2PFU8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB27t+//wHQR10IUeHfFgAAAABJRU5ErkJggg=="},4251:function(t,l,n){},"4c0c":function(t,l,n){t.exports=n.p+"img/html.991b390d.png"},"50c47":function(t,l,n){"use strict";var e=n("a9b3"),i=n.n(e);i.a},"52e0":function(t,l,n){t.exports=n.p+"img/css.5db97ce8.png"},"56d7":function(t,l,n){"use strict";n.r(l);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),i=function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a={methods:{linkClick:function(t){window.open(t)}}},o=a,r=(n("5c0b"),n("2877")),c=Object(r["a"])(o,i,s,!1,null,null,null),u=c.exports,C=n("8c4f"),m=function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("div",{staticClass:"home"},[n("span",{staticClass:"home_title"},[t._v("Hi, I'm HGnaseel")]),n("div",{staticClass:"home_link"},t._l(t.linkList,(function(l){return n("div",{key:l.name,staticClass:"home_text"},[n("p",{on:{click:function(n){return t.linkClick(l.url)}}},[t._v(t._s(l.name))])])})),0),n("div",{staticClass:"home_main",attrs:{id:"temp"},on:{mousemove:function(l){return t.mainMove()}}},t._l(t.main_link_list,(function(l,e){return n("div",{key:l.name,staticClass:"home_main_text",attrs:{id:l.name},on:{click:function(l){return t.mainClick(t.main_link_list[e].name,t.main_link_list[e].url)},mouseout:function(l){return t.mainOut(e)},mouseover:function(l){return t.mainOver(e)}}},[t._v(t._s(l.name))])})),0)])},H=[],D={name:"Home",data:function(){return{linkList:[{name:"git",url:"https://github.com/Gnaseel"},{name:"kaggle",url:"https://www.kaggle.com/Gnaseel"},{name:"tistory",url:"https://gnaseel.tistory.com"}],main_link_list:[{name:"Column",url:"/gnaseel/Column"},{name:"Pjt",url:"/gnaseel/Projects"},{name:"About",url:"/gnaseel/About"}]}},methods:{linkClick:function(t){window.open(t)},mainOver:function(t){for(var l=["Column","Pjt","About"],n=0;n<3;n++)document.querySelector("#"+l[n]).id=n!=t?l[n]+"_un":l[n]+"_se"},mainOut:function(t){for(var l=["Column","Pjt","About"],n=0;n<3;n++){var e=l[n];e+=t!=n?"_un":"_se";var i=document.getElementById(e);null!=i&&(i.id=l[n])}},mainMove:function(){var t=event.clientX,l=event.clientY,n=screen.width/2-t,e=screen.height/2-l;console.log(n+" "+e),(n<500||n>-500)&&(document.getElementById("temp").style.marginLeft=.7*n+"px"),(e<250||e>-250)&&(document.getElementById("temp").style.marginTop=.2*e+"px")},mainClick:function(t,l){var n=document.getElementById(t+"_se");n.id="selected",n.style.left="10%",n.style.top="10%";var e=document.getElementById("temp");e.id="stop",e.style.marginLeft="0px",e.style.marginTop="0px",setTimeout((function(){location.href=l}),2e3)}}},A=D,p=(n("dbc2"),Object(r["a"])(A,m,H,!1,null,null,null)),d=p.exports,v=function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("div",{staticClass:"projects"},[n("span",{staticClass:"title"},[t._v("Hi, I'm HGnaseel")]),n("div",{staticClass:"menu_link"},[n("div",{staticClass:"menu_button",on:{mouseover:t.dropdownMenu}},[t._v(" 메뉴 ")]),t._l(t.main_link_list,(function(l){return n("div",{key:l.name,staticClass:"menu_item",on:{click:function(n){return t.mainLinkClick(l.url)}}},[t._v(" "+t._s(l.name))])}))],2),n("div",{staticClass:"home_link"},t._l(t.linkList,(function(l){return n("div",{key:l.name,staticClass:"home_text"},[n("p",{on:{click:function(n){return t.linkClick(l.url)}}},[t._v(t._s(l.name))])])})),0),n("div",{staticClass:"homeLink"}),n("div",{staticClass:"main_text"},[t._v("Pjt")]),n("div",{staticClass:"projects_panel"},[n("div",{staticClass:"projects_next"},[n("button",{on:{click:function(l){return t.nextProject(-1)}}},[t._v("좌로")]),n("button",{on:{click:function(l){return t.nextProject(1)}}},[t._v("우로")])]),n("div",{staticClass:"projects_panel_left"},[n("div",{staticClass:"projects_title"},[t._v(t._s(t.imgList[t.pjtCount].title))]),n("div",{staticClass:"projects_disc"},[t._v(t._s(t.imgList[t.pjtCount].disc))])]),n("div",{staticClass:"projects_panel_right"},[n("div",{staticClass:"panel_view"},t._l(t.imgList,(function(l){return n("div",{key:l.id,staticClass:"pjt_item"},[n("img",{staticClass:"projects_img",attrs:{src:l.url}}),n("div",{staticClass:"projects_img_disc"},[n("div",{staticClass:"projects_skills"},[t._v("기술 스택~~"),n("br"),t._l(l.stack,(function(e,i){return n("p",{key:e.id},[t._v(t._s(l.stack[i])+" ")])}))],2),n("div",{staticClass:"projects_date"},[t._v("제작기간"),n("br"),t._v(t._s(l.date))]),n("div",{staticClass:"projects_git"},[t._v("상세정보.......깃 주소 링크")])])])})),0)])])])},f=[],g={mounted:function(){var t=document.getElementsByClassName("projects_panel_right"),l=document.getElementsByClassName("projects_panel_left"),n=document.getElementsByClassName("projects_next"),e=document.getElementsByClassName("menu_link");setTimeout((function(){t[0].style.transform="translate(-1000px, 0px)",l[0].style.transform="translate(0px, -1000px)",n[0].style.transform="translate(1000px, 0px)",e[0].style.transform="translate(1000px, 0px)"}),200)},data:function(){return{pjtCount:0,imgList:[{id:"1",url:n("7daf"),title:"webSocket 이용한 채팅서버",git:"a",date:"2020-20-20 ~ 3030-30-30",disc:"HTTP프로토콜 특성상 서버에서 클라로 요청은 제한되서 하려면 웹 소켓 머시기 거시기~",stack:["Websocket","Java"]},{id:"2",url:n("1fe4"),title:"Spring프레임워크를 사용한 웹사이트",git:"a",date:"1010-10-10 ~ 2020-20-20",disc:"Spring으로 만들고, Oauth로 구글로그인 지원해주면서 기능 연동가능~ 디자인은 bootstap~ 클라우드 플랫폼으로 서버빌리고~ SSH통신~",stack:["Web","Spring","Java","Oauth"]},{id:"3",url:n("8b46"),title:"Data Structure 라이브러리 제작",git:"a",date:"2001-12-34 ~ 4545-45-45",disc:"이건 지금 친구들이랑 하고있는건데~ C++ container 기반으로 자료구조 라이브러리 만들꺼야~ 스터디 하고있고~ 꿍얼꿍얼",stack:["C++","DataStructure","Java"]}],linkList:[{name:"git",url:"https://github.com/Gnaseel"},{name:"kaggle",url:"https://www.kaggle.com/Gnaseel"},{name:"tistory",url:"https://gnaseel.tistory.com"}],main_link_list:[{name:"Home",url:"/gnaseel/"},{name:"Column",url:"/gnaseel/Column"},{name:"About",url:"/gnaseel/About"}]}},methods:{nextProject:function(t){this.pjtCount+=t;var l=document.getElementsByClassName("panel_view");this.pjtCount<0?this.pjtCount=this.imgList.length-1:this.pjtCount==this.imgList.length&&(this.pjtCount=0),l[0].style.transform="translate(0px, "+-550*this.pjtCount+"px)"},mainLinkClick:function(t){window.scrollTo({top:0,behavior:"smooth"}),setTimeout((function(){location.href=t}),400)},linkClick:function(t){window.open(t)},dropdownMenu:function(){var t=document.getElementsByClassName("menu_item"),l=document.getElementsByClassName("menu_button");l[0].style.position="relative";while(null!=t)t[0].className="menu_item_on"}}},k=g,_=(n("23eb"),Object(r["a"])(k,v,f,!1,null,null,null)),b=_.exports,h=function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("div",{staticClass:"about"},[n("span",{staticClass:"title"},[t._v("Hi, I'm HGnaseel")]),n("div",{staticClass:"main_text"},[t._v("About")]),n("div",{staticClass:"home_link"},t._l(t.linkList,(function(l){return n("div",{key:l.name,staticClass:"home_text"},[n("p",{on:{click:function(n){return t.linkClick(l.url)}}},[t._v(t._s(l.name))])])})),0),n("div",{staticClass:"up_button",on:{click:t.upScroll}},[t._v("위")]),n("div",{staticClass:"menu_link"},[n("div",{staticClass:"menu_button",on:{mouseover:t.dropdownMenu}},[t._v(" 메뉴")]),t._l(t.main_link_list,(function(l){return n("div",{key:l.name,staticClass:"menu_item",on:{click:function(n){return t.mainLinkClick(l.url)}}},[t._v(" "+t._s(l.name)+" ")])}))],2),n("div",{staticClass:"about_content"},[t._m(0),n("div",{staticClass:"about_disc_panel"},[n("p",{staticClass:"about_disc_title"},[n("span",{domProps:{innerHTML:t._s(t.aboutDiscTitle)}})]),n("p",{staticClass:"about_disc_content"},[n("span",{domProps:{innerHTML:t._s(t.aboutDiscContent)}})])]),n("div",{staticClass:"skill_stack_title"},[t._v("Skill Stack")]),t._l(t.skillStack,(function(l,e){return n("div",{key:l.domain,staticClass:"skill_stack_panel"},[n("div",{staticClass:"stack_domain"},[t._v(t._s(l.domain))]),t._l(l.skills,(function(i,s){return n("div",{key:i.id,staticClass:"stack_skill",on:{mouseover:function(l){return t.printSkillDisc(e,s)}}},[n("img",{attrs:{src:l.skillsIcon[s]}}),n("div",{staticClass:"skill_name"},[t._v(t._s(l.skills[s]))])])})),n("div",{staticClass:"skill_disc"})],2)}))],2)])},y=[function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"title_image"},[e("img",{attrs:{src:n("c0e1")}})])}],x={mounted:function(){var t=document.getElementsByClassName("menu_link");setTimeout((function(){scrollTo({top:400,behavior:"smooth"}),t[0].style.transform="translate(1000px, 0px)"}),500)},methods:{upScroll:function(){window.scrollTo({top:0,behavior:"smooth"})},linkClick:function(t){window.open(t)},mainLinkClick:function(t){window.scrollTo({top:0,behavior:"smooth"}),setTimeout((function(){location.href=t}),400)},printSkillDisc:function(t,l){var n=document.getElementsByClassName("skill_disc");n[t].innerHTML="<br><br>"+this.skillStack[t].skillsDisc[l];var e=document.getElementsByClassName("skill_stack_panel"),i=e[t].clientHeight;e[t].style.minHeight<i&&(e[t].style.minHeight=i+"px")},dropdownMenu:function(){var t=document.getElementsByClassName("menu_item"),l=document.getElementsByClassName("menu_button");l[0].style.position="relative";while(null!=t)t[0].className="menu_item_on"}},data:function(){return{linkList:[{name:"git",url:"https://github.com/Gnaseel"},{name:"kaggle",url:"https://www.kaggle.com/Gnaseel"},{name:"tistory",url:"https://gnaseel.tistory.com"}],main_link_list:[{name:"Home",url:"/gnaseel/"},{name:"Column",url:"/gnaseel/Column"},{name:"Projects",url:"/gnaseel/Projects"}],aboutDiscTitle:"끈임없이 가치를 추구하는 사람<br/>                            <br/>                            Hi' I'm H-gnaseel",aboutDiscContent:"엔지니어들은 항상 어떻게 일하는지에 관심이 많습니다.<br/>                            <br/>                            하지만 우리는 How보다도 Why에 관심을 가져야 합니다.<br/>                            <br/>                            내가 만드는 모든 것들이 기존의 질서를 산산히 와해시켜서<br/>                            <br/>                            더 나은, 더 긍정적인 세상을 향한 경계에서 미증유의 변화를 일으키도록.<br/>                            <br/><br/>                            기술은 가치를 실현하기 위한 도구일 뿐입니다.<br/>                            <br/>                            사진은 바꿀겁니다...느낌만 볼라고 올린거라 면도도 안했으...                            ",skillStack:[{domain:"Front end",skills:["html","css","JavaScript"],level:[3,2,3],skillsIcon:[n("4c0c"),n("52e0"),n("dd41")],skillsDisc:["기본적인 태그의 사용법과 의미, 웹 표준을 이해하고 있습니다.","간단한 에니메이션을 사용할 수 있고, 컴포넌트를 어떻게 다뤄야하는지 이해하고 있습니다.","항상 간단한 사이트 제작은 직접 프론트 엔드까지 다뤘기 때문에 문제없이 사용합니다."]},{domain:"Front end - FrameWord",skills:["vue.js","Jquery"],level:[2,3],skillsIcon:[n("7c1f"),n("a8df")],skillsDisc:["학교에서 간단한 프로젝트를 vue로 진행해봤었는데, 컴포넌트를 다루는 방법이 상당히 흥미롭습니다.<br>                             그래서 개인적으로도 공부하고 있고, 지금 보고있는 포트폴리오 사이트도 vue.js로 이루어져있습니다.","vue를 배우기 이전까지는 작업 능률을 위해서 항상Jquery를 사용했습니다.<br> 물론 90%이상은                              웹의 구성요소를 쉽고 빠르게 선택하기 위한 셀렉터 호출이었지만 간단한 AJAX통신도 구성할 수 있습니다."]},{domain:"Back end skills",skills:["Spring","php"],level:[3,3],skillsIcon:[n("81a3"),n("c7b9")],skillsDisc:["Spring 프레임워크를 사용해서 많은 프로젝트를 진행했습니다.                             Spring의 강점인 MVC패턴이나 의존성 주입에서 큰 매력을 느낀 것 같습니다.                             특히 Java 플랫폼을 위한 프레임워크라서 항상 틀만 갖추면 안정적이고, 막힘없이 프로젝트가 진행되는 느낌이 좋았습니다.","학교에서 간단한 프로젝트를 진행해본 경험이 있습니다.                             빠른속도로 작게 개발하고 싶을 때 사용하면 매우 편리한 개발환경이었습니다."]},{domain:"Data base",skills:["Oracle","MySQL"],level:[3,2],skillsIcon:[n("0fce"),n("3042")],skillsDisc:["Spring과 연계해서 로그인 기능이 있는 게시판을 구현할 때 다뤄봤습니다.","학교에서 php와 연계해서 회원 정보를 저장하는 용도로 사용해봤습니다."]}]}}},w=x,j=(n("50c47"),Object(r["a"])(w,h,y,!1,null,null,null)),E=j.exports,B=function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("div",{staticClass:"column"},[n("span",{staticClass:"title"},[t._v("Hi, I'm HGnaseel")]),n("div",{staticClass:"main_text"},[t._v("Column")]),n("div",{staticClass:"home_link"},t._l(t.linkList,(function(l){return n("div",{key:l.name,staticClass:"home_text"},[n("p",{on:{click:function(n){return t.linkClick(l.url)}}},[t._v(t._s(l.name))])])})),0),n("div",{staticClass:"menu_link"},[n("div",{staticClass:"menu_button",on:{mouseover:t.dropdownMenu}},[t._v(" 메뉴")]),t._l(t.main_link_list,(function(l){return n("div",{key:l.name,staticClass:"menu_item",on:{click:function(n){return t.mainLinkClick(l.url)}}},[t._v(" "+t._s(l.name)+" ")])}))],2),t._m(0)])},O=[function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("div",{staticClass:"column_panel"},[t._v(" 아직구현안함"),n("br"),t._v("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ")])}],S={mounted:function(){var t=document.getElementsByClassName("menu_link");setTimeout((function(){window.scrollTo({top:400,behavior:"smooth"}),t[0].style.transform="translate(1000px, 0px)"}),500)},data:function(){return{linkList:[{name:"git",url:"https://github.com/Gnaseel"},{name:"kaggle",url:"https://www.kaggle.com/Gnaseel"},{name:"tistory",url:"https://gnaseel.tistory.com"}],main_link_list:[{name:"Home",url:"/gnaseel/"},{name:"Column",url:"/gnaseel/Column"},{name:"About",url:"/gnaseel/About"}]}},methods:{dropdownMenu:function(){var t=document.getElementsByClassName("menu_item"),l=document.getElementsByClassName("menu_button");l[0].style.position="relative";while(null!=t)t[0].className="menu_item_on"},mainLinkClick:function(t){window.scrollTo({top:0,behavior:"smooth"}),setTimeout((function(){location.href=t}),400)}}},P=S,M=(n("222a"),Object(r["a"])(P,B,O,!1,null,null,null)),L=M.exports;e["a"].use(C["a"]);var N=new C["a"]({mode:"history",routes:[{path:"/",name:"Home",component:d},{path:"/Projects",name:"Projects",component:b},{path:"/About",name:"About",component:E},{path:"/Column",name:"Column",component:L}]});e["a"].config.productionTip=!1,new e["a"]({router:N,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,l,n){"use strict";var e=n("9c0c"),i=n.n(e);i.a},"7c1f":function(t,l,n){t.exports=n.p+"img/vue.b6ca750a.png"},"7daf":function(t,l,n){t.exports=n.p+"img/pjt_1.83117d28.png"},"81a3":function(t,l,n){t.exports=n.p+"img/spring.718633c3.png"},"8b46":function(t,l,n){t.exports=n.p+"img/pjt_3.efec6bad.png"},9906:function(t,l,n){},"9c0c":function(t,l,n){},a8df:function(t,l,n){t.exports=n.p+"img/jquery.86e8b271.png"},a9b3:function(t,l,n){},c0e1:function(t,l,n){t.exports=n.p+"img/aboutImg.af3fc56f.png"},c7b9:function(t,l,n){t.exports=n.p+"img/php.e862485e.png"},c9e2:function(t,l,n){},dbc2:function(t,l,n){"use strict";var e=n("4251"),i=n.n(e);i.a},dd41:function(t,l,n){t.exports=n.p+"img/js.bdd6b4c1.png"}});
//# sourceMappingURL=app.4831c95b.js.map