const selectedRow = null;

function onFormSubmit(e){
    event.preventDefault();
    const formData = getData();
    if(selectedRow === null){
        insertData(formData);
    }else{
        updateData(formData)
    }
    resetForm();
}

function getData(){
    const formData = {};
    formData["nama"] = $("#nama").val();
    formData["nim"] = $("#nim").val();
    return formData;
}

function insertData(data){
    const table = $("#table") && $('tbody')[0];
    const newRow = table.insertRow(table.length);
    newRow.innerHTML = `
    <td>${""}</td>
    <td>${data.nama}</td>
    <td>${data.nim}</td>
    <td>
    <button type="button" class="btn btn-warning" onclick = 'editData(this)'>Edit</button>
    <button type="button" class="btn btn-danger" onclick = 'deleteData(this)' id = 'del'>Delete</button>
    </td>
    `;
}

function resetForm(){
    $("#nama").val('');
    $("#nim").val('');
    selectedRow = null;
}

function editData(td){
    const selectedRow = td.parentElement.parentElement;

    const editNama = prompt(`Ubah ${selectedRow.cells[1].innerHTML} menjadi ...`);
    const editNim = prompt(`Ubah ${selectedRow.cells[2].innerHTML} menjadi ...`);
   
   selectedRow.cells[1].innerHTML = editNama;
   selectedRow.cells[2].innerHTML = editNim; 
}

function updateData(formData){
    $(selectedRow).cells[1].html() = formData.val(nama);
    $(selectedRow).cells[2].html() = formData.val(nim);
}

function deleteData(){
    if(confirm("Beneran mau dihapus kah?")){
        $("#table tbody").on('click', '#del', function(){
            $(this).closest('tr').remove();
            return false;
        })
        resetForm();
    }
}
