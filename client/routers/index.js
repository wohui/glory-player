import React from 'react'
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage/HomePage";
import TopPage from "../components/TopPage/TopPage";
import Error404Page from "../components/ErrorPage/404";
import AddCategory from '../components/PlayLists/PlayList'
import {Route, Switch} from 'react-router-dom';

const MainRouter = () => (
            <Switch>
                <Route exact path={"/"}  component={HomePage}></Route>

                <Route  exact path="/top" component={TopPage}></Route>
                <Route  exact path="/userCenter" component={AddCategory}></Route>
                <Route  exact path="*" component={Error404Page}></Route>
            </Switch>
)
export default MainRouter;