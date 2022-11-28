import './smallCard.css'
import { mergeProps } from 'solid-js'
import { Arrow } from '../../../public/assets/icons';

const smallCard = (props) => {
    const merged = mergeProps({ title: "default", description: "default", icon: <Arrow size={128}/>}, props);

    return(
        <article>
            <div className="card-title-section">
                <h3>{merged.title}</h3>
                <button>
                    <Arrow size={64}/>
                </button>
            </div>
            <div className="icon">{merged.icon}</div>
            <p className="descriptive-text">{merged.description}</p>
        </article>
    )
}

export default smallCard;