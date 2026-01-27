const testdata = [
  {
    id: 1,
    question: "Elektron pochta adresiga ega bo‘lish qanday amalga oshiriladi?",
    options: [
      "mail., rambler., yandex. muhitlarida",
      "mali, rabmler, yandekc. muhitlarida",
      "html, mali., rabmler. muhitlarida",
      "www, mali., yandekc. muhitlarida"
    ],
    answer: "mail., rambler., yandex. muhitlarida",
  },
  {
    id: 2,
    question: "1 Megabayt necha kilobaytni tashkil qiladi?",
    options: ["1024 Kbayt", "512 Kbayt", "1024 bayt", "1024 Mbayt"],
    answer: "1024 Kbayt",
  },
  {
    id: 3,
    question: "Agar kitobning har bir beti 32 ta satrdan va har bir satri 64 ta simvoldan iborat bo‘lsa, 250 betda necha kilobayt axborot bor?",
    options: ["500", "512000", "55024", "562500"],
    answer: "500",
  },
  {
    id: 4,
    question: "Agar kitobning har bir beti 32 ta satrdan va har bir satri 64 ta simvoldan iborat bo‘lsa, 250 betda necha kilobit axborot bor?",
    options: ["4000", "12000", "55024", "562500"],
    answer: "4000",
  },
  {
    id: 5,
    question: "Agar kitobning har bir beti 32 ta satrdan va har bir satri 64 ta simvoldan iborat bo‘lsa, 250 varaqda necha kilobayt axborot bor?",
    options: ["1000", "500", "55024", "562500"],
    answer: "1000",
  },
  {
    id: 6,
    question: "Agar kitobning har bir beti 32 ta satrdan va har bir satri 64 ta simvoldan iborat bo‘lsa, 256 varaqda necha kilobayt axborot bor?",
    options: ["1024", "512", "55024", "562500"],
    answer: "1024",
  },
  {
    id: 7,
    question: "Agar kitobning har bir beti 32 ta satrdan va har bir satri 64 ta simvoldan iborat bo‘lsa, 256 varaqda necha kilobit axborot bor?",
    options: ["8192", "1024", "512", "562500"],
    answer: "8192",
  },
  {
    id: 8,
    question: "Agar kitobning har bir beti 32 ta satrdan va har bir satri 64 ta simvoldan iborat bo‘lsa, 256 betda necha kilobit axborot bor?",
    options: ["4096", "1024", "512", "8192"],
    answer: "4096",
  },
  {
    id: 9,
    question: "Agar kitobning har bir beti 32 ta satrdan va har bir satri 64 ta simvoldan iborat bo‘lsa, 600 betda necha kilobayt axborot bor?",
    options: ["1200", "1024", "512", "8192"],
    answer: "1200",
  },
  {
    id: 10,
    question: "MS Word dasturida CTRL+A ning vazifasi nima?",
    options: [
      "Matnni to‘liq belgilaydi",
      "Belgilangan matndan nusxa oladi",
      "Belgilangan matndan qirqib oladi",
      "Olingan nusxani qo‘yadi"
    ],
    answer: "Matnni to‘liq belgilaydi",
  },
  {
    id: 11,
    question: "MS Word dasturida CTRL+C ning vazifasi nima?",
    options: [
      "Belgilangan matndan nusxa oladi",
      "Matnni to‘liq belgilaydi",
      "Belgilangan matndan qirqib oladi",
      "Olingan nusxani qo‘yadi"
    ],
    answer: "Belgilangan matndan nusxa oladi",
  },
  {
    id: 12,
    question: "MS Word dasturida CTRL+V ning vazifasi nima?",
    options: [
      "Olingan nusxani qo‘yadi",
      "Matnni to‘liq belgilaydi",
      "Belgilangan matndan nusxa oladi",
      "Belgilangan matndan qirqib oladi"
    ],
    answer: "Olingan nusxani qo‘yadi",
  },
  {
    id: 13,
    question: "MS Word dasturida CTRL+X ning vazifasi nima?",
    options: [
      "Belgilangan matndan qirqib oladi",
      "Matnni to‘liq belgilaydi",
      "Belgilangan matndan nusxa oladi",
      "Olingan nusxani qo‘yadi"
    ],
    answer: "Belgilangan matndan qirqib oladi",
  },
  {
    id: 14,
    question: "MS Word dasturida CTRL+B ning vazifasi nima?",
    options: [
      "Belgilangan matnni qalinlashtiradi",
      "Matnni to‘liq belgilaydi",
      "Belgilangan matnni qiyalatadi",
      "Belgilangan matnni tagiga chizadi"
    ],
    answer: "Belgilangan matnni qalinlashtiradi",
  },
  {
    id: 15,
    question: "MS Word dasturida CTRL+I ning vazifasi nima?",
    options: [
      "Belgilangan matnni qiyalatadi",
      "Matnni to‘liq belgilaydi",
      "Belgilangan matnni qalinlashtiradi",
      "Belgilangan matnni tagiga chizadi"
    ],
    answer: "Belgilangan matnni qiyalatadi",
  },
  {
    id: 16,
    question: "MS Word dasturida CTRL+U ning vazifasi nima?",
    options: [
      "Belgilangan matnni tagiga chizadi",
      "Matnni to‘liq belgilaydi",
      "Belgilangan matnni qalinlashtiradi",
      "Belgilangan matnni qiyalatadi"
    ],
    answer: "Belgilangan matnni tagiga chizadi",
  },
  {
    id: 17,
    question: "MS Word dasturida CTRL+L ning vazifasi nima?",
    options: [
      "Belgilangan matnni chap tamonga rostlaydi",
      "Belgilangan matnni o‘ng tamonga rostlaydi",
      "Belgilangan matnni o‘rtaga rostlaydi",
      "Belgilangan matnni ikki tamonga rostlaydi"
    ],
    answer: "Belgilangan matnni chap tamonga rostlaydi",
  },
  {
    id: 18,
    question: "MS Word dasturida CTRL+R ning vazifasi nima?",
    options: [
      "Belgilangan matnni o‘ng tamonga rostlaydi",
      "Belgilangan matnni chap tamonga rostlaydi",
      "Belgilangan matnni o‘rtaga rostlaydi",
      "Belgilangan matnni ikki tamonga rostlaydi"
    ],
    answer: "Belgilangan matnni o‘ng tamonga rostlaydi",
  },
  {
    id: 19,
    question: "MS Word dasturida CTRL+J ning vazifasi nima?",
    options: [
      "Belgilangan matnni ikki tamonga rostlaydi",
      "Belgilangan matnni chap tamonga rostlaydi",
      "Belgilangan matnni o‘ng tamonga rostlaydi",
      "Belgilangan matnni o‘rtaga rostlaydi"
    ],
    answer: "Belgilangan matnni ikki tamonga rostlaydi",
  },
  {
    id: 20,
    question: "MS Word dasturida CTRL+N ning vazifasi nima?",
    options: [
      "Yangi fayl yaratish",
      "Avval yaratilgan faylni ochish",
      "Faylni saqlash",
      "Faylni pechatga berish"
    ],
    answer: "Yangi fayl yaratish",
  },
  {
    id: 21,
    question: "MS Word dasturida CTRL+O ning vazifasi nima?",
    options: [
      "Yangi fayl yaratish",
      "Avval yaratilgan faylni ochish",
      "Faylni saqlash",
      "Faylni pechatga berish"
    ],
    answer: "Avval yaratilgan faylni ochish",
  },
  {
    id: 22,
    question: "MS Word dasturida CTRL+S ning vazifasi nima?",
    options: [
      "Faylni saqlash",
      "Yangi fayl yaratish",
      "Avval yaratilgan faylni ochish",
      "Faylni pechatga berish"
    ],
    answer: "Faylni saqlash",
  },
  {
    id: 23,
    question: "MS Word dasturida CTRL+P ning vazifasi nima?",
    options: [
      "Faylni pechatga berish",
      "Yangi fayl yaratish",
      "Avval yaratilgan faylni ochish",
      "Faylni saqlash"
    ],
    answer: "Faylni pechatga berish",
  },
  {
    id: 24,
    question: "MS Word dasturida CTRL+F ning vazifasi nima?",
    options: [
      "Fayldan qidirish",
      "Almashtirish",
      "Bajarilgan jarayonni qaytarish",
      "Gipersilka qo‘yish"
    ],
    answer: "Fayldan qidirish",
  },
  {
    id: 25,
    question: "MS Word dasturida CTRL+H ning vazifasi nima?",
    options: [
      "Fayldan qidirish",
      "Almashtirish",
      "Bajarilgan jarayonni qaytarish",
      "Gipersilka qo‘yish"
    ],
    answer: "Almashtirish",
  },
  {
    id: 26,
    question: "MS Word dasturida CTRL+Z ning vazifasi nima?",
    options: [
      "Bajarilgan jarayonni qaytarish",
      "Fayldan qidirish",
      "Almashtirish",
      "Gipersilka qo‘yish"
    ],
    answer: "Bajarilgan jarayonni qaytarish",
  },
  {
    id: 27,
    question: "MS Word dasturida CTRL+K ning vazifasi nima?",
    options: [
      "Gipersilka qo‘yish",
      "Fayldan qidirish",
      "Almashtirish",
      "Bajarilgan jarayonni qaytarish"
    ],
    answer: "Gipersilka qo‘yish",
  },
  {
    id: 28,
    question: "Hukumatga oid domen nomi bu..?",
    options: [".gov", ".uz", ".com", ".edu"],
    answer: ".gov",
  },
  {
    id: 29,
    question: "Axborot o‘lchov birliklarini o‘sish tartibidagisini tanlang ?",
    options: [
      "bit, bayt (bt),kilobayt (Kbt),mеgabayt (Mbt),gigabayt (Gbt)",
      "bayt (bt),kilobayt (Kbt),mеgabayt (Mbt),gigabayt (Gbt),bit",
      "mеgabayt (Mbt),gigabayt (Gbt),bit,bayt (bt),kilobayt (Kbt)",
      "gigabayt (Gbt),bit,bayt (bt),kilobayt (Kbt),mеgabayt (Mbt)"
    ],
    answer: "bit, bayt (bt),kilobayt (Kbt),mеgabayt (Mbt),gigabayt (Gbt)",
  },
  {
    id: 30,
    question: "Zamоnaviy axbоrоt texnоlоgiyasi vоsitalari qaysilar?",
    options: [
      "Kоmpyuterlar, tarmоqlar, internet, multimediya",
      "Multimedia vоsitalari",
      "Kоmpyuterlar, mоnitоrlar, dasturiy vositalar",
      "telefon, radio, televideniya"
    ],
    answer: "Kоmpyuterlar, tarmоqlar, internet, multimediya",
  },
  {
    id: 31,
    question: "Arxivlangan fayl degani nima?",
    options: [
      "Biror faylning ixchamlangan, siqilgan xolati",
      "Arxivlaydigan arxivator dasturlari",
      "Fayllarning eskirgan, qolib ketgan xolati",
      "Ma’lumotlarni o‘zida saqlovchi dastur"
    ],
    answer: "Biror faylning ixchamlangan, siqilgan xolati",
  },
  {
    id: 32,
    question: "Arxivatorlar nima?",
    options: [
      "Kompyuterdagi ma’lumotlar hajmini kamaytirib maxsus fayllarga ularni joylashtiradigan dasturlar",
      "Kompyuter viruslariga qarshi kurashuvchi dasturlar",
      "Fayllar majmui va ichki katalog saqlanuvchi diskdagi maxsus joy",
      "Malumotlarni o‘zida saqlovchi dastur bo‘lib, ular ustida turli amallar bajarish mumkin"
    ],
    answer: "Kompyuterdagi ma’lumotlar hajmini kamaytirib maxsus fayllarga ularni joylashtiradigan dasturlar",
  },
  {
    id: 33,
    question: "Arxivator dasturlar qatorini ko‘rsating",
    options: [
      "ARJ, RAR, ZIP - UNZIP, WINRAR",
      "ARJ, RAR, RTF, EXL, WINRAR",
      "WINRAR, EXL, DOC, RAR, ZIP",
      "ZIP, RAR, LHA, RTF, AVP, NOD"
    ],
    answer: "ARJ, RAR, ZIP - UNZIP, WINRAR",
  },
  {
    id: 34,
    question: "Kompyuter virusi nima?",
    options: [
      "Kompyuter ishiga salbiy ta’sir ko‘rsatish, sekinlashtirish, ma’lumotlarni o‘zgartirish yoki o‘chiruvchi dasturlar",
      "Kompyuterdagi ma’lumotlar hajmini kamaytirib maxsus fayllarga ularni joylashtiradigan dasturlar",
      "Malumotlarni o‘zida saqlovchi dastur bo‘lib, ular ustida turli amallar bajarish mumkin",
      "Fayllar majmui va ichki katalog saqlanuvchi diskdagi maxsus joy"
    ],
    answer: "Kompyuter ishiga salbiy ta’sir ko‘rsatish, sekinlashtirish, ma’lumotlarni o‘zgartirish yoki o‘chiruvchi dasturlar",
  },
  {
    id: 35,
    question: "Kompyuter viruslariga qarshi kurashuvchi antivirus dasturlar qatorini ko‘rsating",
    options: [
      "DOCTOR WEB, NORTON ANTIVIRUS, NOD32, AVP",
      "NORTON ANTIVIRUS, NOD32, MSDOS, COREL DRAWE",
      "AIDSTEST, ANTIDIR, 3D MAX, ADOBE FOTOSHOP",
      "DOCTOR WEB, NORTON ANTIVIRUS, NOD32, NERO"
    ],
    answer: "DOCTOR WEB, NORTON ANTIVIRUS, NOD32, AVP",
  },
  {
    id: 36,
    question: "Microsoft Word matn muharririga “Найти” va “Заменит” buyrug‘lari qanaqa vazifalarni bajaradi?",
    options: [
      "Matnni izlash va o‘zgartirish uchun",
      "Maxsus simvollarni kiritish uchun",
      "Sahifa o‘lchamlarini o‘rnatish uchun",
      "Faylni qancha xajmi borligini ko‘rish uchun"
    ],
    answer: "Matnni izlash va o‘zgartirish uchun",
  },
  {
    id: 37,
    question: "Microsoft Excel da formula to‘g‘ri yozilgan satrni belgilang?",
    options: [
      "= L2 + F3*G5",
      "= Ф4 - В2 + E5",
      "(125+43)*5=",
      "F4 + G2 - L1 ="
    ],
    answer: "= L2 + F3*G5",
  },
  {
    id: 38,
    question: "Microsoft Excel dasturi qanday ishlar uchun mo‘ljallangan?",
    options: [
      "Matematik hisob-kitoblarini bajarish, elektron jadavallar yaratish uchun mo‘ljallangan",
      "Yo‘qori darajadagi imkoniyatlarga ega bo‘lgan hujjatlar tayyorlash mo‘ljallangan",
      "Turli ko‘rinishdagi slayd va taqdimotlar yaratish uchun mo‘ljallangan",
      "Ma’lumotlar bazasi bilan ishlash uchun mo‘ljallangan"
    ],
    answer: "Matematik hisob-kitoblarini bajarish, elektron jadavallar yaratish uchun mo‘ljallangan",
  },
  {
    id: 39,
    question: "Microsoft Power Point dasturida slaydga fon berish uchun qaysi menyudan foydalaniladi?",
    options: [
      "Формат - фон",
      "Файл - параметры страницы",
      "Вид - разметка",
      "Вставка - фон"
    ],
    answer: "Формат - фон",
  },
  {
    id: 40,
    question: "Microsoft Power Point dasturida slaydga rasm o‘rnatish uchun qaysi menyudan foydalaniladi?",
    options: [
      "Вставка - Рисунок",
      "Файл - параметры страницы",
      "Вид - разметка",
      "Формат - фон"
    ],
    answer: "Вставка - Рисунок",
  },
  {
    id: 41,
    question: "Microsoft Power Point dasturida slaydlarga rang-baranglik berish qaysi bo‘limda?",
    options: [
      "Дизайн слайдов",
      "Смена слайдов",
      "Анимация слайдов",
      "Показ слайдов"
    ],
    answer: "Дизайн слайдов",
  },
  {
    id: 42,
    question: "Microsoft Power Point dasturida slaydlar namoyishi qaysi menyuda?",
    options: [
      "Показ слайдов",
      "Вид слайдов",
      "Просмотр",
      "Формат"
    ],
    answer: "Показ слайдов",
  },
  {
    id: 43,
    question: "Microsoft Power Point dasturida faqat slayd namoyishi qaysi belgida?",
    options: [
      "Просмотр",
      "Вид слайдов",
      "Показ слайдов",
      "Формат"
    ],
    answer: "Просмотр",
  },
  {
    id: 44,
    question: "Microsoft Power Point dasturida maxsus effektlar qo‘shish qaysi bandda?",
    options: [
      "Настройка анимации - Добавить эффект",
      "Дизайн слайда - Эффекты анимации",
      "Дизайн слайда - Цветовые схемы",
      "Вставка - Эффект"
    ],
    answer: "Настройка анимации - Добавить эффект",
  },
  {
    id: 45,
    question: "Microsoft Power Point dasturida slaydga tayyor effektlar qo‘shish qaysi bo‘limda?",
    options: [
      "Дизайн слайда - Эффекты анимации",
      "Настройка анимация - Добавить эффект",
      "Дизайн слайда - Цветовые схемы",
      "Вставка - Эффект"
    ],
    answer: "Дизайн слайда - Эффекты анимации",
  },
  {
    id: 46,
    question: "Microsoft Power Point dasturida slayddagi animatsiya elementining birgalikda, so‘zma-so‘z, harfma-harf xarakatlanishi qaysi holatda?",
    options: [
      "Параметри эффекта",
      "Скорость эффекта",
      "Добавить эффект",
      "Время эффекта"
    ],
    answer: "Параметри эффекта",
  },
  {
    id: 47,
    question: "Microsoft Power Point dasturida slayddagi animatsiya elementining vaqti qaysi holatda?",
    options: [
      "Время эффекта",
      "Скорость эффекта",
      "Добавить эффект",
      "Параметри эффекта"
    ],
    answer: "Время эффекта",
  },
  {
    id: 48,
    question: "Microsoft Power Point dasturida animatsiyaning holati (sichqonchaga yoki avtomatik bog‘kiqligi) qaysi bandda?",
    options: [
      "Начало",
      "Параметри",
      "Параметри эффекта",
      "Время эффекта"
    ],
    answer: "Начало",
  },
  {
    id: 49,
    question: "Microsoft Power Point dasturida slaydga musiqa yoki video fayl o‘rnatish uchun qaysi menyudan foydalaniladi?",
    options: [
      "Вставка - Фильмы и звук",
      "Формат - Музыка и видео",
      "Вставка - Музыка и видео",
      "Формат - Фильмы и звук"
    ],
    answer: "Вставка - Фильмы и звук",
  },
  {
    id: 50,
    question: "Prezentatsiya, taqdimot nima?",
    options: [
      "Bu slaydlar va maxsus effektlar to‘plami bo‘lib, ularni ekranda ko‘rsatish",
      "Bu qulay shaklda bosib chiqarilgan va tanishish uchun muljalangan materiallar",
      "Bu barcha ko‘rgazmali qurollarni yaratish va ba’zi joylarda esa ma’lumotlar bazasi sifatida ham qo‘llash",
      "Turli ko‘rinishdagi slayd va taqdimotlar yaratish uchun mo‘ljallangan"
    ],
    answer: "Bu slaydlar va maxsus effektlar to‘plami bo‘lib, ularni ekranda ko‘rsatish",
  },
  {
    id: 51,
    question: "Microsoft Access dasturi qanday ishlar uchun mo‘ljallangan?",
    options: [
      "Ma’lumotlar bazasi bilan ishlash uchun mo‘ljallangan",
      "Yo‘qori darajadagi imkoniyatlarga ega bo‘lgan hujjatlar tayyorlash mo‘ljallangan",
      "Matematik hisob-kitoblarini bajarish, elektron jadavallar yaratish uchun mo‘ljallangan",
      "Turli ko‘rinishdagi slayd va taqdimotlar yaratish uchun mo‘ljallangan"
    ],
    answer: "Ma’lumotlar bazasi bilan ishlash uchun mo‘ljallangan",
  },
  {
    id: 52,
    question: "Microsoft Access dasturida Jadvallar yaratish qaysi Оbyektda?",
    options: ["Таблицы", "Запросы", "Формы", "Отчеты"],
    answer: "Таблицы",
  },
  {
    id: 53,
    question: "Microsoft Access dasturida Shakllar tashkil etish qaysi Оbyektda?",
    options: ["Формы", "Таблицы", "Запросы", "Отчеты"],
    answer: "Формы",
  },
  {
    id: 54,
    question: "Microsoft Access dasturida Hisobotlar tashkil etish qaysi Оbyektda?",
    options: ["Отчеты", "Таблицы", "Запросы", "Формы"],
    answer: "Отчеты",
  },
  {
    id: 55,
    question: "Microsoft Access dasturida So‘rovlar tashkil etish qaysi Оbyektda?",
    options: ["Запросы", "Таблицы", "Формы", "Отчеты"],
    answer: "Запросы",
  },
  {
    id: 56,
    question: "Boshqa kompyuterlar bilan aloqa qaysi yorliq orqali amalga oshiriladi?",
    options: [
      "Сетевое окружение",
      "Мои документы",
      "Мой компьютер",
      "Корзина"
    ],
    answer: "Сетевое окружение",
  }
]


