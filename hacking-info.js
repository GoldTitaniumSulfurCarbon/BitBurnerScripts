//Runs alongside a server, checking its info every minute.
export async function main(ns) {
  var target = ns.args[0]
  while (true) {
    ns.getServerSecurityLevel(target);
    ns.getServerMinSecurityLevel(target);
    ns.getServerMoneyAvailable(target);
    ns.getServerMaxMoney(target);
    await ns.sleep(60000); //1 minute timer
  }
}