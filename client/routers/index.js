import React from 'react'
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage/HomePage";
import TopPage from "../components/TopPage/TopPage";
import Error404Page from "../components/ErrorPage/404";
import SongList from '../components/SongList/SongList'
import Song from '../components/Song/Song'

import {Route, Switch} from 'react-router-dom';

const MainRouter = () => (
            <Switch>
                <Route exact path={"/"}  component={HomePage}></Route>

                <Route  exact path="/top" component={TopPage}></Route>
                <Route  exact path="/playList/:playListId" component={SongList}></Route>
                <Route  exact path="/song/:songId" component={Song}></Route>
                <Route  exact path="*" component={Error404Page}></Route>
            </Switch>
)
export default MainRouter;