// import {videos} from "../db";
import routes from "../routes";
import Video from "../models/Video";
export const home = async (req,res)=> {
    const videos = await Video.find({});
    res.render('home', {pageTitle : 'Home', videos});
}
export const search = (req,res)=> {
    try{
        const {query:{term: searchingBy}} = req;
    res.render('search', {pageTitle : 'Search', searchingBy, videos});

    }catch(error){
        console.log(error);
        res.render('search', {pageTitle : 'Search', searchingBy, videos:[]});
    }
        // = const searchingBy = req.query.term;
}
// export const videos = (req,res) => res.send('Videos');
export const getUpload = (req,res) => res.render('upload',{pageTitle : "Upload"});
export const postUpload = async (req,res) => {
    const {
        body : {title,description},
        file :  {path}
    }= req;
    // console.log(body);
    // console.log(file);
    const newVideo = await Video.create({
        fileUrl : path,
        title,
        description
    });
    console.log(newVideo)
    // TODO: Upload and save video
    // res.render('upload',{pageTitle : "Upload"});
    res.redirect(routes.videoDetail(newVideo.id));
}

export const videoDetail = (req,res) => res.render('videoDetail', {pageTitle: 'VideoDetail'});
export const editVideo = (req,res) => res.render('editVideo', {pageTitle: 'Edit Video'});
export const deleteVideo = (req,res) => res.render('deleteVideo', {pageTitle: 'Delete Video'});
