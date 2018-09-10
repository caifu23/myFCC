<h1>Use the Twitchtv JSON API</h1>
<pre>
1、练习来源：<a href="https://freecodecamp.cn/challenges/use-the-twitchtv-json-api">Use the Twitchtv JSON API</a>

2、功能：
   1. 我可以看到 FreeCodeCamp 现在是否在Twitch.tv上直播
   2. 我可以点击链接跳到 FreeCodeCamp 在Twitch.tv上的频道
   3. 如果有人在直播，我可以看到他正在直播什么
   4. 如果直播者关闭了他的账户，我会看到一个404提示页面。

3、提示：
   - 这有一个如何调用 Twitch.tv的JSONP API的示例：https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Front-End-Project-Use-the-Twitchtv-JSON-API.
   - 这个文档有更多关于如何调用这个API的细节：https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md#get-streamschannel
   - 这有一个Twitch.tv 用户名数组，里面包含有通常正在直播写代码的人： ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"]

4、api替换为这个
    https://wind-bow.glitch.me/twitch-api/

    https://wind-bow.glitch.me/twitch-api/streams/{channel}&&callback=?

    https://wind-bow.glitch.me/twitch-api/channels/{channel}&&callback=?

    https://wind-bow.glitch.me/twitch-api/streams/


5、最终预览效果：<a href="https://caifu23.github.io/myFCC/fcc04/">Twitchtv JSON API</a>
</pre>
   
   