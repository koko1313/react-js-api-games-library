import React from 'react';

const HomePage = () => {
  return <>
    <div className="row">
      <div className="col">
        <h1>About</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md">
        <h2>За проекта</h2>
        <p>
          Библиотека с игри, направена на <a href="https://reactjs.org/" target="_blank">Reat.js</a>.<br /><br />
          Това е курсов проект, използващ външно API <a href="https://api.rawg.io/docs/" target="_blank">rawg.io</a>, предоставящо информацията за всички игри.<br />
          Проект по избираемата дисциплина "Съвременни JavaScript рамки за изграждане на клиентски приложения" - магистри 2020.<br /><br />
          За изграждането на проекта бяха използвани най-новите технологии и бяха спазвани добрите практики.
        </p>
      </div>
      <div className="col-md">
        <h2>За мен</h2>
        <p>
          <strong>Име: </strong> <em><a href="http://portfolio.koko.projects.bgschool.bg/" target="_blank">Калоян Величков</a></em>;<br />
          <strong>Факултетен номер: </strong> <em>1901757001</em>;<br />
          <strong>Специалност: </strong> <em>Софтуерни технологии със специализация графични среди и потребителски интерфейси</em>;<br />
        </p>
      </div>
    </div>
  </>
};

export default HomePage;