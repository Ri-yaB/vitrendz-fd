(function(){
    var width=320;
    var height =0;
    var streaming=false;
    var video=null;
    var cavas=null;
    var photo=null;
    var startbutton=null;
    
    function startup(){
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
        photo = document.getElementById('photo');
        startbutton = document.getElementById('startbutton');

        navigator.mediaDevices.getUserMedia({
            video: true,
            audio:false
        }).then(function(stream){
            video.srcObject = stream;
            video.play();
        }).catch(function(err){
            console.log("An error:"+err);
        });
        video.addEventListener('canplay',function(ev){
            if(!streaming){
                height=video.videoHeight / (video.videowidth / width);

                if(isNaN(height)){
                    height = width / (4/3);
                }
                video.setAttribute('width',width);
                video.setAttribute('height',height);
                canvas.setAttribute('width',width);
                canvas.setAttribute('height',height);
                streaming=true;
            }
        }, false);
        startbutton.addEventListener('click',function(ev){
            takepicture();
            ev.preventDefault();
        }, false);
        clearphoto();
    }
    function clearphoto(){
        var context = canvas.getContext('2d');
        context.fillstyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);
        var data = canvas.toDataURL ('image/png');
        photo.setAttribute('src',data);
    }
    function takepicture(){
        var context = canvas.getContext('2d');
        if(width && height){
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);
            var data = canvas.toDataURL('image/png');
            photo.setAttribute('src',data);
        }
        else{
            clearphoto();
        }
    }
    window.addEventListener('load', startup, false);
})();
const forms = document.querySelector(".forms");
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password =>{
            if(password.type === "password"){
                password.type ="text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type ="password";
            eyeIcon.classList.replace("bx-show","bx-hide");
        })
    })
})
links.forEach(link => {
    link.addEventListener("click", e=>{
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})
/*let em = document.forms['Login']['email'].value; 
let atpos = em.indexOf("@");
let domain = em.split("@")[1]; 

if (em == null || em == "") {
    alert("Email can not be empty.");
    document.getElementById('e').focus();
    return false;
} 
else if (atpos < 1 || domain != "vitstudent.ac.in"){ 
    alert("Not a valid VIT e-mail address");
    document.getElementById('e').focus();
    return false;
} */