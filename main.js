let customerRank = 3;
let brand = "Audi";
let color = "Siyah";
let model = 2021;


if (customerRank >= 5) {
  console.log("Kaputu Ac Abi!");
} else if (brand === "BMW" && (color === "Kirmizi" && model >= 2010 && model <= 2019) || (color === "Siyah" && model === 2020)) {
  console.log("Kaputu Ac Abi!");
} else if (brand === "Audi" && (color === "Kirmizi" || color === "Siyah") && ((model <= 2010 && model >= 2005) || (model >= 2014 && model <= 2020))) {
  console.log("Kaputu Ac Abi!");
} else if (brand === "VW" && color === "Siyah" && model <= 2018 && model >= 2001) {
  console.log("Kaputu Ac Abi!")
} else {
  console.log("Biz Bakmiyoruz, Ali Usta Baksin!")
}