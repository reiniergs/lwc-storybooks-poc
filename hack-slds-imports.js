const pkgJson = require('./node_modules/@salesforce-ux/design-system/package.json');
const fs = require('fs');

pkgJson.lwc.modules = Object.keys(pkgJson.lwc.modules).reduce((seed, name) => {
    seed.push({
        name,
        path: pkgJson.lwc.modules[name],
    })
    return seed;
}, []);

fs.writeFileSync('./node_modules/@salesforce-ux/design-system/package.json', JSON.stringify(pkgJson));

