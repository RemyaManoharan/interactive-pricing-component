const viewPriceTag = document.querySelector("span.pricing-card_views");
const inputRange = document.querySelector(".pricing-card-range");
const costTag = document.querySelector("span.price-tag");
const priceFrequnecyTag = document.querySelector("span.billing-frequency");
const frequencyToggleTag = document.querySelector("#billing-freq");
const form = document.querySelector("form.pricing-card");

console.log({
  inputRange,
  viewPriceTag,
  costTag,
  priceFrequnecyTag,
  frequencyToggleTag,
});
// data
const view_data = [
  {
    pageViews: "10k",
    monthlyCost: 8,
    leftPercentage: 0,
  },
  {
    pageViews: "50k",
    monthlyCost: 12,
    leftPercentage: 25,
  },
  {
    pageViews: "100k",
    monthlyCost: 16,
    leftPercentage: 50,
  },
  {
    pageViews: "500k",
    monthlyCost: 24,
    leftPercentage: 75,
  },
  {
    pageViews: "1M",
    monthlyCost: 36,
    leftPercentage: 100,
  },
];
form.addEventListener("submit", (e) => e.preventDefault());

const getData = () => {
  const currentValue = inputRange.value;
  const index = currentValue - 1;
  return ({ pageViews, monthlyCost, leftPercentage } = view_data[index]);
};
const updatePageViews = () => {
  const { pageViews } = getData();
  viewPriceTag.textContent = `${pageViews} pageviews`;
};

const isYealyFrequency = () => {
  return frequencyToggleTag.checked;
};

const updateCost = () => {
  const { monthlyCost } = getData();
  const isYearly = isYealyFrequency();
  const price = isYearly ? monthlyCost * 12 * 0.75 : monthlyCost;
  costTag.textContent = `${price.toFixed(2)}`;
  if (isYearly) {
    priceFrequnecyTag.textContent = "/ year";
  } else {
    priceFrequnecyTag.textContent = "/ month";
  }
};
const updateLeftPercentage = () => {
  const { leftPercentage } = getData();
  form.style.setProperty("--left", leftPercentage);
};
const updateChanges = () => {
  //update page views
  updatePageViews();
  // update cost
  updateCost();
  // update left variable
  updateLeftPercentage();
};

inputRange.addEventListener("input", updateChanges);
frequencyToggleTag.addEventListener("input", updateCost);
