import { Telegraf } from "telegraf";
import token from "../config/config.js";
import admins from "../defaults/index.js";

const bot = new Telegraf(token);

const BOT = async (req, res, next) => {
  try {
    const { name, phoneNumber, email, isQuick, comment, privacy } = req?.body;

    const regexPhoneNumber = /^998[389][012345789][0-9]{7}$/;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!phoneNumber) {
      return res.status(404).json({
        status: 404,
        message: "Phone number required!",
        data: false,
      });
    }

    if (!name) {
      return res.status(404).json({
        status: 404,
        message: "Name required!",
        data: false,
      });
    }

    let ids = admins.channel_id;

    const msgtext = `
    📝 Имя: ${name}
    📞 Номер телефона: ${phoneNumber}
    📧 Email: ${email ? email : ""}
    ⚡ Срочно ли: ${isQuick ? "Да" : "Нет"}
    💬 Комментарий: ${comment}
    🔒 Конфиденциальность: ${privacy ? "Да" : "Нет"}
    `;

    for (let i of ids) {
      bot.telegram.sendMessage(i, msgtext);
    }

    return res.status(200).json({
      status: 200,
      message: "successully sended via telegram bot",
    });
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

export default {
  BOT,
};
