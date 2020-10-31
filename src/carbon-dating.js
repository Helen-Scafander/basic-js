const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693/HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity == 'string'){
  sampleActivity = parseFloat(sampleActivity);
  if(MODERN_ACTIVITY > sampleActivity && sampleActivity > 0){
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity)/k);
  }
}
return false;
}
