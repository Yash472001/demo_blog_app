const { Router } = require("express");
const { getAllBlogs, createBlog, updateBlog, findBlogById, deleteBlog } = require("../db/dbmethod/dbMethodsBlog");
const { createCollection,deleteCollection,getAllCollection,updateCollection ,findUserById} = require("../db/dbmethod/dbMethodsUser");

const collectionRouter = Router();

// Create new collection
collectionRouter.post("/api/createblog",async(req,res) => {
    try {
        const {title,descriptions,category,slug} = req.body;

        let resMsg = {status:"OK",msg:"Collection created successfully!!!"};

        if (!title || !descriptions || !category || !slug) {
            resMsg = {status:"NOTOK",msg:"Data is NOT working"};
            return res.send(resMsg);
        }
        
        const data = await createBlog({title,descriptions,category,slug});
        res.send({...resMsg,data:[data]});
    } catch (error) {
        console.error(error)
        res.status(500).send(`Data is not accepted`);
    }
})

//Read ALL the collection 
collectionRouter.get("/api/blogs",async(req,res) => {
    try {
        const data = await getAllBlogs();
        res.send({data});
    } catch (error) {
        console.error(error)
        res.status(500).send(`Data is not valid`);
    }
})

//Update collection by Id
collectionRouter.put("/api/blogs/:id",async(req,res) => {
    try {

        const {id} = req.params;
        const {title,descriptions,category,slug} = req.body;
        let resMsg = {status:"OK",msg:"Data is working"};
        if(!id || !title || !descriptions || !category || !slug){
            resMsg = {status:"NOTOK",msg:"Data is NOT correct"};
            return res.send(resMsg);
        }

        // If exist or not
        const existOrNot = await findBlogById(id);
        if(!existOrNot){
            resMsg = {status:"NOTOK",msg:"Data is NOT correct"};
            return res.send(resMsg);
        }

        const data = await updateBlog(id,{title,descriptions,category,slug});
        console.log(data);
        res.send({...resMsg,msg:"Uploaded Successfully!!!",data});
    } catch (error) {
        console.error(error)
        res.status(500).send(`Data is not valid`);
    }
})

//Delete collection by Id
collectionRouter.delete("/api/blogs/:id",async(req,res) => {
    try {
        const {id} = req.params;
        let resMsg = {status:"OK"};
        if(!id){
            resMsg = {status:"NOTOK",msg:"Incorrect data"};
            return res.send(resMsg);
        }

        // If exist or not
        const existOrNot = await findBlogById(id);
        if(!existOrNot){
            resMsg = {status:"NOTOK",msg:"Data is not existed"};
            return res.send(resMsg);
        }

        const data = await deleteBlog(id);
        console.log("data : ",data);
        res.send({...resMsg,msg:"Deleted Successfully!!!"});
    } catch (error) {
        console.error(error)
        res.status(500).send(`Data is not valid`);
    }
})

module.exports = collectionRouter;