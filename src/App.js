import Home from '~/components/home/Home';
import About from '~/components/about/About';
import Header from '~/components/header/Header';
// import ThemeToggle from '~/components/themeToggle/ThemeToggle';
import Works from '~/components/works/Works';
import Contact from '~/components/contact/Contact';
function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Works />
            <Contact />
            {/* <ThemeToggle /> */}
        </div>
    );
}

export default App;
