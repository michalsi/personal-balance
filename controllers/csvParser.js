const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const iconv = require('iconv-lite');

function readCsvFileAndClean(csvFile) {
    if (fs.existsSync(csvFile)) {
        const csvContent = fs.readFileSync(csvFile);
        const csvContentDecoded = iconv.decode(csvContent, 'ISO-8859-2');
        return csvContentDecoded.replace(/#/g, '').replace(/;;/g, '');
    } else {
        throw new Error("Something is wrong with CSV input file " + inputFile);
    }
}

function parseCsv(input) {
    return records = parse(input, {
        columns: true,
        from_line: 26,
        delimiter: ";"
    });
}


function getCashFlowFromCsv(csvFile) {
    let csvContentCleaned = readCsvFileAndClean(csvFile);
    return parseCsv(csvContentCleaned);
}

module.exports = exports = getCashFlowFromCsv;