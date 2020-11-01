const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const iconv = require('iconv-lite');

function readCsvFileAndClean(csvFile) {
  if (fs.existsSync(csvFile)) {
    if (csvFile.match(/\.(csv)$/)) {
      const csvContent = fs.readFileSync(csvFile);
      const csvContentDecoded = iconv.decode(csvContent, 'UTF-32');
      return csvContentDecoded.replace(/#/g, '').replace(/;;/g, '');
    }
    throw new TypeError(`Not a CSV input file: ${csvFile}`);
  } else {
    throw new TypeError(
      `Something is wrong with path of the CSV input file: ${csvFile}`
    );
  }
}

function parseCsv(input) {
  return parse(input, {
    columns: true,
    from_line: 26,
    delimiter: ';',
  });
}

function getCashFlowFromCsv(csvFile) {
  const csvContentCleaned = readCsvFileAndClean(csvFile);
  return parseCsv(csvContentCleaned);
}

module.exports = getCashFlowFromCsv;
