var channelList = ["malukah", "bajheera", "lordmons", "freecodecamp", "gafallen"];
var channelName
var channelLink
var channelLogo
var streamContent
var channelId

$(document).ready(function() {
  $.each(channelList, function(i, val) {
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + val, function(st) {
      channelName = val;
      
        if(st.stream == null) {
          $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/' + channelName, function(ch) {
            channelId = ch.display_name;
            channelLogo = ch.logo;
            channelLink = ch.streamContent;
            streamContent = ch.status;
            
            if(ch.status == '404') {
              $('#twitch').append('<ul class="row text-left">' + ch.message + '</ul>');
            } 
        
            else $('#offline').append('<ul class="row text-left"><img class="image" src=' + channelLogo + '><a href=' + channelLink + 'target="_blank">' + channelId + '</a>  OFFLINE</ul>');
          })
        
    }
      
     else $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/' + channelName, function(ch) {
            channelId = ch.display_name;
            channelLogo = ch.logo;
            channelLink = ch.streamContent;
            streamContent = ch.status;
            
            $('#online').append('<ul class="row text-left"><img class="image" src=' + channelLogo + '><a href=' + channelLink + 'target="_blank">' + channelId + '</a>  ONLINE Streaming: ' + streamContent + '</ul>');
          }) 
  })
  
})
  //funções definidas
  $('#all').click(All);
  $('#on').click(Online);
  $('#off').click(Offline);
  
})
//quando clica em tudo
function All() {
  $('#online').show();
  $('#offline').show();
  $('#twitch').show();
}
//quando clica em online
function Online() {
  $('#online').show();
  $('#offline').hide();
  $('#twitch').hide();
}
//quando clica em offline
function Offline() {
  $('#online').hide();
  $('#offline').show();
  $('#twitch').hide();
}
