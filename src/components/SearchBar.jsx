import { IoSearchSharp } from 'react-icons/io5'

const SearchBar = (props) => {
  return (
    <span className='flex items-center border rounded-full w-[350px] px-5 py-2'>
      <IoSearchSharp/>
      <input type="text" className='outline-none border-0 ps-3 w-full grow' {...props} />  
    </span>
  )
}

export default SearchBar
