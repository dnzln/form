const TEXT = `[
    {
      "gotTime": "our expert translator can take a reasonable amount of time perfecting your translation.",
      "average": "you will get the best translation.",
      "yesterday": "we will do our best to make translation as soon as possible."
    }
  ]`;
const URGENCY = Object.values(JSON.parse(TEXT)[0]);
const URGENCY_STATUS = document.querySelector('.changeable-tip');
const URGENCY_TEXT = document.querySelector('.changeable-text');
const RANGE_STATUS_LIST = [...document.querySelectorAll('.range-label .tip-text')];
const RANGE_INPUT = document.querySelector('.urgent-range');

RANGE_INPUT.addEventListener('change', rangeInputHandle);

function rangeInputHandle() {
  RANGE_STATUS_LIST.forEach(elem => elem.classList.remove('orange'));
  RANGE_STATUS_LIST[this.value].classList.add('orange');
  URGENCY_TEXT.innerHTML = URGENCY[this.value];
  URGENCY_STATUS.innerHTML = RANGE_STATUS_LIST[this.value].innerHTML;
}
