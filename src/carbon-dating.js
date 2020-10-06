const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693/HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'String' || sampleActivity == undefined || sampleActivity == null || sampleActivity == '') {
    return false;
  } else {
    return Math.ceil(Math.log(sampleActivity/HALF_LIFE_PERIOD)/k);
  }
};
