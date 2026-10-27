const fs = require('fs');
const path = 'D:/Work/Projects/Ativar/.next/static/chunks/app/layout.js';
try {
  const s = fs.readFileSync(path, 'utf8');
  if (s.includes('rtl-enabled')) {
    console.log('found');
    const idx = s.indexOf('rtl-enabled');
    console.log(s.slice(Math.max(0,idx-60), idx+60));
  } else {
    console.log('not found');
  }
} catch(e) {
  console.log('err', e.message);
}
