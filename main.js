var i = 0;
            var txt = "Web Designer";

            
        function typeWriter() {
            if (i==txt.length) {
                i=0;                
            }
            if (i < txt.length) {
                
                document.getElementById("demo").innerText = txt.slice(0,i+1)+'_';
                i++;
                
                setTimeout(typeWriter, ((11-parseInt(document.getElementById("inp-speed").value))*27)+30);
                
            }
        }
        typeWriter()