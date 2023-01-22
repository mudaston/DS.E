const fs = require('fs')
const path = require('path')
const sass = require('sass')

const result = sass.compile('scss/src/global.scss', {
	style: 'expanded',
})

fs.writeFileSync(path.resolve('scss/src/lib/global.css'), result.css.toString())
