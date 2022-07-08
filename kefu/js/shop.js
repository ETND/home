new Swiper(".loop", {
  observer: true,
  observeParents: true,
  // 垂直切换选项
  direction: "horizontal",
  // 循环模式选项
  loop: true,
  pauseOnMouseEnter: true,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
  },
});
new Swiper(".wenz", {
  observer: true,
  observeParents: true,
  // 垂直切换选项
  direction: "horizontal",
  // 循环模式选项
  loop: true,
  pauseOnMouseEnter: true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
new Swiper(".loops", {
  observer: true,
  observeParents: true,
  // 垂直切换选项
  direction: "horizontal",
  // 循环模式选项
  loop: true,
  pauseOnMouseEnter: true,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
  },
});
new Swiper(".wenzs", {
  observer: true,
  observeParents: true,
  // 垂直切换选项
  direction: "horizontal",
  // 循环模式选项
  loop: true,
  pauseOnMouseEnter: true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
var gm = document.getElementById("gm");
var gmxs = document.getElementById("gmxs");
var cs = document.getElementById("cs");
var csxs = document.getElementById("csxs");
gm.onclick = function () {
  gm.style.color = "#2887FB";
  gm.style.background = "#fff";
  cs.style.color = "#fff";
  cs.style.background = "";
  gmxs.style.display = "block";
  csxs.style.display = "none";
  new Swiper(".loop", {
    observer: true,
    observeParents: true,
  });
  new Swiper(".wenz", {
    observer: true,
    observeParents: true,
  });
};
cs.onclick = function () {
  cs.style.color = "#2887FB";
  cs.style.background = "#fff";
  gm.style.color = "#fff";
  gm.style.background = "#2887FB";
  csxs.style.display = "block";
  gmxs.style.display = "none";
  new Swiper(".loops", {
    observer: true,
    observeParents: true,
  });
  new Swiper(".wenzs", {
    observer: true,
    observeParents: true,
  });
};

var btc = document.getElementById("btc");
var eth = document.getElementById("eth");
var ltc = document.getElementById("ltc");
var doge = document.getElementById("doge");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");

btc.onclick = function () {
  btc.style.color = "#2887FB";
  btc.style.borderBottomColor = "#2887FB";
  eth.style.color = "#000";
  eth.style.borderBottomColor = "#fff";
  ltc.style.color = "#000";
  ltc.style.borderBottomColor = "#fff";
  doge.style.color = "#000";
  doge.style.borderBottomColor = "#fff";
  div1.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
};
eth.onclick = function () {
  btc.style.color = "#000";
  btc.style.borderBottomColor = "#fff";
  eth.style.color = "#2887FB";
  eth.style.borderBottomColor = "#2887FB";
  ltc.style.color = "#000";
  ltc.style.borderBottomColor = "#fff";
  doge.style.color = "#000";
  doge.style.borderBottomColor = "#fff";
  div2.style.display = "block";
  div1.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
};
ltc.onclick = function () {
  btc.style.color = "#000";
  btc.style.borderBottomColor = "#fff";
  eth.style.color = "#000";
  eth.style.borderBottomColor = "#fff";
  ltc.style.color = "#2887FB";
  ltc.style.borderBottomColor = "#2887FB";
  doge.style.color = "#000";
  doge.style.borderBottomColor = "#fff";
  div3.style.display = "block";
  div2.style.display = "none";
  div1.style.display = "none";
  div4.style.display = "none";
};
doge.onclick = function () {
  btc.style.color = "#000";
  btc.style.borderBottomColor = "#fff";
  eth.style.color = "#000";
  eth.style.borderBottomColor = "#fff";
  ltc.style.color = "#000";
  ltc.style.borderBottomColor = "#fff";
  doge.style.color = "#2887FB";
  doge.style.borderBottomColor = "#2887FB";
  div4.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
  div1.style.display = "none";
};

var btcs = document.getElementById("btcs");
var eths = document.getElementById("eths");
var ltcs = document.getElementById("ltcs");
var doges = document.getElementById("doges");
var div1s = document.getElementById("div1s");
var div2s = document.getElementById("div2s");
var div3s = document.getElementById("div3s");
var div4s = document.getElementById("div4s");

btcs.onclick = function () {
  btcs.style.color = "#2887FB";
  btcs.style.borderBottomColor = "#2887FB";
  eths.style.color = "#000";
  eths.style.borderBottomColor = "#fff";
  ltcs.style.color = "#000";
  ltcs.style.borderBottomColor = "#fff";
  doges.style.color = "#000";
  doges.style.borderBottomColor = "#fff";
  div1s.style.display = "block";
  div2s.style.display = "none";
  div3s.style.display = "none";
  div4s.style.display = "none";
};
eths.onclick = function () {
  btcs.style.color = "#000";
  btcs.style.borderBottomColor = "#fff";
  eths.style.color = "#2887FB";
  eths.style.borderBottomColor = "#2887FB";
  ltcs.style.color = "#000";
  ltcs.style.borderBottomColor = "#fff";
  doges.style.color = "#000";
  doges.style.borderBottomColor = "#fff";
  div2s.style.display = "block";
  div1s.style.display = "none";
  div3s.style.display = "none";
  div4s.style.display = "none";
};
ltcs.onclick = function () {
  btcs.style.color = "#000";
  btcs.style.borderBottomColor = "#fff";
  eths.style.color = "#000";
  eths.style.borderBottomColor = "#fff";
  ltcs.style.color = "#2887FB";
  ltcs.style.borderBottomColor = "#2887FB";
  doges.style.color = "#000";
  doges.style.borderBottomColor = "#fff";
  div3s.style.display = "block";
  div2s.style.display = "none";
  div1s.style.display = "none";
  div4s.style.display = "none";
};
doges.onclick = function () {
  btcs.style.color = "#000";
  btcs.style.borderBottomColor = "#fff";
  eths.style.color = "#000";
  eths.style.borderBottomColor = "#fff";
  ltcs.style.color = "#000";
  ltcs.style.borderBottomColor = "#fff";
  doges.style.color = "#2887FB";
  doges.style.borderBottomColor = "#2887FB";
  div4s.style.display = "block";
  div2s.style.display = "none";
  div3s.style.display = "none";
  div1s.style.display = "none";
};
