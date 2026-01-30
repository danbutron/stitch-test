import { Header, Hero, Inventory, Lore, Footer } from './components';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <div className="fixed inset-0 scanlines z-50 opacity-20 pointer-events-none" aria-hidden="true"></div>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Inventory />
        <Lore />
      </main>
      <Footer />
    </div>
  );
};

export default App;
