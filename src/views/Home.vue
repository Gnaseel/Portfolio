<template>
  <div class="home">
    <span class="title">Hi, I'm HGnaseel</span>
    <div class="out_link">
      <div class="home_text" v-for="link in linkList" :key="link.name">
        <p @click="linkClick(link.url)">{{link.name}}</p>
      </div>
    </div>

    <div @mousemove="mainMove()" class="home_main" id="temp">
      
      <div v-for="(item, index) in main_link_list" :key="item.name" 
      @click="mainClick(main_link_list[index].name,main_link_list[index].url)" @mouseout="mainOut(index)" @mouseover="mainOver(index)" 
      class="home_main_text" v-bind:id="item.name">{{item.name}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      linkList:[
        { name:"git", url:"https://github.com/Gnaseel" },
        { name:"kaggle", url:"https://www.kaggle.com/Gnaseel" },
        { name:"tistory", url:"https://gnaseel.tistory.com" },
      ],
      main_link_list:[
        { name:"Column", url:"/gnaseel/Column" },
        { name:"Pjt", url:"/gnaseel/Projects" },
        { name:"About", url:"/gnaseel/About" },
      ],
    }
  },
  methods:{
    linkClick(url){
      window.open(url);
    },
    mainOver(num){
      let list = [
        "Column", "Pjt", "About"
      ]
      
      for(let i=0;i<3;i++){
        if(i!=num){
         document.querySelector('#'+list[i]).id= list[i]+'_un';
        }else{
          document.querySelector('#'+list[i]).id= list[i]+'_se';
        }
      }
    },
    mainOut(num){
      let list = [
        "Column", "Pjt", "About"
      ]
      for(let i=0;i<3;i++){
        let v=list[i];
        if(num!=i) v+='_un';
        else v+='_se';
        var a = document.getElementById(v);
        if(a!=null)
          a.id=list[i]
      }
    },
    mainMove(){
      var x=event.clientX;
      var y=event.clientY;
      var mX= screen.width/2-x;
      var mY= screen.height/2-y;
      console.log(mX+' '+mY);
      //document.getElementById('temp').style.left = mX*0.5+'px'; 
      //document.getElementById('temp').style.top = mY*0.2-30+'px';
      if(mX<500||mX>-500) document.getElementById('temp').style.marginLeft= mX*0.7+'px';
      if(mY<250||mY>-250) document.getElementById('temp').style.marginTop= mY*0.2+'px';
      // needFix - 화면 크기에 따른 비율로~
    },
    mainClick(id,url){
      var el=document.getElementById(id+"_se");
     
      el.id="selected";
      el.style.left="10%";
      el.style.top="10%";
      if(url==null)
        url=null;
      /* Mouse stop */
      var main=document.getElementById("temp");
      main.id="stop";
      main.style.marginLeft="0px";
      main.style.marginTop="0px";
      
      setTimeout(function(){
        this.$router.push(url);
      }.bind(this),2000);
      
    },
  },
  
};
</script>
<style lang="scss">

.home{
  width:100%;
  height:100%;
  display:inline-block;
  background: black;
  color:blanchedalmond;

  span{
    color:rgb(139, 133, 133);
    position:fixed;
    top: 50px;
    left:573px;
  }
  
  .home_main{
    margin-top:50px;
    
    height:700px;
    width:140%;
    display:flex;
    transition-duration: 2s;
    transition-timing-function:ease;
    position: absolute;
    color:rgb(211, 196, 174);

    *{font-size:230px;}
    .home_main_text{
      font-size:230px;
      display:inline-block;
      position: absolute;
      transition-duration: 0.8s;
      font-weight: bold;
    }
    :hover{
     color:rgb(211, 169, 111);
     font-size:280px; 
     letter-spacing: 10px;
     transition-duration:2s;
    }
    #Column{
      top:35%;
      left:-25%;
    }
    #Column_un{
      top:35%;
      left:-25%;
      color:rgb(92, 87, 80);
      font-size:150px;
    }
    #Column_se{
      top:35%;
      z-index: 3;
      left:-5%;
    }
    #Pjt{
      top:55%;
      left:30%; 
    }
    #Pjt_un{
      color:rgb(92, 87, 80);
      top:55%;
      left:30%;
      font-size:150px;
    }
    #Pjt_se{
      top:55%;
      left:27%;
      z-index: 3;
      
    }
    #About{
      top:35%;
      left:65%;
    }
    #About_un{
      top:35%;
      left:65%;
      color:rgb(92, 87, 80);
      font-size:150px;
    }
    #About_se{
      top:35%;
      z-index:3;
      left:55%;
    }
  }
}
</style>