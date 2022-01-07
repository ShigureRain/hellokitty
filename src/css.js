const string = `
/*先来个好看的背景色！*/
.kitty {
  background: #ffc0cb;
  min-height: 100vh;
  position: relative;
}
/*圆圆的脑袋！*/
.head {
  position: absolute;
  border: 8px solid #000;
  background-color: #fff;
  top: 250px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 183px;
  border-radius: 160px;
}
.eye {
  position: absolute;
  left: 47%;
  top: 88px;
  width: 19px;
  height: 24px;
  background-color: #000;
  border-radius: 18px;
}

.eye.left {
  transform: translateX(-58px);
}
.eye.right {
  transform: translateX(58px);
}
.nose {
  position: absolute;
  top: 115px;
  left: 100px;
  width: 28px;
  height: 21px;
  background-color: #ffff99;
  border: 6px solid #000;
  border-radius: 25px;
}
/*猫猫当然要有胡子！*/
.leftwhiskers,
.rightwhiskers {
  background-color: #000;
}
/*两只可爱的耳朵！*/
.leftEar {
  position: absolute;
  top: -16px;
  left: -3px;
  width: 57px;
  height: 61px;
  border: 8px solid #000;
  border-radius: 20px 37px 20px 44px;
  transform: rotate(14deg);
  background-color: #fff;
}
.leftEar span {
  position: absolute;
  top: 4px;
  left: 14px;
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50px 0 0 0;
}
.rightEar {
  position: absolute;
  top: -16px;
  left: 160px;
  width: 57px;
  height: 61px;
  background-color: #fff;
  border: 8px solid #000;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-radius: 20px 37px 20px 44px;
  transform: rotate(82deg);
}
/*粉粉的蝴蝶结！*/
.bow .center {
  position: absolute;
  left: 148px;
  width: 48px;
  height: 51px;
  background-color: #f9c7ef;
  border: 6px solid #000;
  border-radius: 30px;
  z-index: 2;
  transform: rotate(20deg);
}
.bow .left {
  position: absolute;
  top: -28px;
  left: 105px;
  width: 62px;
  height: 78px;
  background-color: #f9c7ef;
  border: 8px solid #000;
  border-radius: 50px 50px 55px 46px;
  transform: rotate(19deg);
}
.bow .left span {
  position: absolute;
  top: 20px;
  left: 22px;
  width: 27px;
  height: 27px;
  border: 6px solid #000;
  border-radius: 30px;
}
.bow .right {
  position: absolute;
  top: -1px;
  left: 180px;
  width: 59px;
  height: 70px;
  background-color: #f9c7ef;
  border: 8px solid #000;
  -moz-border-radius: 78px 48px 60px 63px;
  -webkit-border-radius: 78px 48px 60px 63px;
  border-radius: 78px 48px 60px 63px;
  transform: rotate(22deg);
}
.bow .right span {
  position: absolute;
  top: 17px;
  left: -3px;
  width: 27px;
  height: 27px;
  border: 6px solid #000;
  border-radius: 30px;
}
/*蝴蝶结动起来！*/
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(6deg);
  }
  75% {
    transform: rotate(3deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
.bow {
  height: 100px;
  transform-origin: 150px 50px;
  animation: wave 1s infinite linear;
}
/*Hello Kitty送给你！*/
`

export default string;  //把不相关的内容导出再导入