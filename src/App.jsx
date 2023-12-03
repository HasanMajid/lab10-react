import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <h2>How I installed React:</h2>
      <p className="explanation">
        I first installed Node.js which is runtime for Javascript. It also comes
        with NPM which is a package manager. Then I used the command{" "}
        <code>npm create vite@latest</code> to install Vite which is a build
        tool for Javascript and has the option to install React. After
        installing react I spun up the development server and started working
        with React.
      </p>
      <h2>How I build the page:</h2>
      <p className="explanation">
        I built the page by using Vite to bundle all the Javascript dependencies
        together, this includes React. The command I did this with is{" "}
        <code>npm run build</code>. After, I hosted the website on a website
        called Vercel, so when someone visits my website, the server will send
        over React and the page content, and the page will be built on the
        client-side.
      </p>
      <h2>Difficulties encountered:</h2>
      <p className="explanation">
        The difficulty I encountered was learning new syntax that is very
        similar to HTML but has minor and annoying differences. For example,
        attribute names of elements for in-line CSS in React can not have the
        dash (-) like they do in regular html. For example{" "}
        <code>background-color</code> would become <code>backgroundColor</code>{" "}
        in React. To overcome this, I had to practice getting used to the new
        syntax. <br /> <br /> Also, I had difficulties with managing state in
        react because in React you have to explicitly state which piece of data
        can change and how it can affect the components. I overcame this by
        separating my code into different files to better organize my code and
        state, which makes it easier to keep track of my states.
      </p>
    </>
  );
}

export default App;
