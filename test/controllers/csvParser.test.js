const parse = require('csv-parse');
const getCashFlowFromCsv = require('../../src/controllers/csvCashFlowParser');

const TEST_DATA_FILES_DIR = 'test/controllers/data/';

const expectedTransaction1 = {
  'Data operacji': '2020-08-07',
  'Opis operacji': 'Test Transaction ',
  Rachunek: ' Test Account ',
  Kategoria: 'Zdrowie i uroda',
  Kwota: '-41,25 PLN',
};

const expectedTransaction2 = {
  'Data operacji': '2020-08-08',
  'Opis operacji': 'Test Transaction 2 ',
  Rachunek: ' Test Account 2 ',
  Kategoria: 'Żywnośc',
  Kwota: '-100,25 PLN',
};

test('WHEN no file is passed THEN TypeError is thrown', () => {
  expect(() => {
    getCashFlowFromCsv('');
  }).toThrow(TypeError);
});

test('WHEN not csv file is passed TypeError is thrown', () => {
  expect(() => {
    getCashFlowFromCsv(`${TEST_DATA_FILES_DIR}notCsv.file`);
  }).toThrow(TypeError);
});

test('GIVEN CSV input file with one transactions THEN one is processed and returned', () => {
  const cashFlow = getCashFlowFromCsv(`${TEST_DATA_FILES_DIR}singleTransaction.csv`);
  expect(cashFlow[0]).toEqual(expectedTransaction1);
  expect(cashFlow.length).toEqual(1);
});

test('GIVEN CSV input file with multiple transactions THEN all transaction returned and processed', () => {
  const cashFlow = getCashFlowFromCsv(`${TEST_DATA_FILES_DIR}multipleTransactions.csv`);
  expect(cashFlow[0]).toEqual(expectedTransaction1);
  expect(cashFlow[1]).toEqual(expectedTransaction2);
  expect(cashFlow.length).toEqual(2);
});

test('GIVEN CSV input file with zero transactions THEN all nothing is returned', () => {
  const cashFlow = getCashFlowFromCsv(`${TEST_DATA_FILES_DIR}zeroTransactions.csv`);
  expect(cashFlow.length).toEqual(0);
});

test('WHEN not csv file is passed TypeError is thrown', () => {
  expect(() => {
    getCashFlowFromCsv(`${TEST_DATA_FILES_DIR}invalidTransaction.csv`);
  }).toThrow(parse.CsvError);
});
