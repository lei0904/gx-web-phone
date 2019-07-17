function getContentRender(content) {
  var global = window;

  var docStyle = document.documentElement.style;

  var engine;
  if (global.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
    engine = 'presto';
  } else if ('MozAppearance' in docStyle) {
    engine = 'gecko';
  } else if ('WebkitAppearance' in docStyle) {
    engine = 'webkit';
  } else if (typeof navigator.cpuClass === 'string') {
    engine = 'trident';
  }

  var vendorPrefix = {
    trident: 'ms',
    gecko: 'Moz',
    webkit: 'Webkit',
    presto: 'O'
  }[engine];

  var helperElem = document.createElement("div");
  var undef;

  var perspectiveProperty = vendorPrefix + "Perspective";
  var transformProperty = vendorPrefix + "Transform";

  if (helperElem.style[perspectiveProperty] !== undef) {

    return function(left, top, zoom) {
      if (top <= 0) {
        top = lib.flexible.px2rem(top);
      } else {
        top = lib.flexible.px2rem(top-60);  
      }      
      //content.style[transformProperty] = 'translate3d(' + (-left) + 'px,' + (-top) + 'px,0) scale(' + zoom + ')';
      content.style[transformProperty] = 'translate3d(' + (-left) + 'px,' + (-top) + 'rem,0) scale(' + zoom + ')';
    };

  } else if (helperElem.style[transformProperty] !== undef) {

    return function(left, top, zoom) {
      if (top <= 0) {
        top = lib.flexible.px2rem(top);
      } else {
        top = lib.flexible.px2rem(top-60);  
      }      
      // content.style[transformProperty] = 'translate(' + (-left) + 'px,' + (-top) + 'px) scale(' + zoom + ')';
      content.style[transformProperty] = 'translate3d(' + (-left) + 'px,' + (-top) + 'rem,0) scale(' + zoom + ')';
    };

  } else {

    return function(left, top, zoom) {
      if (top <= 0) {
        top = top;
      } else {
        top = top-60;  
      }  
      content.style.marginLeft = left ? (-left/zoom) + 'px' : '';
      content.style.marginTop = top ? (-top/zoom) + 'px' : '';
      content.style.zoom = zoom || '';
    };

  }
}

module.exports = getContentRender;