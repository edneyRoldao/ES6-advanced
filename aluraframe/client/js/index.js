var fields = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(fields);

var tBody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', (event) => {

    // avoiding refresh when submit in order to not lose data
    event.preventDefault();

    var tr = document.createElement('tr');

    fields.forEach((field) => {
        var td = document.createElement('td');
        td.textContent = field.value;
        tr.appendChild(td);

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = fields[1].value * fields[2].value;

    tr.appendChild(tdVolume);

    tBody.appendChild(tr);

    // cleaning form when done
    fields[0].value = '';
    fields[1].value = 1;
    fields[2].value = 0;

    fields[0].focus();
});