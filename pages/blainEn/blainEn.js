const app = getApp();
var scanTime = false;
var qusNum = 1;
Page({
  data: {
    imgPath: app.data.imgPath,
    actionFlag: true,
    hiddenFlag: false,
    aginFlag: true,
    rotate: 0,
    outQusHas: 1,
    // -------
    rot1: false,
    rot2: false,
    rot3: false,
    rot4: false,
    rot5: false,
    cir1: false,
    cir2: false,
    cir3: false,
    cir4: false,
    cir5: false,
    cir6: false,
    cir7: false,
    cir8: false
  },
  onLoad: function (options) {
    this.setData({
      // hiddenFlag: true,
      outQusHas: Math.floor(Math.random() * 4 + 1),
      actionFlag: true,
    })
    this.scan(0)
  },

  scan: function (rotate) {
    const self = this
    console.log(this)
    let rot1, rot2, rot3, rot4, rot5;
    if (qusNum == 1) {
      rot1 = 40;
      rot2 = 100;
      rot3 = 190;
      rot4 = 280;
      rot5 = 330;
    } else if (qusNum == 2) {
      rot1 = 30;
      rot2 = 90;
      rot3 = 130;
      rot4 = 230;
      rot5 = 320;
    } else if (qusNum == 3) {
      rot1 = 20;
      rot2 = 110;
      rot3 = 200;
      rot4 = 280;
      rot5 = 310;
    } else if (qusNum == 4) {
      rot1 = 30;
      rot2 = 90;
      rot3 = 130;
      rot4 = 250;
      rot5 = 310;
    } else if (qusNum == 5) {
      rot1 = 55;
      rot2 = 100;
      rot3 = 190;
      rot4 = 280;
      rot5 = 330;
    }
    // 小点的角度
    const cir1 = 30;
    const cir2 = 96;
    const cir3 = 140;
    const cir4 = 140;
    const cir5 = 190;
    const cir6 = 210;
    const cir7 = 280;
    const cir8 = 310;
    var context = wx.createCanvasContext('firstCanvas');
    var t = setInterval(function () {
      if (Math.abs(rot1 - rotate % 360) < 3) {
        self.setData({
          rot1: true
        })
      } else if (Math.abs(rot2 - rotate % 360) < 3) {
        self.setData({
          rot2: true
        })
      } else if (Math.abs(rot3 - rotate % 360) < 3) {
        self.setData({
          rot3: true
        })
      } else if (Math.abs(rot4 - rotate % 360) < 3) {
        self.setData({
          rot4: true
        })
      } else if (Math.abs(rot5 - rotate % 360) < 3) {
        self.setData({
          rot5: true
        })
      }
      if (Math.abs(cir1 - rotate % 360) < 3) {
        self.setData({
          cir1: true
        })

      } else if (Math.abs(cir2 - rotate % 360) < 3) {
        self.setData({
          cir2: true
        })
      } else if (Math.abs(cir3 - rotate % 360) < 3) {
        self.setData({
          cir3: true
        })
      } else if (Math.abs(cir4 - rotate % 360) < 3) {
        self.setData({
          cir4: true
        })
      } else if (Math.abs(cir5 - rotate % 360) < 3) {
        self.setData({
          cir5: true
        })
      } else if (Math.abs(cir6 - rotate % 360) < 3) {
        self.setData({
          cir6: true
        })
      } else if (Math.abs(cir7 - rotate % 360) < 3) {
        self.setData({
          cir7: true
        })
      } else if (Math.abs(cir8 - rotate % 360) < 3) {
        self.setData({
          cir8: true
        })
      }
      context.save();
      context.beginPath();
      context.translate(146, 146);
      rotate += 2;//旋转角度自增1  
      context.rotate(rotate * Math.PI / 180)//设置旋转的角度  
      context.drawImage("../../images/icon/ro.png", -146, -146, 291, 291);
      context.closePath();
      context.fill();
      context.restore();
      context.draw();
      if (scanTime) {
        clearInterval(t);
        self.apeedScan(rotate)
      }
    }, 15)
    // ------------------------------------------------------------------------------------------------
  },
  apeedScan: function (rotate) {
    const self = this;
    const outQusHas = this.data.outQusHas;

    var context = wx.createCanvasContext('firstCanvas')
    var s = setInterval(function () {
      if (scanTime) {

        context.save();
        context.beginPath();
        context.translate(146, 146);
        rotate += 3;//旋转角度自增1  
        context.rotate(rotate * Math.PI / 180)//设置旋转的角度  
        context.drawImage("../../images/icon/ro.png", -146, -146, 291, 291)
        context.closePath();
        context.fill();
        context.restore();
        context.draw();
      } else {
        clearInterval(s);
        self.scan(rotate)
      }
    }, 5)

  },
  makeNum: function (outQus) {
    let num = Math.floor(Math.random() * 4) + 1;
    if (outQus == num) {
      this.makeNum(outQus)
    } else {
      return num;
    }
  },
  // 点击加速
  speedHanld: function () {
    scanTime = true;

    qusNum++
    if (qusNum == 5) {
      qusNum = 1;
    }

    const hiddenFlag = this.data.hiddenFlag;
    const self = this;
    this.setData({
      actionFlag: false,
      outQusHas: 0,
      rot1: false,
      rot2: false,
      rot3: false,
      rot4: false,
      rot5: false,
      cir1: false,
      cir2: false,
      cir3: false,
      cir4: false,
      cir5: false,
      cir6: false,
      cir7: false,
      cir8: false
    })
    this.setData({
      actionFlag: true,
      hiddenFlag: true
    })

    setTimeout(function () {
      scanTime = false;
      self.setData({
        outQusHas: qusNum
      })
    }, 900)
    setTimeout(function () {
      self.setData({
        hiddenFlag: false,
      })
    }, 3000)
  }
})
