<h1>维基百科搜索页</h1>
1、练习来源： <a href="https://freecodecamp.cn/challenges/build-a-wikipedia-viewer">Build a Wikipedia Viewer</a>
2、功能：
        在一个搜索框搜索维基百科的条目，并看到输出结果
        点击一个按钮就看到一个随机的维基百科条目
3、提示：
        获得一个随机的维基百科条目：http://en.wikipedia.org/wiki/Special:Random
        这是你使用维基百科API的入口： http://www.mediawiki.org/wiki/API:Main_page
        使用这个 <a href="https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm">传送门</a> 来体验维基百科的API
        可参考查询：https://www.mediawiki.org/wiki/API:Query#Page_types

4、wiki api 端点（起始url） 模式：https://en.wikipedia.org/w/api.php
   1. action = query (允许您检索各种类型的数据)
   2. titles参数     （指定页面标题，如：titles=Foo|Bar|Main_Page，  其中“ | ” 是管道符号，结合查询）
   3. pageids参数    （指定页面id，如：pageids=123|456|75915）
   4. revids参数     （指定修订版本号， 如：revids=478198|54872）
   5. generator参数   （用list输出来代替查询中的titles参数，详见 <a href="https://www.mediawiki.org/wiki/API:Query/zh#%E7%94%9F%E6%88%90%E5%99%A8">生成器</a>）
   6. list = allimages (返回图片列表，详见<a href="https://www.mediawiki.org/wiki/API:Lists/All#Allimages">allimages</a>)
   7. list参数         (<a href="https://www.mediawiki.org/wiki/API:Lists/All">Lists/</a>)
   8. 页面类型  （<a href="https://www.mediawiki.org/wiki/API:Query#Page_types">Page_type</a>）
   9. https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exlimit=max&exintro&explaintext&exsentences=1&exsectionformat=wiki&gsrsearch=frontend

5、最终预览效果：<a href="https://caifu23.github.io/myFCC/fcc03/">维基百科查询</a>
   