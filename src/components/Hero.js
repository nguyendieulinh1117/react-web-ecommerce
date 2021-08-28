import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import QuanLy from "./QuanLy";
import SuaSach from "./SuaSach";
import ThemSach from "./ThemSach";



function Hero(props) {
    let match = useRouteMatch()
    return (
        <section className="hero">
            <nav>
                <h2>Xin chào</h2>
                <Link to="/">Trang chủ</Link>
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
            <Switch>
                <Route path={`${match.path}`} exact component={QuanLy} />
                <Route path={`${match.path}/addSach`} component={ThemSach} />
                <Route path={`${match.path}/editSach/:id`} component={SuaSach} />
            </Switch>
        </section>
    )
}

export default Hero