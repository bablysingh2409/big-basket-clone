import { StateProvider } from '@/context/StateContext';
import { AuthProvider } from '@/context/Auth';
import '../styles/global.css';
import Nav from '@/components/Nav';
import Cart from '@/components/Cart';
import axios from 'axios';

export const metadata = {
  title: "STOMIZE",
  description: "Generated by create next app",
};

axios.interceptors.request.use((request) => {
  console.log(request);
  return request;
});

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <AuthProvider>
            <StateProvider>
              <Nav />
              {children}
              <Cart/>
            </StateProvider>
          </AuthProvider>
        </body>
      </html>
    );
  }