// // $(document).ready(function () {
// //     $("#btn").click(function () {
// //         alert("This is an alert message!");
// //     });
// // });

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
    const cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.nama;
    const cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.nim;
    const cell3 = newRow.insertCell(2);
        cell3.innerHTML = `<a href="#" onClick='editData(this)'>Edit</a>
                           <a href="#" onClick='deleteData(this)' id='del'>Delete</a>
                          `;
}

function resetForm(){
    $("#nama").val('');
    $("#nim").val('');
    // selectedRow = null;
}

function editData(td){
    const selectedRow = td.parentElement.parentElement;
    $("#nama").val($(selectedRow.cells[0]).html());
    $("#nim").val($(selectedRow.cells[1]).html()); 
}

function updateData(formData){
    selectedRow.cells[0].html(formData.nama);
    selectedRow.cells[1].html(formData.nim);
}

function deleteData(){
    if(confirm("Beneran mau dihapus kah?")){
        $("#table tbody").on('click', '#del', function(){
            $(this).closest('tr').remove();
            return false;
        })
    }
}

