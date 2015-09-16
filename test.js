        var counter = 0;
        document.getElementById("count").innerHTML = counter;
        function increase() {
                counter++;
                return false;
            }
            function myFunction() {
                if (document.getElementById("test").innerHTML === "##Test!##"){
                    document.getElementById("test").innerHTML = "##Example!##" ;
                }
                else {
                document.getElementById("test").innerHTML = "##Test!##" ;
                
                }
            }
        function printCounter(){
            document.getElementById("count").innerHTML = counter;
        }
