const html = "<abc>123<v>123</v><v>123<span>12312</span></v>123123</abc>";
const REG = new RegExp(/<(\/?)(\w+)>([^<]*)/g);

function parse(html) {
  let tag = null;
  let tags = [];
  while (tag = REG.exec(html)) {
    tags.push({
      match: tag[0],
      endTag: tag[1] == '/',
      tag: tag[2],
      afterWord: tag[3],
    });
  }
  let stack = [];
  let result = {};
  for(let tag of tags) {
    
  }
}

parse(html)