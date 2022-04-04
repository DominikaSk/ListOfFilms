import Navigation from '../components/Navigation.js';
import LoginForm from '../components/LoginForm.js';

const Homepage = () => {
    const homepage = $(document.createElement('div'));
    const nav = Navigation();
    const loginForm = LoginForm();

    homepage.append([nav, loginForm]);
    
    return homepage;
}

export default Homepage;