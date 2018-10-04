function output() {
    const html = {
        div: '<div>',
        paragraph: '<p>',
        closeP: '</p>',
        closeDiv: '</div>'

    };

    const string = html['div'] + html['paragraph'] + 'A string of text' + html['closeP'] + html['closeDive'];

    if (document.getElementById('output')) {
        //If element exists
        document.getElementById('output').innerHTML(string);
    } else {
        //Simple return
        return string;
    }

    //
}





