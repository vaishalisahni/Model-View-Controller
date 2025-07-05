const User = require('../models/user');

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers); // send all users in JSON format
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ status: 'failed', message: 'User not found' }); // status 404 - Not Found
    }
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }); // new: true will return the updated document

    return res.status(200).json({ status: 'success update', updatedUser });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ status: 'success delete' });
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    // console.log(body); // to see the data sent from the frontend

    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ status: 'failed', message: 'Please provide all required fields' }); // status 400 - Bad Request
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    })

    // console.log(result);

    return res.status(201).json({ status: 'success' , id: result._id }); // status 201 - Created
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleCreateNewUser,
    handleDeleteUserById
}
