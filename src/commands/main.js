import { Telegraf } from "telegraf";
import token from "../config/config.js";
import admins from "../defaults/index.js";

const bot = new Telegraf(token);

const BOT = async (req, res, next) => {
    try {
        const { phone_number, client_name } = req?.body;

        if (!phone_number) {
            return res
                .status(404)
                .json({
                    status: 404,
                    message: 'Phone number required!',
                    data: false
                });
        };

        if (!client_name) {
            return res
                .status(404)
                .json({
                    status: 404,
                    message: 'Name required!',
                    data: false
                });
        };

        // const regexPhoneNumber = /^998[389][012345789][0-9]{7}$/;

        // if (!(regexPhoneNumber.test(phone_number))) {
        //     return res.status(403).json({
        //         message: "invalid phone number",
        //         data: false
        //     });
        // };

        let ids = admins.tg_id;

        const msgtext = `
            📥New client\n👨‍💻From: ${client_name}\n📞Phone Number: ${phone_number}
        `;

        for (let i of ids) {
            bot.telegram.sendMessage(i, msgtext)
        };

        return res
            .status(200)
            .json({
                status: 200,
                message: 'successully sended via telegram bot',
                data: {
                    client_name,
                    phone_number: `+${phone_number}`
                }
            });

    } catch (error) {
        console.log(error.message);
        return next(error);
    }
}

export default {
    BOT
};