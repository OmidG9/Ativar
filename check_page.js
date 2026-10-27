const fs = require('fs');
const path = 'D:/Work/Projects/Ativar/.next/server/app/page.js';
try {
  const s = fs.readFileSync(path, 'utf8');
  const m = s.match(/<html[^>]+>/i);
  if(m) {
    console.log(m[0]);
  } else {
    console.log('no html tag found');
    const idx = s.indexOf('html');
    if(idx > -1) console.log(s.slice(idx-40, idx+80));
  }
} catch(e) {
  console.log('err', e.message);
}
