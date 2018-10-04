// get the average color of two hex colors.
function average(){
    //Get Colors
    const color1 = document.getElementById('Number1').value;
    const color2 = document.getElementById('Number2').value;

    //Work with a return
    const avg  = function(a,b){ return (a+b)/2; };
    const t16  = function(c){ return parseInt((''+c).replace('#',''),16) };
    const hex  = function(c){ const t = (c>>0).toString(16);

            return t.length === 2 ? t : '0' + t },

        hex1 = t16(color1),
        hex2 = t16(color2),

        r    = function(hex){ return hex >> 16 & 0xFF},
        g    = function(hex){ return hex >> 8 & 0xFF},
        b    = function(hex){ return hex & 0xFF},

        //Output the answer

        output  = '#' + hex(avg(r(hex1),r(hex2)))
            + hex(avg(g(hex1),g(hex2)))
            + hex(avg(b(hex1),b(hex2)));

    //Return the answer
    return output;
}