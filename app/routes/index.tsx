import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Switch } from '@headlessui/react';

export default function Index() {
  const [total, setTotal] = useState(0);
  const [limpeza, setLimpeza] = useState(false)
  const [upgrade, setUpgrade] = useState(false)
  const [montagem, setMontagem] = useState(false)
  const [formatC, setFormatC] = useState(false)
  const [formatS, setFormatS] = useState(false)
  const [avaliacao, setAvaliacao] = useState(false)

  const handleFormatC = () => {
    if(formatC){
      setFormatC(false)
    }
    else {
      setFormatC(true)
      setFormatS(false)
    }
  }
  const handleFormatS = () => {
    if(formatS){
      setFormatS(false)
    }
    else {
      setFormatS(true)
      setFormatC(false)
    }
  }

  useEffect(() => {
    let aux = 0;

    if (upgrade) {
      aux += 120
    }
    if (montagem) {
      aux += 240
    }
    if (formatC) {
      aux += 80
    }
    if (formatS) {
      aux += 60
    }
    if (limpeza && aux > 0) {
      aux += 90
    }
    else if (limpeza) {
      aux += 120
    }
    setTotal(aux)
  }, [limpeza, upgrade, montagem, formatC, formatS])

  return (
    <div className="
      h-screen w-screen bg-bg overflow-y-scroll scrollbar-none flex flex-col items-center
      
    ">
      <Header />
      <div 
        className='
          w-full px-10 pb-10 max-w-3xl min-w-fit 
          flex flex-col items-center
        '
      >
        <div className='font-title my-4 text-white text-2xl text-center w-full '>
          Orçamento fácil
        </div>
        <div 
        className='
          w-full h-auto p-4 my-4 rounded border-2 border-primary-oppacity
        '>
          <div className='flex justify-between my-2 border-b-2 border-b-primary-oppacity py-2'>
            <span className='text-white font-title text-xl'>
              Limpeza interna *
            </span>
            <Switch
              checked={limpeza}
              onChange={setLimpeza}
              className={`${limpeza ? 'bg-primary' : 'bg-primary-oppacity'}
                focus:outline-none relative inline-flex h-6 w-12 flex-shrink-0 
                cursor-pointer rounded-full transition-colors 
                duration-200 ease-in-out focus-visible:ring-2  focus-visible:ring-white 
                focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${limpeza ? 'translate-x-6' : 'translate-x-0'}
                  pointer-events-none inline-block h-6 w-6 transform rounded-full 
                  bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>

          <div className='flex justify-between my-2 border-b-2 border-b-primary-oppacity py-2'>
            <span className='text-white font-title text-xl'>
              Upgrade
            </span>
            <Switch
              checked={upgrade}
              onChange={setUpgrade}
              className={`${upgrade ? 'bg-primary' : 'bg-primary-oppacity'}
                focus:outline-none relative inline-flex h-6 w-12 flex-shrink-0 
                cursor-pointer rounded-full transition-colors 
                duration-200 ease-in-out focus-visible:ring-2  focus-visible:ring-white 
                focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${upgrade ? 'translate-x-6' : 'translate-x-0'}
                  pointer-events-none inline-block h-6 w-6 transform rounded-full 
                  bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>
          
          <div className='flex justify-between my-2 border-b-2 border-b-primary-oppacity py-2'>
            <span className='text-white font-title text-xl'>
              Montagem de computador
            </span>
            <Switch
              checked={montagem}
              onChange={setMontagem}
              className={`${montagem ? 'bg-primary' : 'bg-primary-oppacity'}
                focus:outline-none relative inline-flex h-6 w-12 flex-shrink-0 
                cursor-pointer rounded-full transition-colors 
                duration-200 ease-in-out focus-visible:ring-2  focus-visible:ring-white 
                focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${montagem ? 'translate-x-6' : 'translate-x-0'}
                  pointer-events-none inline-block h-6 w-6 transform rounded-full 
                  bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>

          <div className='flex justify-between my-2 border-b-2 border-b-primary-oppacity py-2'>
            <span className='text-white font-title text-xl'>
              Formatação sem Backup
            </span>
            <Switch
              checked={formatS}
              onChange={handleFormatS}
              className={`${formatS ? 'bg-primary' : 'bg-primary-oppacity'}
                focus:outline-none relative inline-flex h-6 w-12 flex-shrink-0 
                cursor-pointer rounded-full transition-colors 
                duration-200 ease-in-out focus-visible:ring-2  focus-visible:ring-white 
                focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${formatS ? 'translate-x-6' : 'translate-x-0'}
                  pointer-events-none inline-block h-6 w-6 transform rounded-full 
                  bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>

          <div className='flex justify-between my-2 border-b-2 border-b-primary-oppacity py-2'>
            <span className='text-white font-title text-xl'>
              Formatação com Backup
            </span>
            <Switch
              checked={formatC}
              onChange={handleFormatC}
              className={`${formatC ? 'bg-primary' : 'bg-primary-oppacity'}
                focus:outline-none relative inline-flex h-6 w-12 flex-shrink-0 
                cursor-pointer rounded-full transition-colors 
                duration-200 ease-in-out focus-visible:ring-2  focus-visible:ring-white 
                focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${formatC ? 'translate-x-6' : 'translate-x-0'}
                  pointer-events-none inline-block h-6 w-6 transform rounded-full 
                  bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>

          <div className='flex justify-between my-2 py-2'>
            <span className='text-white font-title text-xl'>
              Avaliação
            </span>
            <Switch
              checked={avaliacao}
              onChange={setAvaliacao}
              className={`${avaliacao ? 'bg-primary' : 'bg-primary-oppacity'}
                focus:outline-none relative inline-flex h-6 w-12 flex-shrink-0 
                cursor-pointer rounded-full transition-colors 
                duration-200 ease-in-out focus-visible:ring-2  focus-visible:ring-white 
                focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${avaliacao ? 'translate-x-6' : 'translate-x-0'}
                  pointer-events-none inline-block h-6 w-6 transform rounded-full 
                  bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>

          <span className='font-title text-white text-sm my-4'>
            * Adicionar a limpeza interna junto de outro serviço, exceto avaliação, dá 25% de descondo na limpeza.
          </span>
          
        </div>

        <div 
          className='
            rounded border-2 border-primary-oppacity w-full p-4 text-primary font-medium font-title text-lg
          '
        >
          <div className='flex justify-between'>
            <span>
              Total:
            </span>
            <span>
              R$ {total},00
            </span>
          </div>
        </div>

        <div className='font-title text-white w-full mt-10 px-8 max-w-xl'>
          <h1>
            Agora que você já viu quanto vai ficar o seu serviço, agende a 
            entrega do equipamento com o nosso tecnico através do  
            <a className='text-primary' href='https://wa.me/554888602578'> WhatsApp</a>.
          </h1>
        </div>
       
      </div>
    </div>
  );
}
