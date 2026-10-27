const fs = require('fs');
const path = 'D:/Work/Projects/Ativar/.next/server/app/layout.js';
try {
  const s = fs.readFileSync(path, 'utf8');
  if (s.includes('rtl-enabled')) {
    const idx = s.indexOf('rtl-enabled');
    console.log('FOUND');
    console.log(s.slice(idx-100, idx+100));
  } else {
    console.log('NOT FOUND');
    // look for html
    const m = s.match(/<html[^>]+>/);
    if(m) console.log(m[0]);
  }
} catch(e) {
  console.log('err', e.message);
}
