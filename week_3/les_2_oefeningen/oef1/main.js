const { generateRandomData } = require('./data.js');
const { processData, calculateImportanceCount } = require('./processing.js');
const { showProcessedData, showImportanceScore, showComplexitySummary } = require('./reporting.js');

const randomData = generateRandomData();
const processedData = processData(randomData);
showProcessedData(processedData);
const { highImportanceCount, lowImportanceCount } = calculateImportanceCount(processedData);
showImportanceScore(highImportanceCount, lowImportanceCount, processedData);
calculateImportanceCount(processedData, 5);
showComplexitySummary(highImportanceCount, lowImportanceCount, processedData);