const UserSchema = require("./user.schema");

const userResolvers = {
    Query: {
    users:  async () => {
        try{
        const users =await UserSchema.find(); 
        return users;
    }catch(err){
        console.log(err);
    }
    },
    user: async (_, {id}) =>{
        try{
        const user = UserSchema.findById(id);
        return user;
    }catch(err){
        console.log(err);
    }
    },
 },
 Mutation: {
    createUser: async (_, {name, password}) => {
const newUser = await UserSchema.create({name , password});
   return{
    data: newUser,
     status: 201,
    };
  },
 },
};


module.exports = userResolvers;