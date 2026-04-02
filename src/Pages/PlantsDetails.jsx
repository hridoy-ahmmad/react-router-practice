
import { useContext, useState } from 'react';
import { Link,  useLocation } from 'react-router';
import CartContext from '../Provider/CartContext';

const PlantsDetails = () => {
    // const { id } = useParams()
    // const [plant, setPlant] = useState({})
    // useEffect(() => {
    //     axios(`https://openapi.programming-hero.com/api/plant/${id}`)
    //         .then(data => setPlant(data.data.plants))
    // }, [id])
    // console.log(plant);

    const location = useLocation()
    console.log(location);
    // const { data } = useLoaderData()
    const { image, name, description, price, category } = location.state

    const {carts, setCarts} = useContext(CartContext)

    const isExist = carts.find(item => item.id === location.state.id)
    const handleAddCart = () => {
        if (isExist) {
            alert('already added')
            return
        }
        setCarts((prev) => [...prev, location.state])
    }
    return (
        <div className='max-w-5xl mx-auto'>
            <div className="card bg-base-100  shadow-xl border border-gray-200">
                <figure className="px-4 pt-4">
                    <img
                        src={image}
                        alt={name}
                        className="rounded-xl h-56 w-full object-contain" />
                </figure>
                <div className="card-body">
                    <div className="space-y-5">
                        <div>
                            <h2 className="card-title text-xl font-bold text-gray-800">{name}</h2>
                            <div className="badge badge-secondary badge-outline mt-1 italic text-xs">{category}</div>
                        </div>
                        {
                            description
                        }
                        <div className="text-lg font-semibold text-green-600">
                            Price: {price} tk
                        </div>
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <button
                            onClick={handleAddCart}
                            className="btn btn-primary btn-sm px-6">{isExist ? 'already added' : 'Add to cart'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantsDetails;