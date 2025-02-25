import PropTypes from 'prop-types'
import Darkmode from './Darkmode';

const Navbar = ({title , item}) => {


  return (
    <>
        <div className="hover:cursor-pointer flex justify-between items-center p-4 dark:bg-neutral-800 bg-white shadow-2xl text-black dark:text-white w-full">
            <div className="text-3xl">{title}</div>
            <div className="flex text-2xl">
                {item.map((item, index) => (
                    <a href={item.href}
                       key={index}
                       className="px-4"
                    >{item.name}</a>
                ))}
            </div>
            <Darkmode />
        </div>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    item: PropTypes.arrayOf(PropTypes.func).isRequire
}

export default Navbar