import { navbar as Navbar, smallCard as SmallCard } from '../components'
import { Arrow, GridIcon, IntersectionIcon, Menu, StarIcon } from '../../public/assets/icons'
import './identifont.css'

export default function identifont ()  {
    return(
        <>
            <Navbar />
            <div className="grid-system">   
                <div className="grid-col-span-4">
                    <h1 className="title">IDENTIFONT</h1>
                </div>
                <SmallCard
                    title="BY APPEARANCE"
                    description="Identify a font by answering questions about key features"
                    icon={<StarIcon size={128} />}
                />
                <SmallCard
                    title="BY SIMILARITY"
                    description="Find fonts that are similar in appearance to a specified font"
                    icon={<IntersectionIcon />}
                />
                <SmallCard
                    title="BY YEAR"
                    description="Sort and find fonts by year of their creation. Best way to visualize the number of fonts here"
                    icon={<GridIcon size={128}/>}
                />
                <SmallCard 
                    title="BY DESIGNER/PUBLISHER"
                    description="Find a font if you know the designer or publisher"
                    icon={<Menu size={128}/>}
                />
                <div className="grid-col-span-2">mediumbox</div>
                <div className="grid-col-span-2">mediumbox</div>
            </div>
        </>
    )
}

