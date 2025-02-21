const path = require('path')
const fs = require('fs')

const ApiController = {
    alllocations: async(req, res) => {
        try{
            const sourceFile = path.join(__dirname, '../traveldata/traveldata.json')
            fs.readFile(sourceFile, 'utf8', (err, data) => {
                if(err){
                    return res.json({ Error: "no Data found..."})
                }
                const jsondata = JSON.parse(data)

                return res.json({ Status: "Success", Result: jsondata })
            })
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = ApiController;