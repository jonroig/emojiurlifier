var emojiurlifier = function (emojiDomain, standardDomain) {
  console.log('Emoji Domain Progressive Enhancement by https://i❤️.ws')
  var wl = window.location;
  var useEmojiDomain = /^((?!chrome).)*safari/i.test(navigator.userAgent);
  if (navigator.userAgent.indexOf('CriOS') > -1) {
    useEmojiDomain = false;
  }
  var currentUrl = wl.protocol + '//' + wl.hostname;

  var outputUrl = useEmojiDomain ? emojiDomain : standardDomain;
  console.log(currentUrl, outputUrl);
  if (currentUrl === outputUrl) {
    return;
  }
  if (wl.port) {
    outputUrl += ':'+wl.port;
  }
  outputUrl += wl.pathname;
  window.location = outputUrl;
}
