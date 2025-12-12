import KtuUser from "../models/ktumodels.js";



// data fetching controller

const getKtuData = async (req, res) => {

    let data = await KtuUser.find({});
    res.send(data)

}



// data creating controller

const createKtuData = async (req, res) => {
    // destructuring
    let { email, password } = req.body

    let data = await KtuUser.create({
        email,
        password

    })
    res.send(data);
}


export {
    getKtuData,
    createKtuData
};