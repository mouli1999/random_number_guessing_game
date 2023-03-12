 var text = "";
        document.getElementById("btn").onclick= function(){
              text = document.getElementById("box").value ;
              var x = Math.floor((Math.random() * 5) + 1);
              if (x==text) {
                alert("congratulations!!");
              } else {
                alert("better luck next time");
              };
            console.log(x);

        }

