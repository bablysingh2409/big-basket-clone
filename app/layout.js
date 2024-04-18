import { StateProvider} from './StateContext';
import '../styles/global.css';
import Cart from './components/Cart';
import Nav from './components/Nav';


export const metadata = {
    title: 'Big-Basket',
    description: 'For Grocery Shopping'
}

function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                     <main className='app'>
                        <StateProvider>
                           <Nav />
                             {children}
                           <Cart/>
                        </StateProvider>
                     </main>    
            </body>
        </html>
    )
}

export default RootLayout;