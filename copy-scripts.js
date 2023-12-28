/** @param {NS} ns */
export async function main(ns) {
  //First argument is the server to host script
  //Second argument is server that is getting hacked
  //IE: "copy-script.js home n00dles"
  var serv = ns.args[0]
  var target = ns.args[1]

  ns.scp("hack-loop.js", serv);
  ns.scp("weaken-loop.js", serv);
  ns.scp("grow-loop.js", serv);
  ns.scp("hacking-info.js", serv);

  //RAM usage is split up between functions with 2^14 GBs
  ns.exec("hacking-info.js", serv, 1, target); //2 GB RAM
  ns.exec("hack-loop.js", serv, 1293, target); //1.9GB RAM; 15% allocated 
  ns.exec("weaken-loop.js", serv, 3270, target); //1.75GB RAM; 35% allocated
  ns.exec("grow-loop.js", serv, 4680, target); //1.75GB RAM; 50% allocated
}
