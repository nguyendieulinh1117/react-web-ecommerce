function Login(props) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailErr,
        passwordErr
    } = props
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Tài khoản</label>
                <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                <p className="errorMsg">{emailErr}</p>
                <label>Mật khẩu</label>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordErr}</p>
                <div className="btnContainer">


                    <button className="btnLogin" onClick={handleLogin}>Đăng nhập</button>


                </div>
            </div>
        </section>
    )
}
export default Login