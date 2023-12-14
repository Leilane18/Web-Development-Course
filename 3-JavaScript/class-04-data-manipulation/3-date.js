const dateNowMillisec = new Date().getTime();
const dateNow = new Date();

 console.log(dateNowMillisec);
 console.log(dateNow.toLocaleDateString("pt-br"));
 console.log(dateNow.toLocaleTimeString("pt-br"));

 console.log(dateNow.getDay());
 console.log(dateNow.getDate());
 console.log(dateNow.getMonth());
 console.log(dateNow.getFullYear());

 dateNow.setDate(dateNow.getDate() + 1)
 dateNow.setMonth(dateNow.getMonth() + 5)

 console.log(dateNow.toLocaleDateString("pt-BR"));

 console.log(dateNow.getHours() + 23);
 console.log(dateNow.getSeconds() + 60);
 console.log(dateNow.getMinutes() + 60);
 console.log(dateNow.getMilliseconds() + 1000);

 console.log(dateNow.toLocaleTimeString("pt-BR") + ":" + dateNow.getMilliseconds());
 console.log(dateNow);

 console.log(
    dateNow.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
 );

 const date1 = new Date("2023-12-13");
 const date2 = new Date("1999-08-18");
console.log((date1 - date2) / 1000 / 60 / 60 / 24);