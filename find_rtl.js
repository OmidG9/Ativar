const fs = require('fs');
const path = require('path');
function walk(dir){
  try {
    const entries = fs.readdirSync(dir, {withFileTypes: true});
    for(const e of entries){
      if(e.name === 'node_modules') continue;
      const p = path.join(dir, e.name);
      if(e.isDirectory()){
        walk(p);
      }else{
        try {
          if(p.match(/\.(js|html|json|txt|mjs)$/i)){
            const s = fs.readFileSync(p, 'utf8');
            if(s.includes('rtl-enabled')){
              console.log('FOUND:', p);
              process.exit(0);
            }
          }
        } catch(ex){}
      }
    }
  } catch(ex){}
}
walk('D:/Work/Projects/Ativar/.next');
console.log('done');
process.exit(0);
