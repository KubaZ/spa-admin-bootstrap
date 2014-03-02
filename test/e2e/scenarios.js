describe('spa admin App', function() {

  describe('Features view', function() {

    beforeEach(function() {
      browser().navigateTo('/');
    });


    it('should display list of awesome features', function() {
      expect(repeater('.awesome-things .thing').count()).toBe(3);
    });
  });
});
