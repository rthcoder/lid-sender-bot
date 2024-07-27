## lid-sender-bot

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Node Telegram Bot API]((https://www.google.com/url?sa=i&url=https%3A%2F%2Falpaca.markets%2Flearn%2Ftelegram-bot-nodejs%2F&psig=AOvVaw2B1JMlQUJMEmc2f2q6Z3HB&ust=1722168454059000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODsz9KXx4cDFQAAAAAdAAAAABAE))

## Description
Lid sender to telegram bot - landing pagelarda kiritilganmalumotlarni telegram botga yuborish.

## Installation

1. **Repository** ni klonlash:
2.  ```sh
    git clone https://github.com/tohirdavrsmart/lid-sender-bot.git
    cd lid-sender-bot
    ```

2. **Dependencies** ni o'rnatish:

    ```sh
    npm install
    ```

3. **Environment Variables** faylini yaratish (`.env`):

    ```plaintext
    PORT=
    MONGO_DB_URL=
    ```
4. **src/defaults/index.js**  faylida tg_id nomli arrayga lid jo'natilishi kerak bo'lgan foydalanuvchilarning telegram ID qo'yilishi kerak bo'ladi.

## Usage

1. **Server** ni ishga tushirish:

    ```sh
    npm start
    ```


## Base URL
`http://localhost:4000`

## Send Lid to Bot
- **Endpoint**: `/api/bot`
- **Method**: POST
- **Request Body**:
```json
{
    "client_name": "John Doe",
    "phone_number": "998 9x xxx xx xx"
}
```
- **Response**:
```json
{
    "status": 200,
    "message": "successully sended via telegram bot",
    "data": false
}
```
- **POV**: ushbu so'rov amalga oshirilgan keyin **src/defaults/index.js**  faylida joylashgan tg_id massivida berilgan barcha foydalanuvchilarga lid xabari  jo'natiladi!