const user_answer = new Array(25).fill(null);
const select_answer = new Array(25).fill(null);

// console.log(user_answer)
let ansverId;
let arrayTest = [];
let arrOption = [];
var k = 1;
let fine=0;
let attemp=5;

$(document).ready(() => {
  arrayTest = massivTuzish(testdata.length, 25);
  for (var k = 1; k <= arrayTest.length; k++) {
    arrOption.push(massivTuzish(4, 4));
    testbtnlist.innerHTML += `
      <li>
        <a class="done" id="que_${k}" onclick="clickbtn(${k})" href="#">${k}</a>
      </li>
    `;
  }
  setValue(1);
  timer1();
});

function massivTuzish(m, n) {
  let massiv = [];
  let i = 0;

  while (i < n) {
    var k = Math.floor(Math.random() * m);
    if (!massiv.includes(k)) {
      massiv.push(k);
      i++;
    }
  }
  return massiv;
}



function toggleParentClass(radio) {
  var parent = radio.parentNode;

  // Remove 'checked' class from all answer-items
  var answerItems = document.querySelectorAll(".answer-item");

  for (var i = 0; i < answerItems.length; i++) {
    if (answerItems[i] == parent) {
      select_answer[ansverId - 1] = i;
      user_answer[ansverId - 1] = parent.querySelector("span").innerHTML;
    }

    if (answerItems[i] !== parent) {
      answerItems[i].classList.remove("checked");
      answerItems[i].querySelector('input[type="radio"]').checked = false;
    }
  }

  if (radio.checked) {
    parent.classList.add("checked");
    // console.log(testdata[ansverId].answer)
  } else {
    parent.classList.remove("checked");
  }

  // alert(k);
  let cur = document.querySelector(`#que_${ansverId}`);
  cur.style.background = "rgb(0, 156, 255)";
}

