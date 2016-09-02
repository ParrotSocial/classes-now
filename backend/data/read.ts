import fs = require('fs')

// const filename = '/lookup-courses-data.html'
const filename = '/debugging-courses.html'

// get the contents of the data file
export function readData(): string {
  let contents = fs.readFileSync(__dirname + filename, 'utf8')
  const indexOfStart = contents.indexOf('<tr>\n<td class="dddefault"><abbr title="Closed">C</abbr></td>')
  const indexOfEnd = contents.lastIndexOf('</tbody></table>')
  return contents.slice(indexOfStart, indexOfEnd)
}
