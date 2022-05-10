import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Index() {
  return (
    <div className="
      w-screen bg-primary flex-row flex items-center justify-between
      h-20 pr-12
      md:h-32
    ">
      <button>
        <img src="/glogo.svg" alt="G Logo" className="
          h-20 w-20 drop-shadow-center
          md:h-32 md:w-32
          min-h-20
          min-w-20
        "/>
      </button>
      <div className='flex flex-row space-x-8'>
        <a href='https://www.instagram.com/gabsantos.tech/' target="_blank" className='hover:-translate-y-1 hover:scale-110' rel="noreferrer">
          <FaInstagram className='h-8 w-8 text-bg'/>
        </a>    
        <a href='https://wa.me/554888602578' className='hover:-translate-y-1 hover:scale-110'>
          <FaWhatsapp className='h-8 w-8 text-bg'/>
        </a>
      </div>
    </div>
  );
}
