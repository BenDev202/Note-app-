/**      
 * Get / 
 * Homepage
*/

exports.homepage = async (req, res) => {
    const locals = {
        title: 'NotesApp',
        description: 'Free Notes App To Use',
    }

    res.render('index', {
        locals,
        layout: './views/layouts/front-page'
    });
}

/**      
 * Get / 
 * About
*/

exports.about = async (req, res) => {
    const locals = {
        title: 'About - NotesApp',
        description: 'Free Notes App To Use',
    }

    res.render('about', locals);
}