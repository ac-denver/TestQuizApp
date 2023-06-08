function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68X34aNWgQk":
        Script1();
        break;
      case "6PMyLyLaCXD":
        Script2();
        break;
      case "5lFEgw5TrJk":
        Script3();
        break;
      case "5dGSVwPQjFX":
        Script4();
        break;
      case "6LQCREefukA":
        Script5();
        break;
      case "5rn1ikrsqCP":
        Script6();
        break;
      case "6gvLtObDuBc":
        Script7();
        break;
      case "5piH3jvxRAG":
        Script8();
        break;
      case "6m5SZdETK9w":
        Script9();
        break;
      case "5ZJogOz5VgR":
        Script10();
        break;
      case "5YV1hAC6dFp":
        Script11();
        break;
      case "6IsIP8Y9Vx2":
        Script12();
        break;
      case "5sTwa7gXcrL":
        Script13();
        break;
      case "6aUEcHR8T4n":
        Script14();
        break;
      case "6nVTFf3tB50":
        Script15();
        break;
      case "5gVOPnuDyEi":
        Script16();
        break;
      case "6mJIKFCNqKh":
        Script17();
        break;
      case "6M4rMlW54H0":
        Script18();
        break;
      case "6avzc5cHmya":
        Script19();
        break;
      case "5qFcX7sWndK":
        Script20();
        break;
      case "5rBv1a9dfS7":
        Script21();
        break;
      case "6jXMfBvP4gS":
        Script22();
        break;
      case "5XLx1M9gEVD":
        Script23();
        break;
      case "5rlVmqs7aYG":
        Script24();
        break;
      case "6DyKAA3WGnq":
        Script25();
        break;
  }
}

function Script1()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script2()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script3()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script4()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script5()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script6()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script7()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script8()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script9()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script10()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script11()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script12()
{
  if (SCORM_CallLMSGetValue("cmi.core.lesson_status")!=='completed')
{
var player = GetPlayer();
var vTotalPoints = 0;
vTotalPoints = player.GetVar("CC_Points");
SCORM_CallLMSSetValue("TN_Points", vTotalPoints);
}
}

function Script13()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script14()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script15()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script16()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script17()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script18()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script19()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script20()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script21()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script22()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script23()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("T_SL_Minutes");
var seconds = player.GetVar("T_SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("T_Display",display);
    player.SetVar("T_SL_Minutes",mm);
    player.SetVar("T_SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("T_Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_T_Expired","True");
        player.SetVar("T_Display","00:00");
    }
}, 1000);
}

function Script24()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

function Script25()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume(1);//unmute
}

