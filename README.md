# EmojiURLifier - Proressive Enhancement for Emoji Domains
## Automatically switch between Emoji and "Regular" Domains

Example: <a href="http://😎🌐.ws">😎🌐.ws<a/>

... falls back to <a href="http://cooldomain.ws/">cooldomain.ws</a> on browsers which don't support Emoji Domains. Or, alternatively, enhances the URL to <a href="http://😎🌐.ws">😎🌐.ws</a> on browsers which do.

## Install
Simple... takes 30 seconds. Just add this to your source code:
```
<script src="https://i❤️.ws/js/emojiurlifier.js"></script>
<script>
  emojiurlifier('http://yourPunycodedEmojiDomain.ws', 'http://yourRegularDomain.com');
</script>
```

... or just copy the <a href="https://github.com/jonroig/emojiurlifier/blob/master/emojiurlifier.js">EmojiURLifier.js source</a> and use it directly on your site or CDN.

## Troubleshooting
* View the source of <a href="http://😎🌐.ws">😎🌐.ws</a> as a reference.
* Both your Emoji Domain and your "regular" domain need to point to the same place. 
* If you've been forwarding your Emoji Domain with a 301 redirect, you might need to restart Chrome


## WTF?
A free service from <a href="http://domainresearchgroup.net">Domain Research Group</a>

Get your own Emoji Domain at: <a href="https://i❤️.ws">i❤️.ws Emoji Domain Registration</a>
