const fs = require('fs');
const path = 'D:/Work/Projects/Ativar/.next/static/chunks/app/layout.js';
try {
  const s = fs.readFileSync(path, 'utf8');
  const m = s.match(/html[^\}]{80,300}/i);
  if(m) console.log(m[0]);
  else console.log('no match');
} catch(e) {
  console.log('err', e.message);
}
