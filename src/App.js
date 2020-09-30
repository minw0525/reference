
import React, { Component, useState , useEffect} from 'react';
import {useSpring, animated, useTrail} from 'react-spring';
import Iframe from 'react-iframe'
import './App.css';
import useMouse from '@react-hook/mouse-position'
import useVariableFont from "react-variable-fonts";

import img_poster from './img/poster.jpg'
import wk_1 from './img/wk_1.jpg'
import wk_2 from './img/wk_2.jpg'
import wk_3 from './img/wk_3.jpg'
import wk_4 from './img/wk_4.jpg'
import wk_5 from './img/wk_5.jpg'
import downmouse from './img/down-01.png'

import p1 from './logo/p1-01.png'
import p2 from './logo/p2-01.png'
import p3 from './logo/p3-01.png'
import p4 from './logo/p4-01.png'
import p5 from './logo/p5-01.png'
import p6 from './logo/p6-01.png'
import p7 from './logo/p7-01.png'
import p8 from './logo/p8-01.png'
import p9 from './logo/p9-01.png'
import p10 from './logo/p10-01.png'
import p11 from './logo/p11-01.png'
import p12 from './logo/p12-01.png'
import p13 from './logo/p13-01.png'
import p14 from './logo/p14-01.png'
import p15 from './logo/p15-01.png'
import p16 from './logo/p16-01.png'
import p17 from './logo/p17-01.png'
import p18 from './logo/p18-01.png'
import logo from './logo/logo-01.png'

const $ = window.$;

const windoww = window.innerWidth;
const windowh = window.innerHeight;

var axes = 1

var Hmax = 0
var Hmin = 52
var Ymax = 0
var Ymin = 0
var Zmax = 0
var Zmin = 0

var varZ = 0
var LastZ = 0
var changeStyles = {}


const initialSettings = {
  wght : 2,
}

