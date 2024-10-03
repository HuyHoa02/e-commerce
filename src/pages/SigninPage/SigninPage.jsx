import React, { useEffect, useRef } from 'react';
import { Flex } from "antd";
import "./SigninPage.css";
import { GooglePlusOutlined, FacebookOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

function SigninPage() {
    // Create refs for the container and buttons
    const containerRef = useRef(null);
    const registerBtnRef = useRef(null);
    const loginBtnRef = useRef(null);

    useEffect(() => {
        // Access the DOM elements using refs after the component has mounted
        const container = containerRef.current;
        const registerBtn = registerBtnRef.current;
        const loginBtn = loginBtnRef.current;

        // Add event listeners for the buttons
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });

        // Clean up the event listeners on component unmount
        return () => {
            registerBtn.removeEventListener('click', () => {
                container.classList.add("active");
            });

            loginBtn.removeEventListener('click', () => {
                container.classList.remove("active");
            });
        };
    }, []);

    return (
        <Flex justify={'center'}>
            <div className="container" id="container" ref={containerRef}>
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><GooglePlusOutlined /></a>
                            <a href="#" className="icon"><FacebookOutlined /></a>
                            <a href="#" className="icon"><GithubOutlined /></a>
                            <a href="#" className="icon"><LinkedinOutlined /></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><GooglePlusOutlined /></a>
                            <a href="#" className="icon"><FacebookOutlined /></a>
                            <a href="#" className="icon"><GithubOutlined /></a>
                            <a href="#" className="icon"><LinkedinOutlined /></a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of the site's features</p>
                            <button className="hidden" id="login" ref={loginBtnRef}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of the site's features</p>
                            <button className="hidden" id="register" ref={registerBtnRef}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </Flex>
    );
}

export default SigninPage;
