const InvoiceSchema = require ("./invoices.schema");


const invoiceResolvers = {
    Query: {
    invoices:  async () => {
        try{
        const invoices =await InvoiceSchema.find().populate("creator"); 
        return invoices;
        }catch(err){
            console.log(err);
        }
    },
    invoice: async (_, {id}) =>{
        try{
        const invoice = InvoiceSchema.findById(id);
        return invoice;
    }catch(err){
        console.log(err);
    }
    },
 },
 Mutation: {
    createInvoice: async (_, {name, description, creator_id }) => {
const newInvoice = await InvoiceSchema.create({name , description, creator:creator_id});
   return{
    data: newInvoice,
     status: 201,
    };
  },
 },
};


module.exports = invoiceResolvers;