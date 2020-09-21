const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 100, 32];

// companies.forEach((company) => {

//   console.log(company.name + " " + company.start)
// })

// without using filter method

// canDrink = []

// for(let i =0; i<ages.length; i++ ) {

//   if (ages[i] >=21) {
//     canDrink.push(ages[i])
//   }
// }

// console.log(canDrink)

canDrink = ages.filter((age) => age > 21);
console.log(canDrink);

//Filter Retail companyies:

retailComp = companies.filter((company) => company.category === "Retail");
console.log(retailComp);

// 80's companies

eightiesCompnany = companies.filter(
  (company) => company.start >= 1980 && company.strat < 1990
);

console.log(eightiesCompnany);

//map() method ,create array of company name

const companyName = companies.map((company) => company.name);
console.log(companyName);

const temp = companies.map((company) => {
  return `${company.name} [${company.start}- ${company.end}]`;
});
console.log(temp);


const ageTimesTwo = ages.map(age=>age*2)
console.log(ageTimesTwo
  )
