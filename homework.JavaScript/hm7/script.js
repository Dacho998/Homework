console.log('connected')
let button = document.getElementById('btn');
button.onclick = createTable;
function createTable() {
    let rows = parseFloat(document.getElementById('rows').value);
    let cols = parseFloat(document.getElementById('cols').value);
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    let table = document.createElement('table');
    table.style.border = '1px solid black';
    for (let i = 1; i <= rows; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        for (j = 1; j <= cols; j++) {
            let coll = document.createElement('td');
            coll.style.border = '1px solid black';
            coll.textContent = `Row-${i} Coll-${j}`;
            row.appendChild(coll);
        }
    } tableContainer.appendChild(table);
}
