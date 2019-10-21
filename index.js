const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '862966309:AAGppu4x3M0WW0azkF21jmsXQds9cNERRUE';

//создать бота
const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  //const first_name = msg.chat.first_name;
  bot.sendMessage(chatId, 'привет! ');


//  bot.onText(/\/question/, (msg, match) =>{
  //  const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Выбери часто задаваемый вопрос АГУ',{
      reply_markup:{
        inline_keyboard:[
          //[
            [{
              text: 'Расписание АГУ',
              callback_data: 'timetable'
            }],
            [{
              text: 'Контактная информаци АГУ',
              callback_data: 'contact'
            }],
            [{
              text: 'Расписание звонков',
              callback_data: 'calls'
            }],
            [{
              text: 'Информация об обозначениях учебных корпусов',
              callback_data: 'information'
            }]
          ]
       }
     });
  });

    bot.on('callback_query', (query) => {
       const chatId = query.message.chat.id;
       switch (query.data) {
         case 'timetable':
           openTimetable(chatId);
           break;
         case 'contact':
           bot.sendMessage(chatId, 'Контактная информаци АГУ\n\nЮРИДИЧЕСКИЙ АДРЕС: 414056, Россия, г. Астрахань, ул. Татищева, 20а, Астраханский государственный университет.\nТелефоны: 8 (8512) 24-64-00.\nФакс: 8 (8512) 24-68-64.\nE-mail: asu@asu.edu.ru\n\nПриёмная комиссия\nТелефоны: 8 (8512) 24-64-07, 8 (8512) 24-64-08, 8 (8512) 24-64-09.\nE-mail: metodika@asu.edu.ru');
           break;
         case 'calls':
           var photo = 'calls.jpg';
           bot.sendPhoto(chatId, photo, { caption: 'Расписание звонков' });
           break;
         case 'information':
           bot.sendMessage(chatId,'Информация об обозначениях учебных корпусов\nТ - учебный корпус № 1 (главный) - ул.Татищева 20а;\nТП - пристрой к учебному корпусу № 1 - ул.Татищева 20а;\nТО(3) - общежитие №3 - ул.Татищева 20;\nШ - учебный корпус №2 - пл. Шаумяна д.1;\nА - учебный корпус №3 - ул. Ахматовская д.11;\nН - учебный корпус №4 - пос. Начало, ул.Советская д.2;\nК - учебный корпус №5 - ул. Коновалова д.2;\nМ - учебный корпус №6 - ул.Мосина д.1а;\nСП(7) - учебный корпус №7 - ул. С.Перовской д.96, литер В;\nСП(8) - учебный корус №8 - ул. С.Перовской д.96, литер Л;\nСП(9) - учебный корпус № 9 - ул. С.Перовской д.96, литер П.')
           break;
       }
  })

    function openTimetable(chatId){
      bot.sendMessage(chatId,'Расписание АГУ\n\nможешь посмотреть тут -> http://raspisanie.asu.edu.ru/student');
    }
