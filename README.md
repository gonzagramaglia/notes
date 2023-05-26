
## Hey, I'm **[gonza](https://www.gonza.uno/){target="_blank"}**
It's good to see that you have been interested in understanding this repository.<br><br>



First of all I want to thank Bob Ziroll ([@bobziroll](https://twitter.com/bobziroll){target="_blank"}) 
who was my guide in the development adventure of this project, 
during the **[Scrimba Frontend Developer Path](https://scrimba.com/){target="_blank"}** ✨<br><br><br>



📌 **LIVE DEMO: _[https://notes.gonza.uno/](https://notes.gonza.uno/){target="_blank"}_**

[![Notes Demo Preview](./src/assets/notes.png)](https://notes.gonza.uno/){target="_blank"}

<br><br><br>





#### Creation of the React project template using Vite:
```bash
npm create vite@latest ./ -- --template react
```

<br>

#### Dependencies that were used, along with the command to install them:

* **NanoId**
_Official website: https://github.com/ai/nanoid_ (to add random id to notes)

* **React Split**
_Official website: https://split.js.org/_ (to split the screen in two and allow the user to adjust it freely)

* **React Markdown Editor**
_Official website: https://github.com/andrerpena/react-mde_ (to style the text with markdown)

* **Showdown**
_Official website: https://showdownjs.com/_ (to convert the text with markdown in html and be able to visualize it)

* **React Icons**
_Official website: https://github.com/react-icons/react-icons_ (to use icons)

```bash
npm install -legacy-peer-deps nanoid react-split react-mde showdown react-icons
```

<br>

#### To finish the project setup it was necessary to update the package.json so that the React and React-dom dependencies are from version 17.0.2. So they will not conflict with the other dependencies

<br>
<br>
Added feature: when adding my custom navbar I had to adjust the height of the editor, sidebar and initial screen (no-notes) from 100vh to 85vh.
<br>
<br>
