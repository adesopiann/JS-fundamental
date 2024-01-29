let load = document.getElementById("loading_progress");
let html = '';

for (let index = 0; index <= 100; index++) {
    html += `<p>${index}</p>`
    
}
alert("Sudah mencapai batas")

loading_progress.innerHTML = html;