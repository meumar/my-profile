export const state = () => ({
    users:[]
});
export const getters = {
    getUsers: state => state.users,
};
export const mutations = {
    setUsers: (state, user)=>{
        state.users = user;
    },
};
export const actions ={
    fetchusers: async(context) => {
        try{
            context.commit('users/setUsers', null, {root: true});
            const req = {
                method: "GET"
            };
            let response = await fetch("https://jsonplaceholder.typicode.com/users", req).then(response => response.json())
            .then(json => context.commit('users/setUsers', json, {root:true}));
        }
        catch(err){
            console.log(err);
        }
    }
};
export default {
    state,
    getters,
    mutations,
    actions
}