const express = require('express');
const router = express.Router();

const { handleGetAllUsers, handleGetUserById , handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} =require( '../controllers/user');

// router.use(express.urlencoded({ extended: false }));

router.route('/')
    .get( handleGetAllUsers)
    
    .post(handleCreateNewUser);

router.route('/:id')
    .get(handleGetUserById)

    .patch(handleUpdateUserById)

    .delete(handleDeleteUserById);

module.exports = router;