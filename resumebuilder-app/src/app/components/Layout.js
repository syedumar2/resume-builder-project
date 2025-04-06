import Header from './Header';
import Footer from './Footer';


const RootLayout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow w-full overflow-y-auto bg-blue-900">
        {children}
      </main>
      <Footer />
    </div>
      
    );
  };
export default RootLayout;