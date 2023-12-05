function skillsMember() {
    return {
        restrict: "E",
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillMemberController',
        contollerAs: 'vm',
        bindToController: true,
        scope: {
            member: "="
        }
    };
}