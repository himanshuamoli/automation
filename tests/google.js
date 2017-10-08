module.exports = {
  'Demo test Ts widget' : function (browser) {
    var Excel = require('exceljs');
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile('./tests/inputs.xlsx').then(function(){
      var worksheet = workbook.getWorksheet(1);
      browser
      .url('http://cosmatt-staging.herokuapp.com')
      .waitForElementVisible('.widget-login', 30000)
      .setValue('input[name=username]', 'qa101')
      .setValue('input[name=password]', 'Compro11')
      .click('.submit-btn')
      .waitForElementVisible('.course-widget', 30000)
      .click('button[type=submit]')
      .useXpath()
      .waitForElementPresent("//a[@data-target='#sidebar-Chapter_3_Servo_Motor_Selection']", 30000)
      .pause(1000)
      .getAttribute("//a[@data-target='#sidebar-Chapter_3_Servo_Motor_Selection']", 'aria-expanded', function(result){
        try{
          if(result.value == 'false'){
            this.getLocationInView("//a[@data-target='#sidebar-Chapter_3_Servo_Motor_Selection']")
            .click("//a[@data-target='#sidebar-Chapter_3_Servo_Motor_Selection']")

          }
          //click("//a[@data-target='#sidebar-Chapter_3_Servo_Motor_Selection']")
        }catch(error){

        }
      })
      .waitForElementVisible("//li[@id='Chapter_3_Servo_Motor_Selection']/ul/li[5]", 30000)
      .click("//li[@id='Chapter_3_Servo_Motor_Selection']/ul/li[5]")
      .useCss()
      .waitForElementVisible('.tsCruveContainer', 30000)
      .getLocationInView("a[href='#collapseTwo1']")
      .click("a[href='#collapseTwo1']")
      .useXpath()
      .clearValue("//div[@id='tsPointsPanelContainer']/div[2]/div[2]//input")
      .setValue("//div[@id='tsPointsPanelContainer']/div[2]/div[2]//input", worksheet.getCell('C2').value)
      .clearValue("//div[@id='tsPointsPanelContainer']/div[3]/div[2]//input")
      .setValue("//div[@id='tsPointsPanelContainer']/div[3]/div[2]//input", '11')
      .clearValue("//div[@id='tsPointsPanelContainer']/div[4]/div[2]//input")
      .setValue("//div[@id='tsPointsPanelContainer']/div[4]/div[2]//input", '12')
      .clearValue("//div[@id='tsPointsPanelContainer']/div[5]/div[2]//input")
      .setValue("//div[@id='tsPointsPanelContainer']/div[5]/div[2]//input", '13')
      .clearValue("//div[@id='tsPointsPanelContainer']/div[6]/div[2]//input")
      .setValue("//div[@id='tsPointsPanelContainer']/div[6]/div[2]//input", '14')
      .waitForElementVisible('gehu', 30000)
      .end();
    });
    
  }
};