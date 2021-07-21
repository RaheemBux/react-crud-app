class UserService{

    getAll(){
        return fetch('https://studentv-api.herokuapp.com/studentv/user/getAll');
    }
    view (id) {
        return fetch('https://studentv-api.herokuapp.com/studentv/user/view/'+id);
    }
}

export default UserService;