import "@/assets/styles/global.css"
export const metadata={
     title:"Property Net",
     keywords:"rental, property, real estate",
     description:"Find the perfect rental property"
}
const MainLayout = ({children}) => {
    return (
         <html>
    <body>
         <main>
           {children}
         </main>
    </body>
    </html>
     );
}
 
export default MainLayout;