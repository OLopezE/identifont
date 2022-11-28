import './navbar.css';
import { VsMenu } from 'solid-icons/vs'
import { FiSearch } from 'solid-icons/fi'

export default function Navbar  () {
    return(
        <div className="nav-container">
            <button>
              <VsMenu size={24} />
            </button>
            <button>
                <FiSearch size={24} />
            </button>
        </div>
    );
};


