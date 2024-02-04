var contacts = [];

function addContact() {
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var cleanedPhone = phone.replace(/\D/g, '');

  if (name && cleanedPhone.length === 11) {
    var formattedPhone = formatPhoneNumber(cleanedPhone);

    var contact = { name: name, phone: formattedPhone };
    contacts.push(contact);

    contacts.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });

    clearTable();

    fillTable();

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
  } else {
    alert('Por favor, insira um número de telefone válido com 11 dígitos.');
  }
}

function formatPhoneNumber(phone) {
  var formatted = `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
  return formatted;
}

function clearTable() {
  var table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
  table.innerHTML = '';
}

function fillTable() {
  var table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];

  for (var i = 0; i < contacts.length; i++) {
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = contacts[i].name;
    cell2.innerHTML = contacts[i].phone;
  }
}
