import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/Home/Home'));
const Curriculum = lazy(() => import('../pages/Curriculum/Curriculum'));

const MainRoutes = props => {

    let routes = (
        <Switch>
            <Route path='/home' exact component={HomePage}/>
            <Route path='/curriculum' exact component={Curriculum}/>
            <Redirect from='/' to='/home'/>
        </Switch>
    );

    return <React.Fragment>
        <Suspense fallback={<h1>Loading...</h1>}>
            {routes}
        </Suspense>
    </React.Fragment>;
};

export default MainRoutes;