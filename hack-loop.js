export async function main(ns) {
  const server = ns.args[0];
  const moneyThresh = ns.getServerMaxMoney(server) * 0.75;
  while (true) {
    if (ns.getServerMoneyAvailable(server) < moneyThresh) {
      await ns.sleep(60000);
    }
    else {
      await ns.hack(server);
    }
  }
}