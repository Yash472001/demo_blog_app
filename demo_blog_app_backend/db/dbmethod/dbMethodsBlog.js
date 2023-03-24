const BlogSchema = require("../schema/blogschema")

async function createBlog(collectiondata) {
    const data = await BlogSchema.create(collectiondata);
    return data;
}

async function findBlogById(id) {
    const data = await BlogSchema.findById(id);
    return data;
}

async function getAllBlogs() {
    const data = await BlogSchema.find({});
    return data;
}

async function updateBlog(id,collectiondata) {
    const {title,descriptions,category,slug} = collectiondata;
    const data = await BlogSchema.findById(id);
    data.title = title;
    data.descriptions = descriptions;
    data.category = category;
    data.slug = slug;
    data.save();
    return data;
}

async function deleteBlog(id) {
    const data = await BlogSchema.findByIdAndDelete(id);
    return data;
}

module.exports = {createBlog,getAllBlogs,updateBlog,deleteBlog,findBlogById}
