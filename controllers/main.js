const login = async (req, res) => {
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 99)
    res.status(200).json({
        msg: `Hello, John Doe`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    })
}

module.exports = {
    login, dashboard
}