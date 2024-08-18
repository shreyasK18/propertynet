import Link from "next/link";


const InfoBox = ({heading,backgroundColor='bg-gray-100',textColor='text-gray-800',buttonLink="/",buttonText,buttonBgColor,children}) => {
    return (  <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
        <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
        <p className={`${textColor} mt-2 mb-4`}>
        {children}
        </p>
        <Link
          href={buttonLink}
          className={`inline-block ${buttonBgColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
        >
         {buttonText}
        </Link>
      </div> );
}
 
export default InfoBox;