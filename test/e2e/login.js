describe('spa admin App', function() {

  describe('Login view', function() {

    beforeEach(function() {
      browser().navigateTo('/#/login');
    });


    it('should display login view', function() {
      input('user.name').enter('name');
      input('user.password').enter('pass');
      expect(input('user.name').val()).toBe('name');
      expect(input('user.password').val()).toBe('pass');
    });
  });
});
