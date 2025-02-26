/**      
 * Get / 
 * Homepage
*/

exports.homepage = async (req, res) => {
    const locals = {
      title: "NodeJs Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('index', {
      locals,
      layout: '../views/layouts/front-page'
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

/**      
 * Get / 
 * Features
*/

exports.features = async (req, res) => {
    const locals = {
        title: 'Features - NotesApp',
        description: 'Free Notes App To Use',
    }

    res.render('features', locals);
}

/**      
 * Get / 
 * FAQs
*/
exports.faqs = async (req, res) => {
    const locals = {
        title: 'FAQs - NotesApp',
        description: 'Free Notes App To Use',
    }

    res.render('faqs', locals);
}