import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import QuizzContext from "../context/quizzContext.js";
import Welcome from "../components/Welcome.jsx";
import Question from "../components/Question.jsx";
import GameOver from "../components/GameOver.jsx";
import PaginaInicial from "../pages/ipojuca/PaginaInicial.jsx";
import UserSignIn from "../components/UserSignIn.jsx";
import UserSignUp from "../components/UserSignUp.jsx";
import CreateQuestion from "../components/CreateQuestion.jsx";
import ListQuestion from "../components/ListQuestion.jsx";
import LerQuestao from "../components/estudo/LerQestao.jsx";
import CriarQuestao from "../components/estudo/CriarQuestao.jsx";
import Hero from "../components/Hero.jsx";
import Estrutura from "../components/Estrutura.jsx";
import Login from "../components/Login.jsx";
import LoginContextProvider from "../context/AuthContextProvider.jsx";
import LoginPage from "../pages/ipojuca/LoginPage.jsx";
import RichTextEditor from "../components/RichTextEditor.jsx";
import ArticleView from "../pages/ipojuca/ArticleView.jsx";
import Pagination from "../components/Ipojuca/ArticlePagination.jsx";
import BotaoFavoritar from "../components/BotaoFavoritar.jsx";
import LinkFavoritar from "../components/LinkFavoritar.jsx";

function App() {
  const [quizzState] = React.useContext(QuizzContext);

  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Hero />} /> */}

          <Route element={<Estrutura />}>
            <Route path="/" element={<PaginaInicial />} />

            <Route path="/botaoFavoritar" element={<BotaoFavoritar />} />
            <Route path="/linkFavoritar" element={<LinkFavoritar />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/pagination" element={<Pagination />} />

            <Route path="/articleView" element={<ArticleView />}>
              <Route path=":id" element={<ArticleView />} />
            </Route>

            <Route path="/createArticle" element={<RichTextEditor />} />

            <Route path="/userSignIn" element={<UserSignIn />} />
            <Route path="/userSignUp" element={<UserSignUp />} />
            <Route path="/createQuestion" element={<CreateQuestion />} />
            <Route path="/listQuestion" element={<ListQuestion />} />
          </Route>

          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<CriarQuestao />} /> */}
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>

    // <div>
    //   {quizzState.gameStage === "Start" && <Welcome />}
    //   {quizzState.gameStage === "Playing" && <Question />}
    //   {quizzState.gameStage === "End" && <GameOver />}
    // </div>
  );
}

export default App;
