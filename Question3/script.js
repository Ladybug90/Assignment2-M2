$(document).ready(function () {
    $('#employeeTable').DataTable({
        "ajax": {
            "url": "employees.json",
            "dataSrc": "employees" 
        },
        "columns": [
            { "data": "id" },
            { "data": "firstName" },
            { "data": "lastName" },
            { 
                "data": "email",
                "defaultContent": "<i>No email provided</i>" 
            },
            { "data": "department" },
            { 
                "data": "salary",
                "render": function(data) {
                    return '$' + data.toLocaleString();
                }
            }
        ],
        // Assignment Requirements: Native Sorting, Searching, and Pagination
        "paging": true,
        "searching": true,
        "ordering": true,
        "pageLength": 10
    });
});