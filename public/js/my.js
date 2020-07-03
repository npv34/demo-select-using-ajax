$(document).ready(function () {
    function getAllCity() {
        $.ajax({
            url: 'http://localhost:8000/api/cities',
            type: 'GET',
            dataType: 'json',
            success: function (result) {
                console.log(result.LtsItem)
                $.each(result.LtsItem, function (k, v) {
                    $('#city').append($('<option>', {value: v.ID, text: v.Title}));
                });
            }
        })
    }

    getAllCity();

    $('#city').change(function () {
        $("#district option").remove();
        let id = $(this).val();
        $.ajax({
            url: 'http://localhost:8000/api/cities/' + id + '/district',
            type: 'GET',
            dataType: 'json',
            success: function (result) {
                $.each(result, function (k, v) {
                    $('#district').append($('<option>', {value: v.Title, text: v.Title}));
                });
            },
            error: function () {
                //handle errors
                alert('error...');
            }
        });
    });
})
