
/*this.WelcomePage = function (driver) {   
    WelcomePage.loginButton.hover();
    }*/

    //this.WelcomePage = $page("Welcome page", {
    //    loginButton: " .button-login"
    // });
    //var welcomePage = new WelcomePage(driver);
   
    

    //this.MyNotesPage = function (driver) {
        //GalenPages.extendPage(this, driver, {
      this.MyNotesPage = $page("MyNotesPage", {
          submitButton: " .btn-primary" // id local da pagina
        });
      
       
    var myNotesPage = new MyNotesPage(driver);
    myNotesPage.submitButton.hover();
    //myNotesPage.hoverbtn_primary();

    

