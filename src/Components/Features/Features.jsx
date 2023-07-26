import React from "react";
import "./Features.scss";

function Features() {
  const features = [
    {
      title: "Переводчик",
      description:
        "В приложении есть встроенная функция \"Переводчик\", которая позволит Вам быстро перевести нужное слово",
      // description:
      // 'You can enjoy a fast, secure connection without any third party knowing your true identity.',
      fontawesome_icon_name: "globe",
    },

    {
      title: "Тесты как у Duolingo",
      description:
        "Интерактивные тесты бурятского языка, подобные тем, что представлены в популярном приложении Duolingo",
      fontawesome_icon_name: "globe",
    },

    {
      title: "Карточки для запоминания",
      description:
        "Техника повторения слов и фраз позволит развить Вашу запоминающую способность",
      fontawesome_icon_name: "magic",
    },

    {
      title: "Добавление своих слов",
      description:
        "Вы также можете добавлять свои собственные слова и фразы в приложение. Так, они всегда будут под рукой",
      fontawesome_icon_name: "pencil",
    },
    {
      title: "Формирование привычки",
      description:
        "Надеемся, что уделяя всего несколько минут в день у Вас получится увидеть первые результаты!",
      fontawesome_icon_name: "bell",
    },
    {
      title: "Android и IOS приложения",
      description:
        "Для Вашего удобства приложение доступно на IOS и на Android",
      fontawesome_icon_name: "mobile",
    },
  ];

  return (
    <div className="features">
      <h1>Помощник в изучении бурятского у Вас в кармане</h1>
      <div className="features-list">
        {features.map((feature, i) => {
          const iconClassName = `iconTop fas fa-${feature.fontawesome_icon_name} fa-stack-1x`;
          return (
            <div className="feature" key={i}>
              <div>
                <span className="fa-stack fa-1x">
                  <i className="iconBack fas fa-circle fa-stack-2x"></i>
                  <i className={iconClassName}></i>
                </span>
              </div>

              <div className="featureText">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
