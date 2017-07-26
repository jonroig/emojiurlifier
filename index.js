var emojiurlifier = function (emojiDomain, standardDomain) {
  console.log('Emoji Domain Progressive Enhancement by https://i❤️.ws');
  console.log('Learn more at https://github.com/jonroig/emojiurlifier');

  var wl = window.location;
  var useEmojiDomain = /^((?!chrome).)*safari/i.test(navigator.userAgent);
  if (navigator.userAgent.indexOf('CriOS') > -1) {
    useEmojiDomain = false;
  }
  var currentUrl = wl.protocol + '//' + wl.hostname;

  var outputUrl = useEmojiDomain ? emojiDomain : standardDomain;
  if (currentUrl === outputUrl) {
    return;
  }
  if (wl.port) {
    outputUrl += ':'+wl.port;
  }
  outputUrl += wl.pathname;
  outputUrl += wl.search;
  window.location = outputUrl;
}
