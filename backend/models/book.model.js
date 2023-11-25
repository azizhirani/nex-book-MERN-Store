const mongoose = require('mongoose');

const bookSchema =mongoose.Schema(
    {
        title:{
            type: 'string',
            required: true,
        },
        author:{
            type: 'string',
            required: true,
        },
        publishYear:{
            type:'number',
            required:true
    },
},
{
    timestamps:true,
}
);
module.exports = mongoose.model('Books', bookSchema);