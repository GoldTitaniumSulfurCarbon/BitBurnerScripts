export async function main(ns) {
  ns.scan("home").forEach(disseminate);

  function disseminate(target) {
    if (ns.fileExists("BruteSSH.exe", "home")) {
      ns.brutessh(target);
    }
    if (ns.fileExists("FTPCrack.exe", "home")) {
      ns.ftpcrack(target);
    }
    if (ns.fileExists("relaySMTP.exe", "home")) {
      ns.relaysmtp(target);
    }
    if (ns.fileExists("HTTPWorm.exe", "home")) {
      ns.httpworm(target);
    }
    if (ns.fileExists("SQLInject.exe", "home")) {
      ns.sqlinject(target);
    }

    try {
      ns.nuke(target);
    } catch (ex) { }

    ns.scan(target).slice(1).forEach(disseminate);
  }
}