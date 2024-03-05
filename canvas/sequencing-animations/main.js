const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const step1 = () => alice1.animate(aliceTumbling, aliceTiming)
const step2 = () => alice2.animate(aliceTumbling, aliceTiming)
const step3 = () => alice3.animate(aliceTumbling, aliceTiming)






async function runAlice() {
  await alice1.animate(aliceTumbling, aliceTiming).finished
  await alice2.animate(aliceTumbling, aliceTiming).finished
  await alice3.animate(aliceTumbling, aliceTiming).finished
}

runAlice()


/*   await step1().finished
  await step2().finished
  await step3().finished */