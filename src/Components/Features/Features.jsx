import React from "react";
import "./Features.scss";

function Features() {
  const features = [
    {
      title: "Анонимный Браузинг",
      description:
        "Просматривайте веб-страницы анонимно с помощью Home VPN. Защитите свою личность и активность в сети от посторонних глаз и сохраните конфиденциальность во время работы в Интернете.",
      // description:
      // 'You can enjoy a fast, secure connection without any third party knowing your true identity.',
      fontawesome_icon_name: "shield-alt",
    },

    {
      title: "Мы по всему миру",
      description:
        "Насладитесь глобальным Интернетом с помощью Home VPN. Мы обеспечиваем быстрый и надежный доступ к Интернету независимо от вашего местонахождения.",
      fontawesome_icon_name: "globe",
    },

    {
      title: "Бесплатно",
      // description:
      //   'Home VPN uses points which you earn by watching a quick ad.',
      description:
        "Наслаждайтесь всеми преимуществами Home VPN бесплатно. Наш сервис совершенно бесплатен в использовании, что позволяет вам получать доступ в интернет, оставаться на связи и защищать свои устройства без каких-либо затрат.",
      fontawesome_icon_name: "magic",
    },

    {
      title: "Конфиденциальность",
      description:
        "Защитите свою деятельность в Интернете и личную информацию от хакеров и слежки.",
      fontawesome_icon_name: "lock",
    },
    {
      title: "Защитите свои устройства",
      description:
        "Обеспечьте безопасность и защиту своих устройств iOS и Android с помощью Home VPN. Защититесь от вирусов, вредоносных программ и других онлайн-угроз, а также защитите свою личную информацию и данные.",
      fontawesome_icon_name: "mobile",
    },
    {
      title: "Скорость и стабильность",
      description:
        "Оставайтесь на связи благодаря быстрому и стабильному интернет-соединению, где бы вы ни находились. Home VPN обеспечивает надежный доступ к сети, чтобы вы могли без перебоев смотреть потоковое видео, просматривать и загружать файлы.",
      fontawesome_icon_name: "bolt",
    },
  ];

  return (
    <div className="features">
      <h1>Защити свою цифровую жизнь с помощью Home VPN</h1>
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
