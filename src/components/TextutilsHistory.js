
export default function TextutisHistory(props) {

  let localup = localStorage.getItem("uptext");

  return (
    <>
      <h1 className='fs-2 text-light mt-1' >Your history expired after one hour.</h1>
      
      <p className='text-light fs-6'>{localup}</p>
    </>
  )
}
