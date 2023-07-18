function skillmember(){
    return{
        restrict: 'E',
        templateUrl: 'app/views/skillmember.html',
        controller: 'skillmemberCtrl',
        controllerAs: 'skillmember',
        bindToController: true,
        scope: {
            member: '='}
    };
}