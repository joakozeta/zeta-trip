const Preview = () => {
  return (
    <div className='my-20 mx-20 flex'>
      <img
        className='max-w-sm'
        src='https://www.patagonia-argentina.com/wp-content/uploads/2021/07/IMG_20170309_140305.jpg'
      ></img>
      <div>
        <h1 className='mx-10 text-4xl font-bold'>Glaciar Porrito Moreno</h1>
        <h3 className='mx-10 text-sm font-thin'>20 de Abril, 2020</h3>
        <p className='mx-10 text-2xl font-thin'>
          Fue una experiencia inimaginable, nos cagamos un poco de frio pero lo
          compensaba que llevamos 10 kilos de porro. No les puedo contar mucho
          porque no me acuerdo nada de lo drogados que estabamos.
        </p>
      </div>
    </div>
  )
}

export default Preview