function checked_ansver() {
  var answerItems = document.querySelectorAll(".answer-item");

  for (var i = 0; i < answerItems.length; i++) {
    answerItems[i].classList.remove("checked");
    answerItems[i].querySelector('input[type="radio"]').checked = false;
  }

  if (user_answer[ansverId - 1] != null) {
    for (var i = 0; i < answerItems.length; i++) {
      if (i == select_answer[ansverId - 1]) {
        answerItems[i].classList.add("checked");
        answerItems[i].querySelector('input[type="radio"]').checked = true;
      }
    }
  }
}

const el = (e) => document.querySelector(e);

const testbtnlist = el("#questionbtn");
const count_question = el("#count_question");
const number_question = el("#question-num");
const question_text = el(".question-text");
const timer_teg = el("#timer");

const option1 = el("#op1");
const option2 = el("#op2");
const option3 = el("#op3");
const option4 = el("#op4");

let n,
  a = 1;

function setValue(k) {
  n = arrayTest.length;
  ansverId = k;
  number_question.innerHTML = k;
  count_question.innerHTML = k + "/" + n;
  question_text.innerHTML = testdata[arrayTest[k - 1]].question;

  option1.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][0]];
  option2.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][1]];
  option3.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][2]];
  option4.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][3]];

  checked_ansver();
}

