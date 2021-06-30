const fs = require('fs');
const { readdir } = require('fs/promises');

readdir('avatars').then((files) => {
    for (const name of files) {
        fs.writeFileSync(`in/${name.slice(0, -4)}.json`,
`{
    "name": "${name.slice(0, -4)}",
    "law": 0,
    "based": 0,
    "good": 0,
    "boomer": 0,
    "bloomer": 0,
    "coomer": 0,
    "chad": 0,
    "gigabrain": 0
}`
);
    }
});