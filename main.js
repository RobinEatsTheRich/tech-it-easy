// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//////////////////////////////////////////////////--Opdracht 1--//////////////////////////////////////////////////
//---------------------Pseudocode---------------------//
//1a:   Map TV add Type to new array typeInventory

//1b:   Map TV if Sold >= originalStock add to new array soldOutInventory.

//1c:   Map TV if ambilight = true, add to new array soldOutInventory.

//1d:   Inventory.sort( price? )


//---------------------1a---------------------//
let typeInventory = [];
inventory.map((tv) => {
  typeInventory.push(tv.type)
})

console.log(`Opdracht 1A: ${typeInventory}`)


//---------------------1b---------------------//
let soldOutInventory = [];
inventory.map((tv) => {
  if (tv.sold >= tv.originalStock){
    soldOutInventory.push(tv)
  }
})

console.log(`Opdracht 1B: ${soldOutInventory}`)


//---------------------1c---------------------//
let ambiLightInventory = [];
inventory.map((tv) => {
  if (tv.ambiLight){
    ambiLightInventory.push(tv)
  }
})

console.log(`Opdracht 1C: ${ambiLightInventory}`)


//---------------------1d---------------------//
function sortPriceLowToHigh(targetArray){
  targetArray.sort((a, b) => {
    return a.price - b.price;
  })
  return targetArray;
}

console.log(`Opdracht 1D: ${sortPriceLowToHigh(inventory)}`)


//////////////////////////////////////////////////--Opdracht 2--//////////////////////////////////////////////////
//---------------------Pseudocode---------------------//
//2a:   let soldTvTotal, for each TV, soldTvTotal += TV[i].sold

//2b:   Get Element, text = SoldTVTotal

//2c:   Repeat 2A but a little to the left.

//2d:   Repeat 2B but a little to the left.

//2e:   Get Element, text = (Bought-Sold)


//---------------------2a---------------------//
function totalSoldTVs (targetArray) {
  let soldTVTotal = 0;
  for (let i = 0; i < targetArray.length; i++) {
    soldTVTotal += targetArray[i].sold;
  }
  return soldTVTotal
}
console.log(`Opdracht 2A: ${totalSoldTVs(inventory)}`)


//---------------------2b---------------------//
const soldTvList = document.getElementById("soldTvList");
soldTvList.textContent = totalSoldTVs(inventory);


//---------------------2c---------------------//
function totalBoughtTVs (targetArray) {
  let boughtTVTotal = 0;
  for (let i = 0; i < targetArray.length; i++) {
    boughtTVTotal += targetArray[i].originalStock;
  }
  return boughtTVTotal;
}
console.log(`Opdracht 2C: ${totalBoughtTVs(inventory)}`)

//---------------------2d---------------------//
const boughtTvList = document.getElementById("boughtTvList");
boughtTvList.textContent = totalBoughtTVs(inventory);

//---------------------2e---------------------//
const howManyToSell = document.getElementById("howManyToSell");
howManyToSell.textContent = (totalBoughtTVs(inventory) - totalSoldTVs(inventory))


//////////////////////////////////////////////////--Opdracht 3--//////////////////////////////////////////////////
//---------------------Pseudocode---------------------//
//3:   Let tvBrands, Inventory.map, tvBrands.Push(tv.brand)
//      Get Element, text = tvBrands.


//---------------------3---------------------//
function getBrandInventory(targetArray) {
  let brandInventory = [];
  targetArray.map((tv) => {
    brandInventory.push(tv.brand)
  })
  return brandInventory;
}

const brandsList = document.getElementById("brandsList");
brandsList.textContent = getBrandInventory(inventory);


//////////////////////////////////////////////////--Opdracht 4--//////////////////////////////////////////////////


//---------------------Pseudocode---------------------//
//4a:   Let tvNameString = inventory[0].type+ +brand+ +name

//4b:   Let tvPriceString =`€${inventory[0].price}`

//4c:   let tvSizesString. if inventory[0].length > 0:
//      for each inventory[0].Size, tvSizesString add `${size} inch (${size/something} cm) |`
//      else, tvSizesString = `${size} inch (${size/something} cm)`

//4d:   get Element, copy paste.

//4e:   inventory.map, copy paste functions from 4A,B,&C.


//---------------------4a---------------------//
function getTvName(tv){
  return `${tv.brand} ${tv.type} - ${tv.name}`
}
console.log(getTvName(inventory[1]))
//---------------------4b---------------------//
function getTvPrice(tv){
  return `€${tv.price}`
}
console.log(getTvPrice(inventory[1]))
//---------------------4b---------------------//
function getTvSizes(tv){
  if (tv.availableSizes.length === 1){
    return `${tv.availableSizes[0]} inch (${tv.availableSizes[0]*2.54} cm)`
  }
  else {
    let tvSizeString = "";
    for (let i = 0; i < tv.availableSizes.length; i++){
      tvSizeString += `${tv.availableSizes[i]} inch (${tv.availableSizes[i]*2.54} cm) | `
    }
    return tvSizeString.substring(0,tvSizeString.length-3);
  }
}
console.log(getTvSizes(inventory[1]))

//---------------------4d---------------------//
const individualTVs = document.getElementById("individualTVs");
// individualTVs.innerHTML +=  `
//         <h3 class="tvName">${getTvName(inventory[0])}</h3>
//         <p class="tvPrice">${getTvPrice(inventory[0])}</p>
//         <p class="tvSizes">${getTvSizes(inventory[0])}</p>
// `;

//---------------------4e---------------------//
inventory.map((tv) =>{
  individualTVs.innerHTML +=  `
        <div class ="highlightedTV">
          <h3 class="tvName">${getTvName(tv)}</h3>
          <p class="tvPrice">${getTvPrice(tv)}</p>
          <p class="tvSizes">${getTvSizes(tv)}</p>
        </div>
        `;
})