function clickbtn(id) {
  k = document.getElementById(`que_${id}`).innerHTML;
  setValue(k);
}

function pClick() {
  var b = parseInt(number_question.innerHTML);

  if (b > 1) {
    b -= 1;
    setValue(b);
  }
}

function nClick() {
  var b = parseInt(number_question.innerHTML);
  if (b < n) {
    b += 1;
    setValue(b);
  }
}

function timer1() {
  var timeLimitInMinutes = 50;
  var timeLimitInSeconds = timeLimitInMinutes * 60;
  var timerElement = document.getElementById("timer");

  function startTimer() {
    timeLimitInSeconds--;

    var minutes = Math.floor(timeLimitInSeconds / 60);
    var seconds = timeLimitInSeconds % 60;

    if (timeLimitInSeconds < 0) {
      timerElement.textContent = "00:00";
      clearInterval(timerInterval);
      return;
    }

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    timerElement.innerHTML = minutes + ":" + seconds;
  }

  var timerInterval = setInterval(startTimer, 1000);
}

let ansverId1=document.querySelector("#answerId")
function getAnsver(){
  fine++;
  q=number_question.innerHTML;
  ansverId1.textContent=testdata[arrayTest[q - 1]].answer;
}
function endTest() {
  var c = 0, inc = 0, usc = 0;
  
  for (var i = 0; i < arrayTest.length; i++) {
      if (user_answer[i] != null) {
          if (user_answer[i] == testdata[arrayTest[i]].answer) {
              c++;
          } else {
              inc++;
          }
      } else {
          usc++;
      }
  }

  // Natijalarni ekranga chiqarish
  document.querySelector("#cans").textContent = `To'g'ri: ${c}`;
  document.querySelector("#icans").textContent = `Noto'g'ri: ${inc}`;
  document.querySelector("#fine").textContent = `Jarima: ${fine}`;
  document.querySelector("#fullball").textContent = `Umumiy ball: ${(c - fine)*4}`;
  document.querySelector("#noselect").textContent = `Belgilanmagan: ${usc}`;

  // Vaqtni olish
  const now = new Date();
  const timestamp = now.toLocaleString("uz-UZ"); // O'zbek formati
  const email1 = localStorage.getItem("userEmail");

  // Telegram bot ma'lumotlari
  const botToken = "8206707286:AAH812LmGyJKKwqdcZ4gidv3rxNiyckkENI"; // Bot tokenini o'zgartiring
  const chatId = "7438762563"; // O'zingizning chat ID ni kiriting

  // Xabar matni
  const message = `
🕒 Test tugallangan vaqt: ${timestamp}
📧 Email address: ${email1}
📊 *Test natijasi:*
✅ To'g'ri javoblar: ${c}
❌ Noto'g'ri javoblar: ${inc}
⚪ Belgilanmagan javoblar: ${usc}
🏆 Umumiy ball: ${(c - fine)*4}`;

  // Telegram API-ga so‘rov yuborish
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          chat_id: chatId,
          text: message
      })
  })
  .then(response => response.json())
  .then(data => {
      console.log("Xabar yuborildi:", data);
      
      // 1.5 soniya kutish va keyin sahifani o‘zgartirish
      setTimeout(() => {
          window.location = "studentindex.html";
      }, 20000);
  })
  .catch(error => {
      console.error("Xatolik yuz berdi:", error);
  });
}
