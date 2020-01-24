# Games library

Games library, using external API

API used: [RAWG Video Games Database API (v1.0)](https://api.rawg.io/docs/)

**Задание**

    - Намирате (или изграждате свое) API което да връща някаква информация.

    - Изграждате HTML страница съдържаща форма с полета които се използват за изпращане на заявка към API-то което сте намерили в т.1. Точния вид на формата и нейните полета определяте вие, но задължително да има начин за определяне точно на каква информация да бъде върната от външния сървис(това може да стане с <select> или radio buttons или checkboxes). Например: Намерил съм API което връща информация за филми и съответно съм направил форма която да има поле за търсене на филм по име, а от долу ще сложа няколко checkbox-а които ще определят каква информация искам (заглавие на филм, описание, обложка, артисти, жарн и тн).

    - При натискане на бутона за submit на формата се изпраща ajax заявка към сървиса и върната информация се визуализира във пространството под формата. При натискане на бутон отново се прави нова заявка и новата информация се прикрепя към вече съществуващата. Информацията се губи само при презареждане на страницата.

    - Над или отстрани на полето където се визуализира информацията да има бутон или бутони позволяващо промяната на дизайна под който се показва информацията. Например: Ако информацията която получавам се визуализира под формата на квадратчета с обложка и информация под нея при натискане на бутончето то същата информация да се визуализира под формата на редове или друг начин(погледнете примерните фигури на края на файла). За разработката на проекта използвайте: React.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
