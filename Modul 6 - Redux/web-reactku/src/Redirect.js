import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation, useHistory } from "react-router-dom";

// Pada aplikasi ini memiliki 3 halaman: public page, private page, dan halaman login.
// Untuk masuk ke private page, Anda harus login terlebih dahulu.

// Pertama, klik public page, Kemudian, kunjungi private page.
// karena anda belum login, jadi anda diarahkan ke halaman login.
// Setelah login, Anda akan kembali ke private page.

// Perhatikan perubahan setiap URL. Jika anda mengklik tombol kembali,
// Apakah anda kembali ke halaman login? Tidak, karena anda sudah login.
// Cobalah, maka Anda akan kembali ke halaman yang anda kunjungi sebelum login, yaitu public page.

export default function AuthExample() {
    return (
        <Router>
            <div>
                <Switch>
                    <AuthButton />
                </Switch>
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/private">Private Page</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/public">
                        <PublicPage />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <PrivateRoute path="/private">
                        <ProtectedPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); //fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}>
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )

            }
        ></Route>
    );
}

function PublicPage() {
    return <h3>Public</h3>;
}

function ProtectedPage() {
    return <h3>Private</h3>
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You mush log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}