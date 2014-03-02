describe('Departments admin App', function() {

  describe('Departmets list view', function() {

    beforeEach(function() {
      browser().navigateTo('/');
    });


    it('should display list of awesome things', function() {
      expect(repeater('.awesome-things .thing').count()).toBe(3);
    });
  });
});
