$(document).ready(function() {
    $('#refCaptcha').click(function() {
        $('#capimage').attr('src', captchaUrl + '?t=' + new Date().getTime());
    });

    $('#Button2').click(function() {
        $('#txtRollno').val('');
        $('#schoolNo').val('');
        $('#admitCardId').val('');
        $('#DateDOB').val('');
        $('#txtcaptcha').val('');
        $('#capimage').attr('src', captchaUrl + '?t=' + new Date().getTime());
    });
});
