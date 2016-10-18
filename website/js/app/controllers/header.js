$(window).scroll(function(){
    if ($(window).scrollTop()>100) {
        $('#header').addClass('fixed');
    } else{
        $('#header').removeClass('fixed');
    }

    if ($(window).width()<=860 && $('.menu ul:visible')){
        $('.menu ul').slideUp();
    }
});

angular.module('app').controller('header', ['$scope', function ($scope) {

}]).directive('scrollToItem', function() {
    return {
        restrict: 'A',
        scope: {
            scrollTo: "@",
            offset: '@'
        },
        link: function(scope, $elm,attr) {

            $elm.on('click', function() {
                $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top - scope.offset }, "slow");
            });
        }
    }});