function App() {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const [bwidth, setbWidth] = useState(0)
  const [bheight, setbHeight] = useState(0)

  const [yheight, setyHeight] = useState(0)

  const [isHopen, setHopen] = useState(true); 
  const [isHHover, setHHover] = useState(true); 

  const HHover_A = useSpring({
    fontWeight : isHHover ? 800  : 300,
  })

 

  const [isArchiveOpen, setArchiveOpen] = useState(false);
  const [isArchiveHover, setArchiveHover] = useState(false);


  const ArchiveHover_A = useSpring({
    fontWeight : isArchiveHover ? 800  : 300,
  })



  const ArchiveOpenAnimation_Right = useSpring({
    left : isArchiveOpen ?  '0px'  : windoww*0.7+"px" ,
  
    })
  const ArchiveOpenAnimation_Left = useSpring({
    left : isArchiveOpen ?   '0px'  : -windoww*0.7+"px",

  })

  const [isWorkshopOpen, setWorkshopOpen] = useState(false);  
  const [isWorkshopHover, setWorkshopHover] = useState(false); 

  const WorkshopOpenAnimation = {
    display : isWorkshopOpen ?  'block'  :'none',
  }

  const WorkshopHover_A = useSpring({
    fontWeight : isWorkshopHover ? 800  : 300,
  })

  const [isMouseShowRoom, setMouseShowroom] = useState(false);



  ////////////////

  const ref = React.useRef(null)
  const pageref = React.useRef(null)
  const bgref = React.useRef(null)
  const logoref = React.useRef(null)
  const yref = React.useRef(null)

  useEffect(() => {
    setWidth(pageref.current.clientWidth)
    setHeight(pageref.current.clientHeight)
    setbWidth(logoref.current.clientWidth)
    setbHeight(logoref.current.clientHeight)
    setyHeight(yref.current.clientHeight)
    console.log('ddd' + yheight)
  })

  const bmouse = useMouse(bgref, {
    enterDelay: 10,
    leaveDelay: 10,
  })

  const mouse = useMouse(ref, {
    enterDelay: 10,
    leaveDelay: 10,
  })

  const VerticalLine = {
    left : mouse.x + width + 'px',
    display: isMouseShowRoom ? 'block' : 'none' 
  }

  const HorizentalLine = {
    top : mouse.y +'px',
    display: isMouseShowRoom ? 'block' : 'none' 
  }

  

  function font_1() {
    $("#wordroom").html('A');
    $("#wordroom").css("font-family", 'font_1');
    $("#wordroom").css("font-size", '100vw');
    $("#wordroom").css("margin-top", '-45vw');
    $("#wordroom").css("margin-left", '-5vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('곽서영<br><br>어슷썰은 끝획의 비스듬한 모양이 어슷썬 채소의 모양과 비슷한 듯 하여 붙여준 이름이다. 스텐실처럼 열린 속공간의 글자가 볼드해질 때 연결부가 어떻게 결합되는지를 배리어블을 통해 나타내고자 했다. ');
    axes = 1
    Hmin = 0
    Hmax = 52
  }

  function font_2() {
    $("#wordroom").html('ABC');
    $("#wordroom").css("font-family", 'font_2');
    $("#wordroom").css("font-size", '25vw');
    $("#wordroom").css("margin-top", '12vw');
    $("#wordroom").css("margin-left", '2vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('권순형<br><br>궁체 정자가 반흘림체로 변화한다. 흘겨씀에 따라 생기는 글자 간의 이음다리와 바뀌는 자소의 모양새, 두드러지는 필압 차이에 주목했다. 한글자 한글자의 외곽 생김새가 다른 단어, 백여덟에 이를 담아냈다. ');
    axes = 1
    Hmin = 0
    Hmax = 102
  }

  function font_3() {
    $("#wordroom").html('A');
    $("#wordroom").css("font-family", 'font_3');
    $("#wordroom").css("font-size", '70vw');
    $("#wordroom").css("margin-top", '-18vw');
    $("#wordroom").css("margin-left", '-11vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('김형준<br><br>축의 변화를 시간, 계절의 변화로 가정했다. 날이 지나면서 꽃이 피고 지는 것을 그려보았다. ');
    
    axes = 1
    Hmin = 0
    Hmax = 52
  }

  function font_4() {
    $("#wordroom").html('ABCDEF\nGHIJK\LMNOPQ\nRSTUV\nWXYNZ\n?!GSB.,');
    $("#wordroom").css("font-family", 'font_4');
    $("#wordroom").css("font-size", '14vw');
    $("#wordroom").css("margin-top", '11vw');
    $("#wordroom").css("margin-left", '20vw');
    $("#wordroom").css("line-height", '0.6');
    $("#fontdesc").html('노현수<br><br>거대한 철도 구조물을 보고 압도되었던 인상을 담았다. 축이 변하며 무거준 알파벳 구조들이 드러난다 ');
    

    axes = 1
    Hmin = 99
    Hmax = 202
  }

  function font_5(){
    $("#wordroom").html('백<br>여<br>덟');
    $("#wordroom").css("font-family", 'ex1_font');
    $("#wordroom").css("font-size", '14vw');
    $("#wordroom").css("margin-top", '6vw');
    $("#wordroom").css("margin-left", '17vw');
    $("#wordroom").css("line-height", '1.05');
    $("#fontdesc").html('권순형<br><br>궁체 정자가 반흘림체로 변화한다. 흘겨씀에 따라 생기는 글자 간의 이음다리와 바뀌는 자소의 모양새, 두드러지는 필압 차이에 주목했다. 한글자 한글자의 외곽 생김새가 다른 단어, 백여덟에 이를 담아냈다.');
    
    axes = 2
    Hmin = 0
    Hmax = 100
    Ymin = 0
    Ymax = 50
  }

  function font_6() {
    $("#wordroom").html('A');
    $("#wordroom").css("font-family", 'font_6');
    $("#wordroom").css("font-size", '40vw');
    $("#wordroom").css("margin-top", '-3vw');
    $("#wordroom").css("margin-left", '2vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('박경민<br><br>소멸이라는 단어가 획과 획으로 분리가 되고, 점차 둥글어지다가 하나의 점으로 줄어들고 없어지는 과정을 배리어블 폰트로 구현하였다. 물성을 가지고 있는 물체가 사라지는 과정에 주목하고자 했다.');
    
    axes = 1
    Hmin = 0
    Hmax = 102
  }

  function font_7() {
    $("#wordroom").html('A');
    $("#wordroom").css("font-family", 'font_7');
    $("#wordroom").css("font-size", '70vw');
    $("#wordroom").css("margin-top", '-21vw');
    $("#wordroom").css("margin-left", '3.5vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('이수지<br><br>숨을 호흡기관과 뼈대에 비유해 들숨과 날숨을 한 축으로 오가는 배리어블 폰트를 제작했다. 자소의 개별 형태와 결합된 형상은 폐의 구조와도 닮아있다. 숨을 넉넉히 들이쉬고 내쉬면서 속공간과 엘리먼트의 변화를 살펴보길 추천한다.');
    
    axes = 1
    Hmin = 0
    Hmax = 102
  }

  function font_8() {
    $("#wordroom").html('0');
    $("#wordroom").css("font-family", 'font_8');
    $("#wordroom").css("font-size", '50vw');
    $("#wordroom").css("margin-top", '0vw');
    $("#wordroom").css("margin-left", '3.5vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('박다인<br><br>싹이 움트는 순간을 따 배리어블 폰트로 제작하였다. 대지부터 돋아나는 새싹의 시기까지, 불규칙한 자연의 형상을 담으려 손글씨 느낌을 살려 제작했다. 싹의 움직임을 통해 생동감을 느껴보길 바란다.');
   
    axes = 1
    Hmin = 0
    Hmax = 102
  }

  function font_9() {
    $("#wordroom").html('AB');
    $("#wordroom").css("font-family", 'ex2_font');
    $("#wordroom").css("font-size", '35vw');
    $("#wordroom").css("margin-top", '4.5vw');
    $("#wordroom").css("margin-left", '6vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('조수연<br><br>쌓다는 블록 쌓기의 경험을 시작으로 한다. 두 개의 축을 통해 한곳에서 볼 때만은 온전히 알 수 없었던 블록 입체물의 모습을 발견할 수 있도록 제작했다. 남은 한 축을 통해서는 블록의 높낮이를 통한 변화를 표현했다.');
    // $("#wordroom").css("animation", 'breathe 4000ms infinite forwards');
    // $("#wordroom").css("animation-play-state", 'running');
    // $("#wordroom").css("line-height", 'normal');
    axes = 2
    Hmin = 0
    Hmax = 102
    Ymin = 0
    Ymax = 102
    Zmin = 0
    Zmax = 102
  }

  function font_10() {
    $("#wordroom").html('A');
    $("#wordroom").css("font-family", 'font_10');
    $("#wordroom").css("font-size", '31vw');
    $("#wordroom").css("margin-top", '7vw');
    $("#wordroom").css("margin-left", '3vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('김지현<br><br>눈에 익숙한 세리프계열의 악상기호가 푸투라화되는 모습을 담았다. 획 간 대비를 없앤 형태들이 낯설지만 새롭게 다가온다.');
   
    axes = 1
    Hmin = 0
    Hmax = 102
  }

  function font_11() {
    $("#wordroom").html('어슷썰');
    $("#wordroom").css("font-family", 'font_11');
    $("#wordroom").css("font-size", '20vw');
    $("#wordroom").css("margin-top", '15vw');
    $("#wordroom").css("margin-left", '3.5vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('곽서영<br><br>어슷썰은 끝획의 비스듬한 모양이 어슷썬 채소의 모양과 비슷한 듯 하여 붙여준 이름이다. 스텐실처럼 열린 속공간의 글자가 볼드해질 때 연결부가 어떻게 결합되는지를 배리어블을 통해 나타내고자 했다. ');
   
    axes = 1
    Hmin = 100
    Hmax = 901
  }

  function font_12() {
    $("#wordroom").html('U');
    $("#wordroom").css("font-family", 'font_12');
    $("#wordroom").css("font-size", '30vw');
    $("#wordroom").css("margin-top", '4vw');
    $("#wordroom").css("margin-left", '7vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('민정은<br><br>배리어블 폰트로 제작한 한글 단어 우주. 각 음소는 별, 별의 이동과 궤도로 자리를 차지한다. 변화되는 글자의 획을 따라 공간이 확장되는 배리어블 폰트 우주는 실제 우주의 형성과도 닮아있다. ');
   
    axes = 1
    Hmin = 0
    Hmax = 101
  }

  function font_13() {
    $("#wordroom").html('A');
    $("#wordroom").css("font-family", 'font_13');
    $("#wordroom").css("font-size", '50vw');
    $("#wordroom").css("margin-top", '1vw');
    $("#wordroom").css("margin-left", '10vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('박산하<br><br>서세옥 작가의 그림에서 보이는 독특한 사람 형태와, 그와 닮은 웃이라는 문자를 연결했다. 문자와 그림 간 경계를 오간다.');
   
    axes = 1
    Hmin = 0
    Hmax = 110
  }

  function font_14() {
    $("#wordroom").html('FORGOTTEN');
    $("#wordroom").css("font-family", 'font_14');
    $("#wordroom").css("font-size", '4vw');
    $("#wordroom").css("margin-top", '25vw');
    $("#wordroom").css("margin-left", '4vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('김은재<br><br>설정값이 늘어남에 따라 글자들이 점차 회전하며, 식별이 어려운 애매모한 형태로 변화해가는 모습을 표현한 작업이다. 이를 통해 잊혀져간 것들(forgotten)을 모습을 담아내고자 했다.');
   
    axes = 1
    Hmin = 0
    Hmax = 101
  }

  function font_15() {
    $("#wordroom").html('A');
    $("#wordroom").css("font-family", 'font_15');
    $("#wordroom").css("font-size", '100vw');
    $("#wordroom").css("margin-top", '-47vw');
    $("#wordroom").css("margin-left", '-4vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('임사랑<br><br>붓을 쥐고 한글 정체와 흘림체를 써 내려가는 손은 마치 사람이 춤을 추는 것 같아 보인다. 은은한 형태의 정체와 강렬한 형태의 흘림체를 연결 지음으로써, 글자를 쓸 때의 다양한 손의 움직임을 생생하게 느낄 수 있도록 했다.');
   
    axes = 1
    Hmin = 0
    Hmax = 101
  }


  function font_16() {
    $("#wordroom").html('A');
    $("#wordroom").css("font-family", 'font_16');
    $("#wordroom").css("font-size", '45vw');
    $("#wordroom").css("margin-top", '0vw');
    $("#wordroom").css("margin-left", '10vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('김은서<br><br>폭탄이 폭발하는 형상을 배리어블 폰트로 재현했다. 폭탄이 폭발하는 현상의 불규칙성과 강렬함은 변화하는 글자의 모습에서 관찰할 수 있다.');
   
    axes = 1
    Hmin = 0
    Hmax = 101
  }

  function font_17() {
    $("#wordroom").html('B');
    $("#wordroom").css("font-family", 'font_17');
    $("#wordroom").css("font-size", '75vw');
    $("#wordroom").css("margin-top", '-26vw');
    $("#wordroom").css("margin-left", '3.5vw');
    $("#wordroom").css("line-height", 'normal');
    $("#fontdesc").html('태솔비<br><br>바람에 따라 기울기가 달라지는 풀을 닮은 모듈이 부드러운 곡선의 뼈대 위에서 일어나고, 누우면서 획의 방향성을 바꾼다. 이를 통해 가로획과 세로획의 두께 대비가 변화하며 글자의 인상이 달라진다.');
   
    axes = 2
    Hmin = 0
    Hmax = 101
    Ymin = 0
    Ymax = 101
  }

  function getRatioH() {
    var ratio = width / (Hmax - Hmin)
    var value = Math.round(mouse.x / ratio * 100) / 100
    // console.log(value)
    return value + Hmin
  }

  function getRatioY() {
    var yratio = width / (Ymax - Ymin)
    var yvalue = Math.round(mouse.y / yratio * 100) / 100
    // console.log(value)
    return yvalue + Ymin
  }

  function getRatioZ() {
    if(LastZ == 0){
      varZ = varZ+0.5
      if(varZ == 100){
        LastZ = 100
      }
    } else if (LastZ==100) {
      varZ= varZ - 0.5
      if(varZ==0){
        LastZ = 0
      }
    }

    // console.log('varZ : ' + varZ)
    return varZ
  }

  // function setZ(event){
  //   varZ = event.target.value
  // }

  function getStyle() {
    if (axes==1) {
      changeStyles = {
        wght : getRatioH()
      }
      $("#vertical").css("opacity", '1');
      $("#horizental").css("opacity", '0');

    }

    else if (axes==2) {
      changeStyles = {
        wght : getRatioH(),
        wdth : getRatioY()
      }
      $("#vertical").css("opacity", '1');
      $("#horizental").css("opacity", '1');
    }

    else if (axes==3) {
      changeStyles = {
        wght : getRatioH(),
        wdth : getRatioY(),
        ital : getRatioZ()
      }
      $("#vertical").css("opacity", '1');
      $("#horizental").css("opacity", '1');
    }

  }

  // console.log(changeStyles)
  const minus_b = 0.35
  const plus_b = 0.57

  const [Customstyles, updateStyles] = useVariableFont("font_1", initialSettings);

  function logo_1(args){
    var max = 0 * windoww/2
    var min = 0.8 * windoww/2
    if (args<=minus_b) {
      var r = -1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = -1 *(plus_b - args) * min
    } 

    return r
  }

  function logo_2(args){
    var max = 1.9 * windowh/2
    var min = 0.8 * windowh/2
    if (args<=minus_b) {
      var r = -1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = -1 *(plus_b - args) * min
    } 

    return r
  }

  function logo_3(args){
    var max = 0 * windoww/2
    var min = 1.9 * windoww/2
    if (args<=minus_b) {
      var r = 1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = 1 *(plus_b - args) * min
    } 

    return r
  }

  function logo_4(args){
    var max = 1.3 * windoww/2
    var min = 0 * windoww/2
    if (args<=minus_b) {
      var r = -1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = -1 *(plus_b - args) * min
    } 

    return r
  }

  function logo_5(args){
    var max = 0 * windoww/2
    var min = 1.6 * windoww/2
    if (args<=minus_b) {
      var r = -1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = -1 *(plus_b - args) * min
    } 

    return r
  }

  function logo_6(args){
    var max = 1.5* windowh/2
    var min = 1.6 * windowh/2
    if (args<=minus_b) {
      var r = -1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = -1 *(plus_b - args) * min
    } 

    return r
  }
  
  function logo_7(args){
    var max = 1.6 * windowh/2
    var min = 1.5 * windowh/2
    if (args<=minus_b) {
      var r = 1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = 1 *(plus_b - args) * min
    } 

    return r
  }

   
  function logo_8(args){
    var max = 1 * windoww/2
    var min = 1.4 * windoww/2
    if (args<=minus_b) {
      var r = 1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = 1 *(plus_b - args) * min
    } 

    return r
  }
  
  function logo_9(args){
    var max = 0 * windoww/2
    var min = 1.9  * windoww/2
    if (args<=minus_b) {
      var r = -1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = -1 *(plus_b - args) * min
    } 

    return r
  }

  function logo_10(args){
    var max = 1.9 * windowh/2
    var min = 0 * windowh/2
    if (args<=minus_b) {
      var r = -1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = 1 *(plus_b - args) * min
    } 

    return r
  }
  
  function logo_11(args){
    var max = 1.9 * windowh/2
    var min = 0 * windowh/2
    if (args<=minus_b) {
      var r = -1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = 1 *(plus_b - args) * min
    } 

    return r
  }
  
  function logo_13(args){
    var max =  0* windowh/2
    var min =  1.9 * windowh/2
    if (args<=minus_b) {
      var r = 1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = 1 *(plus_b - args) * min
    } 

    return r
  }
  
  function logo_14(args){
    var max =  0* windowh/2
    var min =  1.3 * windowh/2
    if (args<=minus_b) {
      var r = -1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = -1 *(plus_b - args) * min
    } 

    return r
  }
  
    
  function logo_16(args){
    var max =  0* windowh/2
    var min =  1.3 * windowh/2
    if (args<=minus_b) {
      var r = 1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = 1 *(plus_b - args) * min
    } 

    return r
  }
  
      
  function logo_17(args){
    var max =  0* windowh/2
    var min =  1 * windowh/2
    if (args<=minus_b) {
      var r = 1 * (minus_b - args) * max
    } else if(args=>plus_b){ 
      var r = 1 *(plus_b - args) * min
    } 

    return r
  }
  
  function logoOpacontrol(bol){
    if (bol==false){
      $("#p1").css("display", 'none');
      $("#p2").css("display", 'none');
      $("#p3").css("display", 'none');
      $("#p4").css("display", 'none');
  
      $("#p5").css("display", 'none');
      $("#p6").css("display", 'none');
      $("#p7").css("display", 'none');
      $("#p8").css("display", 'none');
      $("#p9").css("display", 'none');
      $("#p10").css("display", 'none');
      $("#p18").css("display", 'none');
      $("#p11").css("display", 'none');
      $("#p12").css("display", 'none');
      $("#p13").css("display", 'none');
    
      $("#p14").css("display", 'none');
      $("#p15").css("display", 'none');
      $("#p16").css("display", 'none');
      $("#p17").css("display", 'none');
      $("#logo").css("display", 'block');
      $("#hanguelggol").css("color", 'white');
      $("#workshop").css("color", 'white');
      $("#archive").css("color", 'white');
      $("#hanguelggol").css("font-weight", '800');
 
    } else {
      $("#p1").css("display", 'block');
      $("#p2").css("display", 'block');
      $("#p3").css("display", 'block');
      $("#p4").css("display", 'block');
  
      $("#p5").css("display", 'block');
      $("#p6").css("display", 'block');
      $("#p7").css("display", 'block');
      $("#p8").css("display", 'block');
      $("#p9").css("display", 'block');
      $("#p10").css("display", 'block');
      $("#p18").css("display", 'block');
      $("#p11").css("display", 'block');
      $("#p12").css("display", 'block');
      $("#p13").css("display", 'block');
    
      $("#p14").css("display", 'block');
      $("#p15").css("display", 'block');
      $("#p16").css("display", 'block');
      $("#p17").css("display", 'block');
      $("#logo").css("display", 'none');
      $("#hanguelggol").css("color", 'black');
      $("#workshop").css("color", 'black');
      $("#archive").css("color", 'black');
      $("#hanguelggol").css("font-weight", '300');
      
    }
  }

  function deletelogo(){
    
      $("#p1").css("margin-left", 0);
      $("#p2").css("margin-top", 0);
      $("#p3").css("margin-left", 0);
      $("#p4").css("margin-top", 0);
  
      $("#p5").css("margin-left", 0);
      $("#p6").css("margin-top", 0);
      $("#p7").css("margin-top", 0);
      $("#p8").css("margin-left", 0);
      $("#p9").css("margin-left", 0);
      $("#p10").css("margin-top", 0);
      $("#p18").css("margin-top", 0);
      $("#p11").css("margin-left", 0);
      $("#p12").css("margin-left", 0);
      $("#p13").css("margin-top", 0);
    
      $("#p14").css("margin-top", 0);
      $("#p15").css("margin-top", 0);
      $("#p16").css("margin-top", 0);
      $("#p17").css("margin-top", 0);
    
  }

  function logo_change(){
    var width_ratio  = bmouse.x / windoww 
    var height_ratio = bmouse.y / windowh 

    if ( minus_b<width_ratio && width_ratio<plus_b && height_ratio<plus_b && minus_b<height_ratio){
      $("#background").css("background-color", 'black');
      $("#hanguelggol").css("color", 'white');
      $("#workshop").css("color", 'white');
      $("#archive").css("color", 'white');
      

      $("#p1").css("margin-left", 0);
      $("#p2").css("margin-top", 0);
      $("#p3").css("margin-left", 0);
      $("#p4").css("margin-top", 0);
  
      $("#p5").css("margin-left", 0);
      $("#p6").css("margin-top", 0);
      $("#p7").css("margin-top", 0);
      $("#p8").css("margin-left", 0);
      $("#p9").css("margin-left", 0);
      $("#p10").css("margin-top", 0);
      $("#p18").css("margin-top", 0);
      $("#p11").css("margin-left", 0);
      $("#p12").css("margin-left", 0);
      $("#p13").css("margin-top", 0);
    
      $("#p14").css("margin-top", 0);
      $("#p15").css("margin-top", 0);
      $("#p16").css("margin-top", 0);
      $("#p17").css("margin-top", 0);

      logoOpacontrol(false)
      console.log(1)
      
    } else if (minus_b<width_ratio && width_ratio<plus_b) {
      logoOpacontrol(true)
      $("#background").css("background", 'white');
      $("#p1").css("margin-left", 0);
      $("#p3").css("margin-left", 0);
   
      $("#p5").css("margin-left", 0);
      $("#p8").css("margin-left", 0);
      $("#p9").css("margin-left", 0);
      $("#p11").css("margin-left", 0);
      $("#p12").css("margin-left", 0);
      console.log(2)

      $("#p2").css("margin-top", logo_2(height_ratio));
      $("#p6").css("margin-top", logo_6(height_ratio));
      $("#p7").css("margin-top", logo_7(height_ratio));
      $("#p10").css("margin-top", logo_10(height_ratio));
      $("#p18").css("margin-top", logo_10(height_ratio));
      $("#p13").css("margin-top", logo_13(height_ratio));
      $("#p4").css("margin-top", logo_4(height_ratio));
      $("#p14").css("margin-top", logo_14(height_ratio));
      $("#p15").css("margin-top", logo_14(height_ratio));
      $("#p16").css("margin-top", logo_16(height_ratio));
      $("#p17").css("margin-top", logo_17(height_ratio));
      

    } else if  (minus_b<height_ratio && height_ratio<plus_b){
      logoOpacontrol(true)
      $("#background").css("background", 'white');
      $("#p2").css("margin-top", 0);
      $("#p2").css("margin-top", 0);
      $("#p7").css("margin-top", 0);
      $("#p10").css("margin-top", 0);
      $("#p18").css("margin-top", 0);
      $("#p13").css("margin-top", 0);
      $("#p4").css("margin-top", 0);
      $("#p14").css("margin-top", 0);
      $("#p15").css("margin-top", 0);
      $("#p16").css("margin-top", 0);
      $("#p17").css("margin-top", 0);
      console.log(3)

      $("#p1").css("margin-left", logo_1(width_ratio));
      $("#p3").css("margin-left", logo_3(width_ratio));
      
      $("#p5").css("margin-left", logo_5(width_ratio));
      $("#p8").css("margin-left", logo_8(width_ratio));
      $("#p9").css("margin-left", logo_9(width_ratio));
      $("#p11").css("margin-left", logo_11(width_ratio));
      $("#p12").css("margin-left", logo_11(width_ratio));

    }else {
      logoOpacontrol(true)
      $("#background").css("background", 'white');

      $("#p1").css("margin-left", logo_1(width_ratio));
      $("#p3").css("margin-left", logo_3(width_ratio));
    
      $("#p5").css("margin-left", logo_5(width_ratio));
      $("#p8").css("margin-left", logo_8(width_ratio));
      $("#p9").css("margin-left", logo_9(width_ratio));
      $("#p11").css("margin-left", logo_11(width_ratio));
      $("#p12").css("margin-left", logo_11(width_ratio));
      

      $("#p4").css("margin-top", logo_4(height_ratio));
      $("#p2").css("margin-top", logo_2(height_ratio));
      $("#p6").css("margin-top", logo_6(height_ratio));
      $("#p7").css("margin-top", logo_7(height_ratio));
      $("#p10").css("margin-top", logo_10(height_ratio));
      $("#p18").css("margin-top", logo_10(height_ratio));
      $("#p13").css("margin-top", logo_13(height_ratio));
      $("#p14").css("margin-top", logo_14(height_ratio));
      $("#p15").css("margin-top", logo_14(height_ratio));
      $("#p16").css("margin-top", logo_16(height_ratio));
      $("#p17").css("margin-top", logo_17(height_ratio));
      
     
    } 
  }
    
  
  // const [logo_1_style, update_logo_1_style] = useState(0)
  // update_logo_1_style()
    

  return (
    <div className="App">
      
      <div id = 'background' ref={bgref} onMouseMove={() => {
        if (isWorkshopOpen==false && isArchiveOpen==false)
          logo_change()
        }}>
        {/* {bmouse.x}
        {bmouse.y} */}
        <img class = 'logopiece' id = 'p1' src={p1} ref={logoref} />
        <img class = 'logopiece' id = 'p2' src={p2} />
        <img class = 'logopiece' id = 'p3' src={p3} />
        <img class = 'logopiece' id = 'p4' src={p4} />
        <img class = 'logopiece' id = 'p5' src={p5} />
        <img class = 'logopiece' id = 'p6' src={p6} />
        <img class = 'logopiece' id = 'p7' src={p7} />
        <img class = 'logopiece' id = 'p8' src={p8} />
        <img class = 'logopiece' id = 'p9' src={p9} />
        <img class = 'logopiece' id = 'p10' src={p10} />
        <img class = 'logopiece' id = 'p11' src={p11} />
        <img class = 'logopiece' id = 'p12' src={p12} />
        <img class = 'logopiece' id = 'p13' src={p13} />
        <img class = 'logopiece' id = 'p14' src={p14} />
        <img class = 'logopiece' id = 'p15' src={p15} />
        <img class = 'logopiece' id = 'p16' src={p16} />
        <img class = 'logopiece' id = 'p17' src={p17} />
        <img class = 'logopiece' id = 'p18' src={p18} />
        <img class = 'logopiece' id = 'logo' src={logo}/>
      </div>

      <div id = 'desc'>
        한글꼴연구회는 디자이너의 시각에서 
        한글의 독창성과 실용성에 대한 실험과 연구를 해오고 있다.
        회원들의 한글꼴 개발과 더불어 여러가지 전시를 열고 있으며, 
        매주 이뤄지는 학습과 발표를 통해 한글 타이포그라피에 
        대한 실험적 연구와 발전을 모색하고 있다.
        앞으로도 한글꼴 연구와 글꼴을 이용한 
        타이포그라피 작업을 지속적으로 해 나갈 것이다.
      </div>

      <animated.button class = 'header' id ='hanguelggol'  onClick={()=> {
          if (isArchiveOpen==true){
            setArchiveOpen(false)
            setArchiveHover(false)
          }

          if (isWorkshopOpen==true){
            setWorkshopOpen(false)
            setWorkshopHover(false)
          }
       
			}} >
        Hanguelggol
      </animated.button>

      <animated.button style={WorkshopHover_A} class = 'header'id ='workshop' onClick={()=> {
          if (isArchiveOpen==true){
            setArchiveOpen(false)
            setArchiveHover(false)
          }
        setWorkshopOpen(!isWorkshopOpen);  
        if (isWorkshopOpen==false){
          deletelogo()
        }
			}} onMouseEnter={()=> {
        if(isWorkshopOpen==false){
          setWorkshopHover(!isWorkshopHover);  
        }
			}} onMouseLeave={()=> {
        if(isWorkshopOpen==false){
          setWorkshopHover(!isWorkshopHover);  
        }
			}}>
        Variable Font Workshop
      </animated.button>

      <animated.button style={ArchiveHover_A} class = 'header' id ='archive' onClick={()=> {
        if (isWorkshopOpen==true){
          setWorkshopOpen(false)
          setWorkshopHover(false)
        }
        setArchiveOpen(!isArchiveOpen);
        if (isArchiveOpen==false){
          deletelogo()
        }  
       
			}} onMouseEnter={()=> {
        if(isArchiveOpen==false){
          setArchiveHover(!isArchiveHover);  
        }
			}} onMouseLeave={()=> {
        if(isArchiveOpen==false){
          setArchiveHover(!isArchiveHover);  
        }
			}}>
        Archive
      </animated.button>


      <animated.div ref = {pageref} id ='right_archive_page' style={ArchiveOpenAnimation_Right}>
        {/* <input
            type = "range"
            id = 'slider'
            min = '0'
            max = '100'
            value = {varZ}
            onChange={setZ}  >
          </input> */}

        <div ref = {ref} id = 'showroom' onMouseMove={() => {
          getStyle()
          // console.log(mouse.x)
          updateStyles(changeStyles)
        }} onMouseEnter={() => {
          setMouseShowroom(true)
        }} onMouseLeave={() => {
          setMouseShowroom(false)
        }}>
          {/* x : {mouse.x}
          y : {mouse.y} */}
          
          <div id = 'wordroom' style={Customstyles}>
            A
          </div>

        
          <div id = 'vertical' style={VerticalLine}>
            
          </div>
          <div id = 'horizental'  style={HorizentalLine}>
          </div>
        </div>
      </animated.div> 

      <animated.div id ='left_archive_page' style={ArchiveOpenAnimation_Left}>
        <div id = 'fontdesc'>
        곽서영<br></br><br></br>어슷썰은 끝획의 비스듬한 모양이 어슷썬 채소의 모양과 비슷한 듯 하여 붙여준 이름이다. 스텐실처럼 열린 속공간의 글자가 볼드해질 때 연결부가 어떻게 결합되는지를 배리어블을 통해 나타내고자 했다. 
        </div>

        <div id = 'btline'>
          
        </div>

        <div id = 'fontlist'>
            <button id = 'bt_1' class = 'font_button' onClick={font_1}>
              결
            </button>
            <button id = 'bt_2' class = 'font_button' onClick={font_2}>
              그림자
            </button>
            <button id = 'bt_3' class = 'font_button' onClick={font_3}>
              꽃
            </button>
            <button id = 'bt_4' class = 'font_button' onClick={font_4}>
              당산
            </button>
            <button id = 'bt_5' class = 'font_button' onClick={font_5}>
              백여덟
            </button>
            <button id = 'bt_6' class = 'font_button' onClick={font_6}>
              소멸
            </button>
            <button id = 'bt_7' class = 'font_button'  onClick={font_7}>
              숨
            </button>
            <button id = 'bt_8' class = 'font_button' onClick={font_8}>
              싹
            </button>
            <button id = 'bt_9' class = 'font_button' onClick={font_9}>
              쌓다
            </button>
            <button id = 'bt_10' class = 'font_button'onClick={font_10}>
              악상기호
            </button>
            <button id = 'bt_11' class = 'font_button' onClick={font_11}>
              어슷설
            </button>
            <button id = 'bt_12' class = 'font_button' onClick={font_12}>
              우주
            </button>
            <button id = 'bt_13' class = 'font_button'  onClick={font_13}>
              웃웃
            </button>
            <button id = 'bt_14' class = 'font_button' onClick={font_14}>
              잊혀진
            </button>
            <button id = 'bt_15' class = 'font_button' onClick={font_15}>
              춤
            </button>
            <button id = 'bt_16' class = 'font_button' onClick={font_16}>
              폭탄
            </button>
            <button id = 'bt_17' class = 'font_button' onClick={font_17}>
              풀
            </button>
        </div>
      </animated.div>
    
      <animated.div id = "workshop_page_clip" style={WorkshopOpenAnimation}>
          <div id = 'imgcon'>
            <img id = 'poster' class='wkimg' src={img_poster} />
            {/* <Iframe url="https://www.youtube.com/embed/ADHXpMCnyhg"
              width="100%"
              height="400px"
              id="video"
              className="myClassname"
              display="initial"
              style={{height : yheight}}/> */}

          <iframe id = 'video'
            style={{
                  width: "100%",
                  height: "100%"
                  }}
              src={"https://www.youtube.com/embed/ADHXpMCnyhg"}
              frameBorder="0"
              
              
           />

            
            <img id = 'wk_1' class='wkimg' ref = {yref} src={wk_1} />
            <img id = 'wk_2' class='wkimg' src={wk_2} />
            <img id = 'wk_3' class='wkimg' src={wk_3} />
            <img id = 'wk_4' class='wkimg' src={wk_4} />
            <img id = 'wk_5' class='wkimg' src={wk_5} />
        
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            
          </div>
          <div id='imgdesc'>
            한글꼴연구회 겨울활동<br></br>
            베리어블 워크숍 <br></br>
            <br></br>
            기획 및 진행 / 정영훈 문한샘<br></br>
            지도 및 자문 / 안병학<br></br>
            <br></br>
            베리어플 폰트에 대한 강의를 듣고 각자 베리어플 폰트를 만드는 프로젝트를 진행하였다. <br></br>
          

          </div>
          
       
      </animated.div> 
      <img id = 'screenlogo' src={logo}/>
      {/* <img id = 'downmouse' src={downmouse}></img> */}
    


    </div>

  
  );
}

export default App;
