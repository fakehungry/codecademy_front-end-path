// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let randIndex = Math.floor(Math.random() * this.dna.length);
      let randDNA = returnRandBase();
      while (this.dna[randIndex] === randDNA) {
        randDNA = returnRandBase();
      }
      this.dna[randIndex] = randDNA;
    },
    compareDNA(passedDNA) {
      let sameDNA = [];
      for (let i = 0; i < this.dna.length; i++) {
        sameDNA[i] = this.dna[i] === passedDNA.dna[i] ? true : false;
      }
      let sumSameDNA = sameDNA.filter(Boolean).length;
      console.log(
        `specimen #${this.specimenNum} and specimen #${
          passedDNA.specimenNum
        } have ${Math.round(
          (sumSameDNA / this.dna.length) * 100
        )}% DNA in common`
      );
    },
    willLikelySurvive() {
      let result = this.dna.filter((el) => el === "C" || el === "G");
      return result.filter(Boolean).length / this.dna.length >= 0.6
        ? true
        : false;
    },
  };
};

let surviveDNA = [];
for (let n = 0; n < 2; n++) {
  let sampDNA = pAequorFactory(n + 1, mockUpStrand());
  while (!sampDNA.willLikelySurvive()) {
    sampDNA.mutate();
  }
  // if (n > 0) {
  //   for (let j = 0; j < n; j++) {
  //     sampDNA.compareDNA(surviveDNA[j]);
  //   }
  // }
  surviveDNA[n] = sampDNA;
}
