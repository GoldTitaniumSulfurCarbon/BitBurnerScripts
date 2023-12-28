//Creates a 16 terabyte server with the name passed as an argument.
export async function main(ns) {
  const name = ns.args[0]
const ram = 16384; //Must be some power of 2^x. 16384 seems to be the cap. 55000*RAM for price.
await ns.purchaseServer(name, ram);
}
