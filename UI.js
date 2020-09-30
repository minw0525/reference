$(window).on('beforeunload', function() {
  

});

window.onresize = function(event)
{
document.location.reload(true);
}
;
$(window).width();


window.onload = function() { //실행될 코드 }
   

    if ($(window).width() > 1450){
        document.getElementById('screendetect').style.display = 'none'
        document.getElementById('warn').style.display = 'none'
        document.getElementById('screenlogo').style.display = 'none'
    }

    var screenlogo = document.getElementById('screenlogo')

    
    screenlogo.style.marginLeft= window.innerWidth/2 - $("#screenlogo").width()/2 + 'px';
    screenlogo.style.marginTop= window.innerHeight/2 - $("#screenlogo").height()/1.5 + 'px';

    var warn = document.getElementById('warn')
    warn.style.marginLeft= window.innerWidth/2 - $("#warn").width()/2 + 'px';
    warn.style.marginTop= window.innerHeight - $("#warn").height()*3 + 'px';

    document.getElementById('loading').style.display = 'none'
    var right_archive_page = document.getElementById('right_archive_page')
    right_archive_page.style.marginLeft= $("#archive").margin().left -  $("#hanguelggol").margin().left  +"px";   
    right_archive_page.style.marginTop=$("#archive").margin().top+ $("#archive").height()*3 + "px";  
    right_archive_page.style.height= window.innerHeight - $("#right_archive_page").margin().top + "px"; 
    right_archive_page.style.width = window.innerWidth - $("#archive").margin().left + "px";  

    var left_archive_page = document.getElementById('left_archive_page')
    left_archive_page.style.marginTop= $("#archive").margin().top+ $("#archive").height()*3 + "px";  
    left_archive_page.style.width = $("#archive").margin().left - $("#hanguelggol").margin().left  + "px";  
    left_archive_page.style.height= window.innerHeight - $("#archive").margin().top + "px";  
    left_archive_page.style.marginLeft= $("#hanguelggol").margin().left  +"px";

    var workshop_page_clip = document.getElementById('workshop_page_clip')
    workshop_page_clip.style.marginTop= $("#workshop").margin().top+ $("#workshop").height()*3 + "px";  
    workshop_page_clip.style.marginLeft= $("#workshop").margin().left+ "px";
    workshop_page_clip.style.width =  0.6*window.innerWidth+ "px";  
    workshop_page_clip.style.height= window.innerHeight - $("#workshop").margin().top + "px"; 

    
    var fontlist = document.getElementById('fontlist')
    fontlist.style.width= $("#archive").margin().left - $("#workshop").margin().left  - $("#workshop").width()+ "px";  
    

    var horizental = document.getElementById('horizental')
    horizental.style.width = $("#right_archive_page").width()+ "px";
    horizental.style.marginLeft = $("#archive").margin().left + "px";
    // fontdesc.style.bottom = window.innerHeight - $("#right_archive_page").margin().top - $("#fontlist").height() +"px";
    
    var imgcon = document.getElementById('imgcon')
    imgcon.style.width = $("#workshop_page_clip").width()*0.6+ "px";


    var imgdesc = document.getElementById('imgdesc')
    imgdesc.style.width =  $("#workshop_page_clip").width()*0.4+ "px";
    imgdesc.style.left =  $("#imgcon").width()+ $("#workshop_page_clip").margin().left +20+ 'px';
    // var showroom = document.getElementById('showroom')
    // showroom.style.height = $("#showroom").width() + 'px'

    var logop = document.getElementsByClassName("logopiece")
    for( var i = 0; i < logop.length; i++ ){

        logop[i].style.width = window.innerHeight*0.5+"px";
        // console.log(window.innerWidth)
        logop[i].style.left =  window.innerWidth/2 - $("#p1").width()/1.8 + "px";
        logop[i].style.top =  window.innerHeight/2 - $("#p1").height()/1.5 + "px";
        // logop[i].scrollTop=navarray[i].scrollHeight;
        // logop[i].style.overflowY = "hidden";
        // logop[i].style.fontSize = $("#rightsquare").height()/6*1.667+"px";
    }

    var desc = document.getElementById('desc')
    desc.style.width = window.innerWidth*0.25+"px";
    desc.style.left = $("#hanguelggol").margin().left  +"px";
    // desc.style.top =  window.innerHeight - $("#desc").height()*1.8 + "px";
    desc.style.top =  $("#archive").margin().top+ $("#archive").height()*3 + "px";  


    var video = document.getElementById('video')
    video.style.height = window.innerHeight*0.5+"px";


    var farray = document.querySelectorAll('.font_button');
	farray.forEach(function(e) {

      e.addEventListener('mouseover', function() {
       
        this.style.textDecoration = "underline";

      })

       e.addEventListener('mouseleave', function() {
       
        this.style.textDecoration = "none";

      })

      e.addEventListener('click', function() {
       
        for(var i =0 ; i<farray.length; i++){
        	farray[i].style.color="black";
        }

        this.style.color = "blue";

      })
    });

    // var hh = $('#downmouse').height()/2
    // var ww = $('#downmouse').width()/2
    // document.getElementById('imgcon').addEventListener('mouseover', function(e) {
    //     console.log(e.pageX)
    //     console.log(e.pageY)
    //     $('#downmouse').css({
    //         left:  e.pageX-ww + 'px',
    //         top:   e.pageY- hh+'px',
            
    //      });
    // })
    // $('#imgcon').bind('mousemove', function(e){
    //     
     
    // });

   

};
