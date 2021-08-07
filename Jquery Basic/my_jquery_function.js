$(document).ready(function(){
    $("p.intro").click(function() { // intro class 
        $(this).hide(1000);
    });

    $("p.dbcl").dblclick(function(){
        $("div.dbcl-div").show(1000);
    });

    $("p.jerry").mouseenter(function(){
        $(this).hide();
    });

    $("p.jerry").mouseleave(function(){
        $(this).show();
    });

    $("div.color-box1").click(function(){
       $(this).animate( {
           left:'+=100px',
           width: '+=10px',}
           ,"slow" );
       
    })

    
    $("input#name,input#pswd").focus(function(){
        $(this).css("background-color","darkcyan");
    });
    $("input#name,input#pswd").blur(function(){
        $(this).css("background-color","white");
      });

    $("button#ptoggle").click(function(){
        $("p.tog").toggle(1000);
    });

    $("button#dtoggle").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeOut(1000).fadeIn(1000); // chaining 
    });

    $("#btn1").click(function(){
        $("#demo").text($("label.form-1").text());
       
    });

    $("#btn2").click(function(){
        $("#demo").text($(".intro-div.form-1").html());
       
    });

    $("#value-input").click(function(){
        var txt =" ";
        txt = txt + "Name:  " + ($("input#Name").val()) ;
        txt = txt + " Email : "+ ($("input#Email").val());
        //input#Email
        $("#demo").text(txt); 
    });

    $("#attr-value").click(function(){
        $("#demo").text($("#my-img1").attr("href"));  // a | #my-img1
    })

    $("#n1").click(function(){
        $("div.noclass").addClass("intro-div");
      
    });

    $("#n2").click(function(){
        $("div.noclass").removeClass("intro-div");
      
    });

    $("#n3").click(function(){
        $("p.tom").append($("#enter-value").val());
      
    });

    $("#n4").click(function(){
        $("p.tom").prepend($("#enter-value").val());
      
    });

    $("#n5").click(function(){
        $("p.tom").empty();
      
    });

    $("#get-external-content-btn1").click(function(){
       $("p#external1").load("external_test.txt")
    });

    $("#bar1-cool").click(function(){
        alert("you pressed ");
        $("p#bar1-cool-p").append($("#enter-value1").val());
    });

    $("#your-name1").keyup (function(){
        var name = $("#your-name1").val();
        $.post ("suggestion.php",{
            suggestion: name
        },function(data,status){
            $("#msg-post1").html(data);
            // alert(status);
        })
    });

    

      $("#get-data1").click(function(){
          $.get("demo_test_post.txt",function(data,status){
              $("#msg-post1").html(data);
              alert(status);
          })
      });



});