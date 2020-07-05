let startTime = performance.now();
var UID;
var NextLink;
if (window.requestIdleCallback) {
  requestIdleCallback(function () {
    Fingerprint2.get(function (components) {
      var values = components.map(function (component) {
        return component.value;
      });
      var murmur = Fingerprint2.x64hash128(values.join(""), 31);
      console.log(murmur);
      UID = murmur;
      $("#uid").text(UID);
      
    });
  });
} else {
  setTimeout(function () {
    Fingerprint2.get(function (components) {
      console.log(components); // an array of components: {key: ..., value: ...}
    });
  }, 500);
}
window.addEventListener("unload", function logData() {
  var myHeaders = new Headers();
  myHeaders.set('prevlink', document.URL);

  let data = {
    ID: UID,
    ssaerd: "XGU3t6tFV",
    orgdfs: "FmeMscsfk",
    startTime: startTime,
    DomLoad: window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart,
    endTime: performance.now(),
    currentPage: document.URL,
    browser: navigator.appCodeName,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    ref: document.referrer,
    nextLink: NextLink
  };
  navigator.sendBeacon("http://173.249.24.19:5000/", JSON.stringify(data));
});

