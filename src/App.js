import Home from "~/components/home/Home";
import About from "~/components/about/About";
import Header from '~/components/header/Header';
import ThemeToggle from "~/components/themeToggle/ThemeToggle";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <ThemeToggle />
        </div>
    );
}

export default App;
