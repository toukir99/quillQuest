/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
    const locals = {
      title: "quillQuest",
      description: "Free Note Taking App",
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
      });
  }
  
  
  /**
   * GET /
   * About 
  */
  exports.about = async (req, res) => {
    const locals = {
      title: "About - quillQuest",
      description: "Free NodeJS Notes App",
    }
    res.render('about', locals);
  }