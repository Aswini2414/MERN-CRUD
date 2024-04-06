const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { google } = require("googleapis");
dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const MY_EMAIL = process.env.MY_EMAIL;


const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oAuth2Client.setCredentials({
    access_token: process.env.ACCESS_TOKEN,
});

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: MY_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken:oAuth2Client.getAccessToken(),
    }
});

const sendData = async (req, res) => {
    const { email, tableData } = req.body;
    try {
        let message =(
          '<table style ="border 1px solid #333"' +
          "<thead" +
          "<th>Name</th>" +
          "<th>Phone Number</th>" +
          "<th>Email</th>" +
            "<th>Hobbies</th>" + "</thead>")
        
        for (const { i, name, phone, email, hobbies } of tableData) {
            message += (
                "<tr>" +
                "<td>" + name + "</td>" +
                "<td>" + phone + "</td>" +
                "<td>" + email + "</td>" +
                "<td>" + hobbies + "</td>" +
                "</tr>"
            );
        }
        message += "</table>"+"<h4>With Regards</h4>"+"<p>Tejaswini</p>";
        if (tableData && email) {
            const mailOptions = {
                from: MY_EMAIL,
                to: email,
                subject: "Sending User details",
                text:"Hi, I hope this mail finds well.",
                html: message,
            }
            transporter.sendMail(mailOptions, (error, info) =>{
                if(error) {
                    console.log("error", error);
                    res.status(400).json(error.message);
                }else{
                    res.status(200).json(info);
                }
            })
        }
    } catch (error) {
        res.status(400).json(error.message);
}
};

module.exports = sendData;
