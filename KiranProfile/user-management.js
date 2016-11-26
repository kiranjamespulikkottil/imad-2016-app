$(document).ready(function () {

        $('#skills-content').hide();
        $('#education-content').hide();
        $('#achivements-content').hide();
        $('#profile-content').show();
        $('.content li').removeClass('clikked-tab');
        $('#profile').addClass('clikked-tab');


        $('#profile').click(function () {
            $('#skills-content').hide();
            $('#education-content').hide();
            $('#achivements-content').hide();
            $('#profile-content').show();
            $('.content li').removeClass('clikked-tab');
            $('#profile').addClass('clikked-tab');
        });
        $('#education').click(function () {
            $('#skills-content').hide();
            $('#achivements-content').hide();
            $('#profile-content').hide();
            $('#education-content').show();
            $('.content li').removeClass('clikked-tab');
            $('#education').addClass('clikked-tab');
        });
        $('#skills').click(function () {
            $('#education-content').hide();
            $('#achivements-content').hide();
            $('#profile-content').hide();
            $('#skills-content').show();
            $('.content li').removeClass('clikked-tab');
            $('#skills').addClass('clikked-tab');
        });
        $('#achivements').click(function () {
            $('#skills-content').hide();
            $('#education-content').hide();
            $('#profile-content').hide();
            $('#achivements-content').show();
            $('.content li').removeClass('clikked-tab');
            $('#achivements').addClass('clikked-tab');
        });
});
