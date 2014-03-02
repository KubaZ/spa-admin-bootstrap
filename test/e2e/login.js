describe('Departments admin App', function() {

  describe('Departmets list view', function() {

    beforeEach(function() {
      browser().navigateTo('/login');
    });


    it('should display login view', function() {
      expect(input('user.name').val()).toBe('');
      expect(input('user.password').val()).toBe('');
    });
  });
});
