





const Registeruser = async (req, res) => {
    res.status(200).json({
        message: "User registered successfully",
        user: req.body,
    });
}







