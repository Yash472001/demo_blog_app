const UserSchema = require("../schema/userschema");
const BlogSchema = require("../schema/blogschema")

async function createCollection(collectiondata) {
    const data = await UserSchema.create(collectiondata);
    return data;
}

async function findUserById(id) {
    const data = await UserSchema.findById(id);
    return data;
}

async function getAllCollection() {
    const data = await UserSchema.find({});
    return data;
}

async function getCollectionByName(name) {
    const data = await UserSchema.find({name});
    return data;
}

async function updateCollection(id,collectiondata) {
    const {name,address} = collectiondata;
    const data = await UserSchema.findById(id);
    data.name = name;
    data.address = address;
    data.save();
    return data;
}

async function deleteCollection(id) {
    const data = await UserSchema.findByIdAndDelete(id);
    return data;
}

module.exports = {createCollection,getAllCollection,getCollectionByName,updateCollection,deleteCollection,findUserById}
