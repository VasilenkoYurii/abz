import { Layout } from './components/Layout/Layout';
import { Hero } from './components/Hero/Hero';
import { Candidates } from './components/Candidates/Candidates';
import { Register } from './components/Registration/Register';
import { SuccessMessage } from './components/SendMessage/RegisterMessage';

import { registerStore } from './zustand/registerStore';

function App() {
  const { successSend } = registerStore();

  return (
    <Layout>
      <Hero />
      <Candidates />
      {!successSend ? <Register /> : <SuccessMessage />}
    </Layout>
  );
}

export default App;
