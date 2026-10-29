(() => {
  'use strict';
  const root = document.documentElement;
  const $ = selector => document.querySelector(selector);
  const all = selector => [...document.querySelectorAll(selector)];
  const storage = { get(key) { try { return localStorage.getItem(key); } catch { return null; } }, set(key,value) { try { localStorage.setItem(key,value); return true; } catch { return false; } } };
  const icons = () => window.lucide?.createIcons();
  let toastTimer;
  function toast(message) { $('#toast').textContent = message; $('#toast').hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').hidden = true,3200); }
  function updateThemeButton() { const dark = root.dataset.theme === 'dark'; const button = $('#theme-toggle'); button.innerHTML = '<i data-lucide="' + (dark ? 'sun' : 'moon') + '" aria-hidden="true"></i>'; button.title = dark ? '切换到亮色主题' : '切换到暗色主题'; button.setAttribute('aria-label',button.title); icons(); }
  updateThemeButton();
  $('#theme-toggle').addEventListener('click',() => { root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark'; storage.set('quietnotes-site-theme',root.dataset.theme); updateThemeButton(); });
  function closeMenu() { $('#mobile-nav').hidden = true; $('#menu-toggle').setAttribute('aria-expanded','false'); }
  $('#menu-toggle').addEventListener('click',() => { const open = $('#mobile-nav').hidden; $('#mobile-nav').hidden = !open; $('#menu-toggle').setAttribute('aria-expanded',String(open)); });
  all('#mobile-nav a').forEach(link => link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event => { if (event.key === 'Escape') closeMenu(); });
  const tabs = all('[data-device][role="tab"]');
  function setDevice(button,focus=false) { tabs.forEach(tab => { const selected = tab === button; tab.setAttribute('aria-selected',String(selected)); tab.tabIndex = selected ? 0 : -1; }); $('.product-stage').dataset.device = button.dataset.device; $('#product-preview').setAttribute('aria-labelledby',button.id); if (focus) button.focus(); }
  tabs.forEach((button,index) => { button.addEventListener('click',() => setDevice(button)); button.addEventListener('keydown',event => { let next = index; if(event.key === 'ArrowRight') next = (index+1)%tabs.length; else if(event.key === 'ArrowLeft') next = (index-1+tabs.length)%tabs.length; else if(event.key === 'Home') next = 0; else if(event.key === 'End') next = tabs.length-1; else return; event.preventDefault(); setDevice(tabs[next],true); }); });
  const baseNotes = [
    {id:'forest',title:'在林间，慢一点',content:'把注意力从屏幕移开，才发现树影每天都不一样。记下这些微小的变化，也是在为生活留下坐标。',image:'images/forest.jpg',alt:'阳光穿过安静的绿色树林',tag:'生活观察',quote:'不必急着给每一个想法一个结论。',hashtags:'#生活观察 #慢下来',date:'刚刚'},
    {id:'reading',title:'最近读到的一句话',content:'一本书的意义，有时在于它让你停下来，重新看一眼熟悉的生活。今天读到的这段文字，我想留给未来的自己。',tag:'阅读',quote:'愿你在平常的日子里，依然保有好奇心。',hashtags:'#阅读 #摘记',date:'昨天'},
    {id:'field',title:'走一条没走过的路',content:'下个周末，想去城市边缘走走。不安排很多目的地，带上相机和水，沿着有风的方向慢慢走。',image:'images/field.jpg',alt:'自然光下开阔的绿色田野',tag:'远行计划',quote:'风景就在路上，不只在目的地。',hashtags:'#远行计划 #周末',date:'10月26日'},
    {id:'code',title:'把复杂的事，写简单',content:'写代码之前，先用一段话说清楚问题。输入是什么，期望得到什么，哪些细节暂时不重要。有时最有效的整理，只是一张空白纸。',tag:'代码片段',quote:'清楚地描述问题，是解决问题的第一步。',hashtags:'#代码 #工作笔记',date:'10月24日'}
  ];
  let customNotes = [];
  try { const parsed = JSON.parse(storage.get('quietnotes-preview-notes') || '[]'); if(Array.isArray(parsed)) customNotes = parsed.filter(note => note && typeof note.id === 'string' && typeof note.title === 'string' && typeof note.content === 'string').slice(0,30).map(note => ({id:note.id,title:note.title.slice(0,60),content:note.content.slice(0,3000),tag:'随手记',quote:'写下此刻，留给以后。',hashtags:'#随手记',date:'本地笔记'})); } catch {}
  let notes = [...customNotes,...baseNotes]; let activeId = 'forest';
  function selectNote(id) { const note = notes.find(item => item.id === id); if(!note) return; activeId = id; $('#editor-title').textContent = note.title; $('#editor-body').textContent = note.content; $('#editor-tag').textContent = note.tag; $('#editor-quote').textContent = note.quote; $('#editor-hashtag').textContent = note.hashtags; $('#editor-meta').textContent = (note.date === '本地笔记' ? '本地笔记' : '示例笔记')+' · '+note.date; const image = $('#editor-image'); image.hidden = !note.image; if(note.image) { image.src = note.image; image.alt = note.alt; } $('.editor-content').scrollTop = 0; all('.note-list-item').forEach(button => { button.classList.toggle('is-active',button.dataset.noteId === id); button.setAttribute('aria-pressed',String(button.dataset.noteId === id)); }); }
  function renderNotes() { const query = $('#preview-search').value.trim().toLocaleLowerCase(); const filtered = notes.filter(note => (note.title+' '+note.content+' '+note.tag).toLocaleLowerCase().includes(query)); $('#preview-note-list').replaceChildren(); filtered.forEach(note => { const button = document.createElement('button'); button.type = 'button'; button.className = 'note-list-item'; button.dataset.noteId = note.id; button.setAttribute('aria-pressed',String(note.id === activeId)); button.classList.toggle('is-active',note.id === activeId); const title = document.createElement('strong'); title.textContent = note.title; const content = document.createElement('p'); content.textContent = note.content; button.append(title,content); if(note.image) { const image = document.createElement('img'); image.src = note.image; image.alt = ''; image.width = 82; image.height = 43; button.append(image); } const date = document.createElement('span'); date.className = 'note-date'; date.textContent = note.date; button.append(date); button.addEventListener('click',() => selectNote(note.id)); $('#preview-note-list').append(button); }); $('#preview-empty').hidden = filtered.length > 0; }
  $('#preview-search').addEventListener('input',renderNotes); renderNotes(); selectNote(activeId);
  const dialog = $('#note-dialog');
  function newNote() { $('#note-form').reset(); dialog.showModal(); $('#note-title').focus(); }
  $('#new-note').addEventListener('click',newNote); $('#mobile-new-note').addEventListener('click',newNote);
  $('#close-dialog').addEventListener('click',() => dialog.close()); $('#cancel-note').addEventListener('click',() => dialog.close());
  $('#note-form').addEventListener('submit',event => { event.preventDefault(); const title = $('#note-title').value.trim(); const content = $('#note-content').value.trim(); if(!title || !content) return; const note = {id:'local-'+Date.now(),title,content,tag:'随手记',quote:'写下此刻，留给以后。',hashtags:'#随手记',date:'本地笔记'}; customNotes.unshift(note); customNotes = customNotes.slice(0,30); notes = [...customNotes,...baseNotes]; const saved = storage.set('quietnotes-preview-notes',JSON.stringify(customNotes)); $('#preview-search').value = ''; renderNotes(); selectNote(note.id); dialog.close(); toast(saved ? '笔记已保存在此浏览器。' : '笔记已添加，仅保留在当前页面。'); });
  function setPreviewTheme(theme) { if(!['light','dark','garden'].includes(theme)) theme = 'light'; $('#product-preview').dataset.previewTheme = theme; $('#theme-demo').dataset.previewTheme = theme; all('.theme-options button').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.previewTheme === theme))); }
  setPreviewTheme(storage.get('quietnotes-preview-theme') || 'light'); all('.theme-options button').forEach(button => button.addEventListener('click',() => { setPreviewTheme(button.dataset.previewTheme); storage.set('quietnotes-preview-theme',button.dataset.previewTheme); }));
  $('#download-note').addEventListener('click',() => { const url = URL.createObjectURL(new Blob(['# 给今天的一封短信\n\n日期：\n\n## 今天想记下\n\n\n## 一个小发现\n\n\n## 留给未来的自己\n'],{type:'text/markdown;charset=utf-8'})); const link = document.createElement('a'); link.href = url; link.download = 'QuietNotes-blank-note.md'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url),1000); });
  icons();
})();
