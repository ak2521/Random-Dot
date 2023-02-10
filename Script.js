    function random_dot()
    { 
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        var canvas = document.getElementById('dot');
        var atx = canvas.getContext('2d');
        var r=Math.floor(Math.random() * 20);
        atx.fillStyle = bgColor; 
        atx.beginPath();
        atx.arc(Math.random() * 1500,Math.random() * 800,r,0,Math.PI*2,true);
        atx.closePath();
        atx.fill();
    }
