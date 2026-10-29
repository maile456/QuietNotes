(function () {
  "use strict";

  var posts = [
    {
      id: "leave-some-space", title: "给页面留一点空白", category: "代码", date: "2026-10-24", featured: true,
      excerpt: "有时，最值得调整的不是再加一个元素，而是让已经存在的内容，好好呼吸。",
      sections: [
        { title: "先看见内容", paragraphs: ["做一个页面时，很容易从按钮颜色和边框样式开始。它们能立刻带来变化，也让工作看起来正在前进。但如果暂时关掉这些装饰，剩下的标题、段落和操作是否仍然清楚，往往更能说明问题。", "我喜欢先把页面当成一张没有装订的纸。读者先看哪里，接下来寻找什么，哪些内容值得停留，都应该由内容本身回答。留白不是尚未完成的区域，而是这些回答之间的停顿。"] },
        { title: "给关系留出距离", paragraphs: ["两个元素靠近时，人会自然地认为它们属于同一组。标题和摘要可以紧一些，一篇文章和下一篇文章则需要更大的间隔。与其给每一组内容画一个方框，不如先尝试调整距离，看层次是否已经足够明确。", "这样的做法也能减少视觉噪声。边框与阴影都有用，但它们应该处理真实的边界，而不是替代对信息关系的判断。页面安静下来之后，一个小小的强调色就能够承担更多意义。"] },
        { title: "在真实的长度里检验", paragraphs: ["排版不能只拿一句漂亮的短标题测试。把标题换成两行，把摘要换成一段中文，再放进一个很长的英文单词。看它们是否还能自然地排列，比盯着空白处调整几个像素更有价值。", "最后再把屏幕缩窄。好的留白会随空间重新分配，而不是让内容挤成一条细线。只留下必要的东西，不意味着页面失去了特色；有时，特色恰恰是它没有急着说完所有的话。"] }
      ], quote: "空白不是内容的对面，而是内容被看见的条件。"
    },
    {
      id: "ordinary-walk", title: "散步时，把手机留在口袋里", category: "日常", date: "2026-10-20",
      excerpt: "没有路线，也没有需要完成的步数。只是出门走一走，重新注意那些总被略过的细节。",
      image: "../images/field.jpg", imageAlt: "开阔田野中的绿色植物与远处树木",
      sections: [
        { title: "不急着抵达", paragraphs: ["这是一篇关于普通散步的想象笔记。出门前不查一条最优路线，也不给自己安排一组必须完成的地点。只选一个方向，走到路口，再决定要不要转弯。时间不再是一串需要压缩的间隔，而有了可被感受的长度。", "最先注意到的通常不是风景，而是声音。鞋底和地面的摩擦，树叶轻轻碰在一起，还有远处尚且听不清内容的谈话。它们一直存在，只是在耳机和消息之间，很少获得完整的一分钟。"] },
        { title: "熟悉也值得再看一眼", paragraphs: ["同一条路不会每天完全相同。窗边换了一盆植物，墙面上的影子挪过一点，路边的草从石缝里多探出了一小截。那些没有资格成为目的地的地方，也藏着足够具体的变化。", "不拍照并不等于不珍惜。有时，把一个画面停留在眼前，而不是立刻变成需要挑选和发送的照片，反而能记住更多。记住当时的光，也记住自己正在那里。"] },
        { title: "带一件小事回家", paragraphs: ["回程不必总结收获。没有新观点，没有完成计划，也没有灵感突然降临，都很正常。让一段时间只是时间，本身已经与平日里不断评估效率的习惯有所不同。", "真想留下一点什么，就写一句话：今天有一阵风，从树的另一边吹过来。它可能并不重要，却足够具体。日常并不缺少内容，缺少的往往是给它一个不被打断的位置。"] }
      ], quote: "有些路不用通向哪里，走过本身就很好。"
    },
    {
      id: "half-a-book", title: "一本书读到一半，也很好", category: "阅读", date: "2026-10-16",
      excerpt: "不再把每一本书都当成一项待办，阅读或许就能重新成为一件轻松的事。",
      sections: [
        { title: "从进度条旁边走开", paragraphs: ["读书很容易变成另一种计数：一年读多少本，每天读多少页，还差多久完成。计数并没有错，它能帮助人形成习惯。但当注意力只剩下百分比，一段值得慢读的文字，也可能被当成阻碍进度的小石子。", "这篇笔记想暂时把进度放在一边。读到一半停下来，并不自动意味着失败。也许此刻需要的答案已经出现，也许这本书与当下的自己尚未相遇。把书签留在那里，是一种等待，不一定是一种放弃。"] },
        { title: "让一句话多停留一会儿", paragraphs: ["一页里真正让人停下来的，常常只有一句话。它可能替模糊的感受找到了名字，也可能与自己的判断发生冲突。与其立刻寻找下一句，不如先想想：我为什么在这里停住了？", "笔记不必完整复述章节。写下一个问题，或者用自己的话说出尚未理解的部分，已经足够。那些不够整齐的记录，往往比一页漂亮摘抄更接近真实的阅读过程。"] },
        { title: "允许以后再来", paragraphs: ["书不是一次性通过的关卡。同样一页，在不同的时候读，可能会显出不同的意思。不是文字发生了变化，而是生活给某个原先抽象的词添上了具体的重量。", "于是，书架上可以同时有读完的、读到一半的和暂时没有打开的书。它们不需要排成一张整齐的成绩单。只要阅读仍然让人愿意回来，这段关系就在继续。"] }
      ], quote: "不急着读完，也是一种认真地读。"
    },
    {
      id: "clear-code", title: "让代码像一段清楚的话", category: "代码", date: "2026-10-11",
      excerpt: "好的命名不是给实现贴标签，而是让下一个读到这里的人，少猜一次。",
      sections: [
        { title: "把意图放在前面", paragraphs: ["代码写出来给机器执行，也留下来给人阅读。机器并不在意一个变量叫作 data 还是 selectedArticleIds，但对稍后回来修改的人来说，这两种命名需要付出的理解成本并不一样。", "不需要把每个名字都写得很长。重要的是，它是否表达了当前层次上最关键的意图。列表存的是什么，布尔值回答哪个问题，函数完成哪一个动作，都值得在命名时先说清楚。"] },
        { title: "一段只说一件事", paragraphs: ["当一个函数同时读取数据、改变状态、拼接界面，又顺手写入存储，理解它就像阅读没有分段的长信。每一行都能看懂，整体的边界却逐渐变得模糊。", "拆分也需要节制。为了缩短行数把每三行包装成函数，可能只会让读者不断跳转。一个有价值的边界，应当能用一句稳定的话说明它的责任，并让调用处因此更容易理解。"] },
        { title: "给未来留一条线索", paragraphs: ["注释最有用的地方，往往不是复述发生了什么，而是说明为什么没有采用看起来更直接的做法。外部接口的限制、顺序的依赖、一个不明显的边界条件，都可能在几个月后成为重要线索。", "最后，用一组真实输入检查表达与行为是否一致。名字说的是筛选，行为就不应偷偷改动原始列表。清楚不是一种装饰性的代码风格，而是意图、边界和实际结果之间可以相互印证的关系。"] }
      ], quote: "让读者少猜一次，就是一次小小的改进。"
    },
    {
      id: "small-reading-note", title: "读完之后，留下一个问题", category: "阅读", date: "2026-10-06",
      excerpt: "比起一份面面俱到的摘要，我更愿意留下一句还想继续追问的话。",
      sections: [
        { title: "不必收下所有信息", paragraphs: ["一篇文章读完之后，很容易产生把所有重点都保存下来的冲动。划线、截图、分类、归档，每一步都显得合理。可过一段时间再打开，常常只见到一份整齐的材料，看不见当初的自己为什么觉得它重要。", "这篇演示笔记尝试换一个起点：先不问作者说了什么，而问什么地方改变了我的想法。只抓住这一处，记录就有了一个与自己有关的中心。其他信息可以留在原文里，不必全部搬进笔记。"] },
        { title: "把疑问写具体", paragraphs: ["“很有启发”是一个感受，却很难成为下一次思考的入口。试着把它改成更具体的问题：这个判断在什么条件下成立？如果换一组例子，还能得到同样的结果吗？哪一步是我尚未接受的？", "问题可以暂时没有答案。它的作用不是证明读得足够认真，而是替下一次阅读留下方向。当另一篇文章碰巧回答了其中一部分，两段原先分开的内容就有了真正的联系。"] },
        { title: "留出重新理解的余地", paragraphs: ["整理笔记时，可以保留日期和原始问题，不急着把所有内容统一成今天的结论。过去的误解也是线索，它能让人看见想法如何慢慢变得具体。", "一份好笔记并不总是越来越完整。有时，它只是把一个笼统的问题改得更准确。留下这样一个小小的变化，已经足够让阅读从信息经过，变成思考发生。"] }
      ], quote: "带走一个问题，比勉强带走所有答案更轻。"
    },
    {
      id: "after-rain", title: "雨后的窗边", category: "日常", date: "2026-10-01",
      excerpt: "天色慢慢亮起来，杯子还温着。这样的片刻，不需要比喻也已经足够。",
      sections: [
        { title: "声音先安静下来", paragraphs: ["以下是一段虚构的日常片刻。雨停之后，最明显的变化不是天空，而是窗外忽然少了一层连续的声音。滴水还在，只是从一整片背景，变成了可以一声一声数清的小事。", "桌上摊着一本没有读完的书，杯子里的水还有一点温度。没有什么特别需要发生。把窗推开一条缝，空气里潮湿的气味就先于风走了进来。"] },
        { title: "让事情保持原来的样子", paragraphs: ["平常记录生活，总想替一个场景找到意义：雨象征什么，窗代表什么，短暂的安静又能说明什么。可有些时刻并不着急成为道理。它只是雨后的窗边，光从灰色一点点转亮。", "不解释并不会让这个片刻更空。相反，当注意力不再忙着寻找比喻，就能看见杯沿的水珠，听见远处一扇门合上，发现窗台上的叶子比刚才更清楚了一些。"] },
        { title: "然后，继续普通的一天", paragraphs: ["过一会儿，街道恢复了平日的声音。有人经过，车轮压过积水，屋里的时钟仍然按原来的速度走。那一小段安静没有改变什么，却也不需要因此被否定。", "合上书，洗干净杯子，再去做下一件普通的事。日子并不总要有值得讲述的转折。能在一个短暂的片刻里，完整地知道自己正在这里，已经是一份朴素的满足。"] }
      ], quote: "有些片刻，不需要比喻也已经足够。"
    }
  ];

  var state = { category: "全部", query: "", savedOnly: false, bookmarks: new Set(), activeId: null, opener: null };
  var storageKeys = { bookmarks: "quietnotes:bookmarks", theme: "quietnotes:theme" };
  var root = document.documentElement;
  var list = document.getElementById("post-list");
  var dialog = document.getElementById("reader-dialog");
  var searchInput = document.getElementById("search-input");
  var themeButton = document.getElementById("theme-toggle");

  function readStorage(key) { try { return window.localStorage.getItem(key); } catch (error) { return null; } }
  function writeStorage(key, value) { try { window.localStorage.setItem(key, value); return true; } catch (error) { return false; } }
  function node(tag, className, text) { var item = document.createElement(tag); if (className) item.className = className; if (text !== undefined) item.textContent = text; return item; }
  function icon(name) { var item = node("i"); item.setAttribute("data-lucide", name); item.setAttribute("aria-hidden", "true"); return item; }
  function refreshIcons() { if (window.lucide && typeof window.lucide.createIcons === "function") window.lucide.createIcons(); }
  function announce(message) { document.getElementById("status-message").textContent = message; }
  function readingMinutes(post) { return Math.max(2, Math.ceil(post.sections.map(function (section) { return section.paragraphs.join(""); }).join("").length / 300)); }
  function getPost(id) { return posts.find(function (post) { return post.id === id; }); }

  try {
    var saved = JSON.parse(readStorage(storageKeys.bookmarks) || "[]");
    if (Array.isArray(saved)) state.bookmarks = new Set(saved.filter(function (id) { return typeof id === "string" && getPost(id); }));
  } catch (error) { state.bookmarks = new Set(); }

  function setTheme(theme, persist) {
    root.dataset.theme = theme;
    var isDark = theme === "dark";
    var label = isDark ? "切换到亮色主题" : "切换到暗色主题";
    themeButton.setAttribute("aria-label", label);
    themeButton.setAttribute("title", label);
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.replaceChildren(icon(isDark ? "sun" : "moon"));
    if (persist) writeStorage(storageKeys.theme, theme);
    refreshIcons();
  }
  var preferredTheme = readStorage(storageKeys.theme);
  setTheme(preferredTheme === "dark" || preferredTheme === "light" ? preferredTheme : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), false);
  themeButton.addEventListener("click", function () { setTheme(root.dataset.theme === "dark" ? "light" : "dark", true); });

  function bookmarkButton(post) {
    var button = node("button", "bookmark-button");
    var selected = state.bookmarks.has(post.id);
    button.type = "button";
    button.dataset.saveId = post.id;
    button.setAttribute("aria-pressed", String(selected));
    button.setAttribute("aria-label", (selected ? "取消收藏：" : "收藏：") + post.title);
    button.title = selected ? "取消收藏" : "收藏文章";
    button.append(icon("bookmark"));
    button.addEventListener("click", function () { toggleBookmark(post.id); });
    return button;
  }

  function renderPost(post) {
    var item = node("li", "post-row");
    item.dataset.postId = post.id;
    var date = node("time", "post-date", post.date.slice(5).replace("-", "."));
    date.dateTime = post.date;
    date.append(node("span", "", post.date.slice(0, 4)));
    var copy = node("div", "post-copy");
    var meta = node("div", "post-meta");
    meta.append(node("span", "", post.category));
    if (post.featured) {
      meta.append(node("span", "meta-dot", "·"));
      var featured = node("span", "featured-label"); featured.append(icon("sparkle"), document.createTextNode("精选")); meta.append(featured);
    }
    var heading = node("h3", "post-title");
    var open = node("button", "post-open", post.title); open.type = "button"; open.dataset.openId = post.id;
    open.addEventListener("click", function () { openPost(post.id, open); }); heading.append(open);
    var duration = node("div", "post-read-time"); duration.append(icon("clock-3"), document.createTextNode(readingMinutes(post) + " 分钟阅读"));
    copy.append(meta, heading, node("p", "post-excerpt", post.excerpt), duration);
    item.append(date, copy, bookmarkButton(post));
    return item;
  }

  function filteredPosts() {
    var query = state.query.trim().toLocaleLowerCase();
    return posts.filter(function (post) {
      var content = post.title + " " + post.excerpt + " " + post.category + " " + post.sections.map(function (section) { return section.title + " " + section.paragraphs.join(" "); }).join(" ");
      return (state.category === "全部" || post.category === state.category) && (!state.savedOnly || state.bookmarks.has(post.id)) && (!query || content.toLocaleLowerCase().includes(query));
    });
  }

  function render() {
    var visible = filteredPosts();
    list.replaceChildren.apply(list, visible.map(renderPost));
    document.getElementById("result-count").textContent = visible.length + " 篇文章";
    document.getElementById("journal-title").textContent = state.savedOnly ? "我的收藏" : "最近写下";
    document.getElementById("saved-count").textContent = String(state.bookmarks.size);
    document.getElementById("saved-filter").setAttribute("aria-pressed", String(state.savedOnly));
    document.getElementById("empty-state").hidden = visible.length !== 0;
    document.getElementById("empty-message").textContent = state.savedOnly && state.bookmarks.size === 0 ? "还没有收藏的文章。" : "换一个词，或看看其他分类。";
    document.querySelectorAll("[data-category]").forEach(function (button) {
      var active = button.dataset.category === state.category; button.classList.toggle("is-active", active); button.setAttribute("aria-pressed", String(active));
    });
    syncReaderSave();
    refreshIcons();
  }

  function toggleBookmark(id) {
    var active = state.bookmarks.has(id);
    if (active) state.bookmarks.delete(id); else state.bookmarks.add(id);
    var persisted = writeStorage(storageKeys.bookmarks, JSON.stringify(Array.from(state.bookmarks)));
    var focusedSave = document.activeElement && document.activeElement.dataset.saveId;
    render();
    if (focusedSave && !dialog.open) {
      var replacement = list.querySelector('[data-save-id="' + focusedSave + '"]');
      if (replacement) replacement.focus(); else document.getElementById("saved-filter").focus();
    }
    announce((active ? "已取消收藏" : "已收藏文章") + (persisted ? "" : "，本次会话内有效"));
  }

  function syncReaderSave() {
    if (!state.activeId) return;
    var button = document.getElementById("reader-save");
    var selected = state.bookmarks.has(state.activeId);
    button.setAttribute("aria-pressed", String(selected));
    button.setAttribute("aria-label", selected ? "取消收藏文章" : "收藏文章");
    button.title = selected ? "取消收藏文章" : "收藏文章";
  }

  function openPost(id, opener) {
    var post = getPost(id); if (!post) return;
    state.activeId = id; state.opener = opener || document.activeElement;
    document.getElementById("reader-title").textContent = post.title;
    document.getElementById("reader-meta").textContent = post.category + " / " + post.date.replaceAll("-", ".") + " / " + readingMinutes(post) + " 分钟 / 原创演示文章";
    document.getElementById("reader-deck").textContent = post.excerpt;
    var body = document.getElementById("reader-body"); body.replaceChildren();
    var toc = document.getElementById("reader-toc"); toc.replaceChildren();
    if (post.image) { var image = node("img"); image.src = post.image; image.alt = post.imageAlt; image.width = 1200; image.height = 650; body.append(image); }
    post.sections.forEach(function (section, index) {
      var heading = node("h3", "", section.title); heading.id = "reader-section-" + index;
      body.append(heading);
      section.paragraphs.forEach(function (paragraph) { body.append(node("p", "", paragraph)); });
      if (index === 1) body.append(node("blockquote", "", post.quote));
      var link = node("a", "", String(index + 1).padStart(2, "0") + " " + section.title); link.href = "#" + heading.id;
      link.addEventListener("click", function (event) { event.preventDefault(); heading.scrollIntoView({ block: "start", behavior: "auto" }); }); toc.append(link);
    });
    syncReaderSave();
    if (!dialog.open) dialog.showModal();
    root.dataset.readerOpen = "true";
    dialog.scrollTop = 0;
    document.getElementById("reader-close").focus();
    refreshIcons();
  }

  document.getElementById("reader-close").addEventListener("click", function () { dialog.close(); });
  document.getElementById("reader-save").addEventListener("click", function () { if (state.activeId) toggleBookmark(state.activeId); });
  dialog.addEventListener("click", function (event) { if (event.target === dialog) { var rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  dialog.addEventListener("close", function () {
    delete root.dataset.readerOpen;
    var opener = state.opener;
    if (opener && opener.isConnected) opener.focus();
    else { var replacement = list.querySelector('[data-open-id="' + state.activeId + '"]'); if (replacement) replacement.focus(); else document.getElementById("saved-filter").focus(); }
    state.activeId = null; state.opener = null;
  });

  document.querySelectorAll("[data-category]").forEach(function (button) { button.addEventListener("click", function () { state.category = button.dataset.category; render(); }); });
  document.getElementById("search-form").addEventListener("submit", function (event) { event.preventDefault(); });
  searchInput.addEventListener("input", function () { state.query = searchInput.value; render(); });
  document.getElementById("saved-filter").addEventListener("click", function () { state.savedOnly = !state.savedOnly; render(); document.getElementById("journal").scrollIntoView({ block: "start", behavior: "auto" }); });
  document.getElementById("reset-filters").addEventListener("click", function () { state.category = "全部"; state.query = ""; state.savedOnly = false; searchInput.value = ""; render(); searchInput.focus(); });

  var index = document.getElementById("article-index");
  posts.forEach(function (post, position) { var item = node("li"); var button = node("button", "index-button"); button.type = "button"; button.dataset.indexId = post.id; button.append(node("span", "", String(position + 1).padStart(2, "0")), document.createTextNode(post.title)); button.addEventListener("click", function () { openPost(post.id, button); }); item.append(button); index.append(item); });
  render();
})();
