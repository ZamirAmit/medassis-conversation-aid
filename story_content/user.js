function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eFIHAGM6sQ":
        Script1();
        break;
      case "677ML0HZqG5":
        Script2();
        break;
  }
}

function Script1()
{
  
/* This code is for MALE customer: */
var player = GetPlayer();
var OperatorName = player.GetVar('OperatorName');
var CompanyName = player.GetVar('CompanyName');
var CustomerName = player.GetVar('CustomerName');
var greetings = "שלום " + CustomerName + ", שמי " + OperatorName + " ואני אשמח לעזור לך. ";
var intro_male = 'הפוליסה שלך מבוססת על החזר הוצאות, כלומר אתה יכול לפנות לכל מוסד רפואי שנוח ונגיש לך, לקבל טיפול רפואי ולשלם בעבורו. ';
var save_receipt_male = ' תשמור בבקשה את הקבלה ואת הדוחות הרפואיים על מנת להגיש תביעה לחברת ' + + CompanyName + ' בשביל להגיש תביעה להחזר שייבדק בדיעבד בהתאם לתנאי הפוליסה.'
var Conversation = greetings + intro_male + save_receipt_male;
player.SetVar('Conversation', Conversation);

}

function Script2()
{
  
/* This code is for FEMALE customer: */
var player = GetPlayer();
var OperatorName = player.GetVar('OperatorName');
var CompanyName = player.GetVar('CompanyName');
var CustomerName = player.GetVar('CustomerName');
var greetings = "שלום " + CustomerName + ", שמי " + OperatorName + " ואני אשמח לעזור לך. ";
var intro_female = 'הפוליסה שלך מבוססת על החזר הוצאות, כלומר את יכולה לפנות לכל מוסד רפואי שנוח ונגיש לך, לקבל טיפול רפואי ולשלם בעבורו. ';
var save_receipt_female = ' תשמרי בבקשה את הקבלה ואת הדוחות הרפואיים על מנת להגיש תביעה לחברת' + CompanyName + ' בשביל להגיש תביעה להחזר שייבדק בדיעבד בהתאם לתנאי הפוליסה.'
var Conversation = greetings + intro_female + save_receipt_female;
player.SetVar('Conversation', Conversation);
}

