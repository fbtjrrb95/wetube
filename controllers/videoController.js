export const home = (req,res)=> res.render('home', {pageTitle : 'Home', potato : 1234});
export const search = (req,res)=> res.render('search', {pageTitle : 'Search'});
// export const videos = (req,res) => res.send('Videos');
// export const upload = (req,res) => res.send('Upload');
export const videoDetail = (req,res) => res.render('videoDetail', {pageTitle: 'VideoDetail'});
export const editVideo = (req,res) => res.render('editVideo', {pageTitle: 'EditVideo'});
export const deleteVideo = (req,res) => res.render('deleteVideo', {pageTitle: 'DeleteVideo'});
